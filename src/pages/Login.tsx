import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

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
    });

    // Cleanup subscription
    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome to NearGo</h1>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            style: {
              button: {
                background: 'rgb(59 130 246)',
                color: 'white',
                borderRadius: '0.375rem',
              },
              anchor: {
                color: 'rgb(59 130 246)',
              },
            },
          }}
          theme="light"
          providers={[]}
          redirectTo={window.location.origin}
          onError={(error) => {
            toast({
              title: "Error",
              description: error.message,
              variant: "destructive",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Login;