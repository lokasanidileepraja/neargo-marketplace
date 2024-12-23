import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Terms of Service</h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using our services, you agree to be bound by these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
            <ul className="list-disc pl-6">
              <li>You must be at least 18 years old to use our services</li>
              <li>You agree to provide accurate and complete information</li>
              <li>You are responsible for maintaining the security of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Orders and Payments</h2>
            <ul className="list-disc pl-6">
              <li>All orders are subject to availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Payment must be made at the time of ordering</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Delivery</h2>
            <ul className="list-disc pl-6">
              <li>Delivery times are estimates only</li>
              <li>We are not responsible for delays beyond our control</li>
              <li>You must provide accurate delivery information</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;