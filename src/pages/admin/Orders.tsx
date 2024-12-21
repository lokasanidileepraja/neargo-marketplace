import { AdminHeader } from "@/components/admin/AdminHeader";
import { useState } from "react";
import { useParams } from "react-router-dom";
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

// Dummy data for orders
const orders = [
  {
    id: "#12345",
    date: "2024-03-20",
    userName: "John Doe",
    totalCost: "₹450",
    refundStatus: "Not Requested",
    status: "Delivered",
  },
  {
    id: "#12344",
    date: "2024-03-19",
    userName: "Jane Smith",
    totalCost: "₹380",
    refundStatus: "Pending",
    status: "In Progress",
  },
  {
    id: "#12343",
    date: "2024-03-18",
    userName: "Mike Johnson",
    totalCost: "₹550",
    refundStatus: "Approved",
    status: "Cancelled",
  },
];

const orderStatuses = [
  "All",
  "Pending",
  "Approved",
  "Rejected",
  "Ongoing",
  "Completed",
  "Cancelled",
];

export default function Orders() {
  const { status } = useParams();
  const [selectedStatus, setSelectedStatus] = useState(status || "All");

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin" label="Back to Dashboard" />
        <h1 className="text-3xl font-bold mb-8">Order Management</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Input
                type="search"
                placeholder="Search orders..."
                className="max-w-sm"
              />
              <div className="flex gap-2 flex-wrap">
                {orderStatuses.map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? "default" : "outline"}
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Orders List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order No.</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>User Name</TableHead>
                  <TableHead>Total Cost</TableHead>
                  <TableHead>Refund Status</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.userName}</TableCell>
                    <TableCell>{order.totalCost}</TableCell>
                    <TableCell>{order.refundStatus}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" className="mr-2">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}