import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DriverRegistration = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Driver Registration</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Enter phone number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle Type</Label>
              <Input id="vehicle" placeholder="Enter vehicle type" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="license">Driver's License Number</Label>
              <Input id="license" placeholder="Enter license number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Delivery Experience</Label>
              <Textarea id="experience" placeholder="Describe your delivery experience" />
            </div>

            <Button type="submit" className="w-full">
              Register as Driver
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriverRegistration;