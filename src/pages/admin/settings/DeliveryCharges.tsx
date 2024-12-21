import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BackButton from "@/components/BackButton";

const deliveryCharges = [
  { id: 1, startLimit: 0, closeLimit: 5, charges: 50 },
  { id: 2, startLimit: 5, closeLimit: 10, charges: 80 },
  { id: 3, startLimit: 10, closeLimit: 15, charges: 100 },
];

export default function DeliveryCharges() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin/settings" label="Back to Settings" />
        <h1 className="text-3xl font-bold mb-8">Delivery Charges</h1>

        <Card>
          <CardHeader>
            <CardTitle>Delivery Charges Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>No.</TableHead>
                  <TableHead>Start Limit (km)</TableHead>
                  <TableHead>Close Limit (km)</TableHead>
                  <TableHead>Charges (₹)</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deliveryCharges.map((charge) => (
                  <TableRow key={charge.id}>
                    <TableCell>{charge.id}</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        defaultValue={charge.startLimit}
                        className="w-24"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        defaultValue={charge.closeLimit}
                        className="w-24"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        defaultValue={charge.charges}
                        className="w-24"
                      />
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 flex justify-between">
              <Button variant="outline">Add New Range</Button>
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}