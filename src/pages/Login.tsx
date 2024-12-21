import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");

  useEffect(() => {
    // Check current session on mount
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        toast({
          title: "Already logged in",
          description: "Redirecting to home page",
        });
        navigate("/");
      }
    };
    
    checkSession();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        navigate("/");
      }
      if (event === "SIGNED_OUT") {
        toast({
          title: "Signed out",
          description: "You have been signed out",
        });
      }
      if (event === "USER_UPDATED") {
        toast({
          title: "Profile updated",
          description: "Your profile has been updated",
        });
      }
      if (event === "PASSWORD_RECOVERY") {
        toast({
          title: "Password recovery email sent",
          description: "Please check your email",
        });
      }
    });

    // Cleanup subscription
    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: phoneNumber,
      });
      if (error) throw error;
      
      toast({
        title: "OTP Sent",
        description: "Please check your phone for the verification code",
      });
      setStep("otp");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.verifyOtp({
        phone: phoneNumber,
        token: otp,
        type: 'sms',
      });
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Phone number verified successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome to NearGo</h1>
        
        {step === "phone" ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send OTP
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">Enter OTP</Label>
              <InputOTP
                value={otp}
                onChange={setOtp}
                maxLength={6}
                render={({ slots }) => (
                  <InputOTPGroup>
                    {slots.map((slot, index) => (
                      <InputOTPSlot key={index} index={index} {...slot} />
                    ))}
                  </InputOTPGroup>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Verify OTP
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setStep("phone")}
            >
              Change Phone Number
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;