import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export default function ServiceSettings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin/settings" label="Back to Settings" />
        <h1 className="text-3xl font-bold mb-8">Service Settings</h1>

        <Card>
          <CardHeader>
            <CardTitle>Service Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Store Search Radius (KM)
                  </label>
                  <Input type="number" placeholder="Enter radius" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Tax Rate (%)</label>
                  <Input type="number" placeholder="Enter tax rate" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Admin Commission (%)
                  </label>
                  <Input type="number" placeholder="Enter commission rate" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Cancel Charge (%)
                  </label>
                  <Input type="number" placeholder="Enter cancel charge" />
                </div>
              </div>

              <Button className="w-full md:w-auto">Save Settings</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}