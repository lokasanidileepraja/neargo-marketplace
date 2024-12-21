import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin" label="Back to Dashboard" />
        <h1 className="text-3xl font-bold mb-8">Platform Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Platform Name</label>
                <Input defaultValue="NearGo" />
              </div>
              <div>
                <label className="text-sm font-medium">Support Email</label>
                <Input type="email" defaultValue="support@neargo.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Contact Phone</label>
                <Input type="tel" defaultValue="+1234567890" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Commission Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Restaurant Commission (%)</label>
                <Input type="number" defaultValue="15" />
              </div>
              <div>
                <label className="text-sm font-medium">Driver Commission (%)</label>
                <Input type="number" defaultValue="10" />
              </div>
              <Button>Update Commission Rates</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email Notifications</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>New Order Notifications</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Daily Reports</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Restaurant Updates</span>
                  </div>
                </div>
              </div>
              <Button>Save Notification Preferences</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery Zones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Default Delivery Radius (km)</label>
                <Input type="number" defaultValue="5" />
              </div>
              <div>
                <label className="text-sm font-medium">Maximum Delivery Distance (km)</label>
                <Input type="number" defaultValue="10" />
              </div>
              <Button>Update Delivery Zones</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}