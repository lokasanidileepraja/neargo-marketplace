import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

const dummyDrivers = [
  {
    id: 1,
    name: "John Smith",
    phone: "+1234567890",
    status: "Active",
    rating: 4.8,
    earnings: "₹15,000"
  },
  {
    id: 2,
    name: "Jane Doe",
    phone: "+9876543210",
    status: "Inactive",
    rating: 4.5,
    earnings: "₹12,000"
  }
];

export function DriverList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Earnings</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyDrivers.map((driver) => (
          <TableRow key={driver.id}>
            <TableCell>{driver.name}</TableCell>
            <TableCell>{driver.phone}</TableCell>
            <TableCell>
              <span className={`px-2 py-1 rounded-full text-xs ${
                driver.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {driver.status}
              </span>
            </TableCell>
            <TableCell>{driver.rating}</TableCell>
            <TableCell>{driver.earnings}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}