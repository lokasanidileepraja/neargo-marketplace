import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Dummy data for testing
const dummyOrders = [
  {
    orderId: "ORD123ABC",
    date: "2024-03-21",
    status: "Delivered",
    total: 2499.99,
    items: [
      { name: "Pizza Margherita", quantity: 2 },
      { name: "Coca Cola", quantity: 1 }
    ]
  },
  {
    orderId: "ORD456DEF",
    date: "2024-03-20",
    status: "In Transit",
    total: 1899.50,
    items: [
      { name: "Chicken Biryani", quantity: 1 },
      { name: "Raita", quantity: 1 }
    ]
  },
  {
    orderId: "ORD789GHI",
    date: "2024-03-19",
    status: "Processing",
    total: 3299.00,
    items: [
      { name: "Butter Chicken", quantity: 2 },
      { name: "Naan", quantity: 4 }
    ]
  }
];

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Orders</h1>
        <Button onClick={() => navigate("/")}>Continue Shopping</Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyOrders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="font-medium">{order.orderId}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  {order.items.map((item, index) => (
                    <div key={index}>
                      {item.quantity}x {item.name}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">₹{order.total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Orders;