import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Order {
  id: string;
  customer: string;
  restaurant: string;
  status: "Delivered" | "In Progress" | "Cancelled";
  amount: string;
  date: string;
}

const orders: Order[] = [
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

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "";
  }
};

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Desktop view */}
        <div className="hidden md:block">
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
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.restaurant}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile view */}
        <div className="md:hidden space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-4 rounded-lg border space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{order.id}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Customer</p>
                  <p>{order.customer}</p>
                </div>
                <div>
                  <p className="text-gray-500">Restaurant</p>
                  <p>{order.restaurant}</p>
                </div>
                <div>
                  <p className="text-gray-500">Amount</p>
                  <p>{order.amount}</p>
                </div>
                <div>
                  <p className="text-gray-500">Date</p>
                  <p>{order.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}