import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const orders = [
  {
    id: "#12345",
    customer: "John Doe",
    restaurant: "Pizza Palace",
    status: "Delivered",
    amount: "₹450",
    date: "2024-03-20"
  },
  {
    id: "#12344",
    customer: "Jane Smith",
    restaurant: "Burger King",
    status: "In Progress",
    amount: "₹380",
    date: "2024-03-19"
  },
  {
    id: "#12343",
    customer: "Mike Johnson",
    restaurant: "Taco Bell",
    status: "Cancelled",
    amount: "₹550",
    date: "2024-03-18"
  }
];

export function RecentOrders() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Restaurant</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.restaurant}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === "Delivered" ? "bg-green-100 text-green-800" :
                    order.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}