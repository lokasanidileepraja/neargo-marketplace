import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export default function Drivers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin" label="Back to Dashboard" />
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Driver Management</h1>
          <Button>Add New Driver</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Drivers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">89</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Now</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">45</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pending Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">4.6</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Drivers List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Orders Today</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Earnings Today</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Smith</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      Active
                    </span>
                  </TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>4.8</TableCell>
                  <TableCell>₹2,450</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Track</Button>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}