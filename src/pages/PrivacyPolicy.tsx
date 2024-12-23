import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6">
              <li>Name and contact information</li>
              <li>Delivery address</li>
              <li>Payment information</li>
              <li>Order history</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6">
              <li>Process your orders</li>
              <li>Send order confirmations</li>
              <li>Provide customer support</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Information Sharing</h2>
            <p>We share your information with:</p>
            <ul className="list-disc pl-6">
              <li>Restaurants to fulfill your orders</li>
              <li>Delivery partners to deliver your orders</li>
              <li>Payment processors to process payments</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;