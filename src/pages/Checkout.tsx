import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { total, items, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your order.",
    });
    clearCart();
    navigate("/order-success");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold">Your cart is empty</h2>
                <Button onClick={() => navigate("/")}>Continue Shopping</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate("/cart")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cart
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">Delivery Address</label>
                  <Input id="address" placeholder="Enter your delivery address" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" placeholder="Enter your phone number" type="tel" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.name}</span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>₹50.00</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg mt-2 pt-2 border-t">
                      <span>Total</span>
                      <span>₹{(total + 50).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}