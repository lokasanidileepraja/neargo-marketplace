import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

const initialPaymentMethods = [
  {
    id: 1,
    type: "credit",
    cardNumber: "**** **** **** 1234",
    expiryDate: "12/25",
    cardHolder: "John Doe",
  },
  {
    id: 2,
    type: "credit",
    cardNumber: "**** **** **** 5678",
    expiryDate: "09/24",
    cardHolder: "John Doe",
  },
];

export default function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    toast({
      title: "Payment Method Removed",
      description: "The payment method has been deleted from your account.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAddForm(false);
    toast({
      title: "Payment Method Added",
      description: "New payment method has been added to your account.",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Payment Methods</h1>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          </div>
          
          {showAddForm && (
            <Card>
              <CardHeader>
                <CardTitle>Add New Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        type="password"
                        maxLength={4}
                        placeholder="***"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardHolder">Card Holder Name</Label>
                    <Input
                      id="cardHolder"
                      placeholder="Name as appears on card"
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="submit">Save Card</Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
          
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <Card key={method.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full p-2 bg-primary/10">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{method.cardNumber}</p>
                        <p className="text-sm text-gray-500">
                          Expires {method.expiryDate}
                        </p>
                        <p className="text-sm text-gray-500">
                          {method.cardHolder}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(method.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {paymentMethods.length === 0 && (
            <div className="text-center py-12">
              <CreditCard className="h-12 w-12 mx-auto text-gray-400" />
              <h2 className="mt-4 text-xl font-semibold">
                No payment methods added
              </h2>
              <p className="mt-2 text-gray-600">
                Add a payment method to make checkout easier
              </p>
              <Button
                onClick={() => setShowAddForm(true)}
                className="mt-6"
              >
                Add Payment Method
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}