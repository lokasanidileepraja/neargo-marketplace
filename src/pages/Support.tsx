import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

export default function Support() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Support</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Phone className="h-8 w-8 mx-auto text-primary" />
                <h3 className="font-semibold">Phone Support</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Mail className="h-8 w-8 mx-auto text-primary" />
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-gray-600">support@neargo.com</p>
                <p className="text-sm text-gray-500">Response within 24h</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <MessageCircle className="h-8 w-8 mx-auto text-primary" />
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-gray-600">Chat with us</p>
                <p className="text-sm text-gray-500">Available 9AM-6PM</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  How do I track my order?
                </h3>
                <p className="text-gray-600 pl-7">
                  You can track your order in real-time through the "Orders" section in your account.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600 pl-7">
                  We accept all major credit cards, digital wallets, and cash on delivery.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  How can I become a delivery partner?
                </h3>
                <p className="text-gray-600 pl-7">
                  Visit our Driver Registration page to apply as a delivery partner.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}