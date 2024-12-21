import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { items, total, clearCart } = useCart();
  const [orderDetails, setOrderDetails] = useState({
    orderId: location.state?.orderId || "ORD" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    estimatedDelivery: new Date(Date.now() + 30 * 60000).toLocaleTimeString(),
    items: items,
    total: total,
    deliveryAddress: location.state?.deliveryAddress || "123 Main St, City, Country"
  });
  
  useEffect(() => {
    // Clear cart only when component unmounts
    return () => {
      clearCart();
    };
  }, []); // Empty dependency array

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-500 mb-6">
          Thank you for your order. We'll notify you when it's on the way.
        </p>

        <div className="bg-white rounded-lg shadow p-6 mb-6 text-left">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Order ID</p>
              <p className="font-medium">{orderDetails.orderId}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Estimated Delivery</p>
              <p className="font-medium">{orderDetails.estimatedDelivery}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Delivery Address</p>
              <p className="font-medium">{orderDetails.deliveryAddress}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Order Summary</p>
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between py-1">
                  <span>{item.quantity}x {item.name}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="mt-2 pt-2 border-t">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹{orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-x-4">
          <Button onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
          <Button variant="outline" onClick={() => navigate("/orders")}>
            View Orders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;