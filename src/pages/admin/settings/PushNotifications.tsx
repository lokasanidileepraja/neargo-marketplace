import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BackButton from "@/components/BackButton";

const notifications = [
  {
    id: 1,
    type: "All Users",
    message: "Special discount on all orders today!",
    date: "2024-03-20",
  },
  {
    id: 2,
    type: "All Drivers",
    message: "New incentive program starting next week",
    date: "2024-03-19",
  },
  {
    id: 3,
    type: "All Restaurants",
    message: "System maintenance scheduled for tonight",
    date: "2024-03-18",
  },
];

export default function PushNotifications() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin/settings" label="Back to Settings" />
        <h1 className="text-3xl font-bold mb-8">Push Notifications</h1>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send New Notification</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Notification Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-users">All Users</SelectItem>
                      <SelectItem value="all-drivers">All Drivers</SelectItem>
                      <SelectItem value="all-restaurants">
                        All Restaurants
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Enter notification message" />
                </div>

                <Button>Send Notification</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Past Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notifications.map((notification) => (
                    <TableRow key={notification.id}>
                      <TableCell>{notification.id}</TableCell>
                      <TableCell>{notification.type}</TableCell>
                      <TableCell>{notification.message}</TableCell>
                      <TableCell>{notification.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline">Previous</Button>
                <Button variant="outline">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}