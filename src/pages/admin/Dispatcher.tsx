import { AdminHeader } from "@/components/admin/AdminHeader";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";

export default function Dispatcher() {
  const dispatcherData = [
    {
      id: "1",
      orderNumber: "#ORD-123",
      restaurant: "Pizza Palace",
      customer: "John Doe",
      driver: "Mike Smith",
      status: "Assigned",
      time: "10:30 AM",
    },
    {
      id: "2",
      orderNumber: "#ORD-124",
      restaurant: "Burger King",
      customer: "Jane Smith",
      driver: "Tom Wilson",
      status: "In Progress",
      time: "11:45 AM",
    },
    // Add more dispatcher data as needed
  ];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <AdminHeader 
        title="Dispatcher" 
        description="Manage and track delivery assignments in real-time"
      />
      
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search orders..."
              className="pl-8 bg-white border-gray-200"
            />
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order Number</TableHead>
              <TableHead>Restaurant</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dispatcherData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.orderNumber}</TableCell>
                <TableCell>{item.restaurant}</TableCell>
                <TableCell>{item.customer}</TableCell>
                <TableCell>{item.driver}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}