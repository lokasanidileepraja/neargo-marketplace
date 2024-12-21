import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-lg mx-auto p-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <h1 className="text-3xl font-bold text-gray-900">Order Placed Successfully!</h1>
            <p className="text-gray-600">
              Thank you for your order. We'll send you a confirmation email with your order details.
            </p>
            <div className="space-y-4 w-full">
              <Button 
                className="w-full"
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </Button>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => navigate('/orders')}
              >
                View Orders
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}