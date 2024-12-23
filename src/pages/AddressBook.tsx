import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Building2, Briefcase, Plus, MapPin, Edit2, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

const initialAddresses = [
  {
    id: 1,
    type: "home",
    title: "Home",
    address: "123 Main St, Apartment 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    icon: Home,
  },
  {
    id: 2,
    type: "work",
    title: "Office",
    address: "456 Business Ave, Floor 12",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    icon: Briefcase,
  },
  {
    id: 3,
    type: "other",
    title: "Apartment",
    address: "789 Park Road",
    city: "New York",
    state: "NY",
    zipCode: "10003",
    icon: Building2,
  },
];

export default function AddressBook() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
    toast({
      title: "Address Deleted",
      description: "The address has been removed from your address book.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAddForm(false);
    toast({
      title: "Address Added",
      description: "New address has been added to your address book.",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Address Book</h1>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Address
            </Button>
          </div>
          
          {showAddForm && (
            <Card>
              <CardHeader>
                <CardTitle>Add New Address</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Address Title</Label>
                      <Input id="title" placeholder="e.g., Home, Office" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Address Type</Label>
                      <select
                        id="type"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                      >
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="Enter your street address" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input id="zipCode" />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="submit">Save Address</Button>
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
            {addresses.map((address) => (
              <Card key={address.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-primary/10">
                        <address.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{address.title}</h3>
                        <p className="text-gray-600 mt-1">{address.address}</p>
                        <p className="text-gray-600">
                          {address.city}, {address.state} {address.zipCode}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(address.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}