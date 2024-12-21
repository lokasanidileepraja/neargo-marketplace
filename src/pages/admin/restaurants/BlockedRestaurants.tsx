import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export default function BlockedRestaurants() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin/restaurants" label="Back to Restaurants" />
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blocked Restaurants</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Blocked Restaurant List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Restaurant Name</TableHead>
                  <TableHead>Blocked Date</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Tasty Bites</TableCell>
                  <TableCell>2024-03-10</TableCell>
                  <TableCell>Multiple customer complaints</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="default" size="sm">Unblock</Button>
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