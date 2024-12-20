import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const orderData = [
  { date: "2024-03-20", orderNo: "#12345", customer: "John Doe", status: "Completed", amount: "₹450" },
  { date: "2024-03-19", orderNo: "#12344", customer: "Jane Smith", status: "Running", amount: "₹380" },
  { date: "2024-03-18", orderNo: "#12343", customer: "Mike Johnson", status: "Cancelled", amount: "₹550" },
  { date: "2024-03-17", orderNo: "#12342", customer: "Sarah Williams", status: "Completed", amount: "₹290" },
  { date: "2024-03-16", orderNo: "#12341", customer: "Alex Brown", status: "Running", amount: "₹420" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Order Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Order Statistics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
                <p className="text-2xl font-bold text-primary">1,409</p>
              </div>
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">Running Orders</h3>
                <p className="text-2xl font-bold text-secondary">268</p>
              </div>
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">Completed Orders</h3>
                <p className="text-2xl font-bold text-success">549</p>
              </div>
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">Cancelled Orders</h3>
                <p className="text-2xl font-bold text-destructive">542</p>
              </div>
            </CardContent>
          </Card>

          {/* Site Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Site Statistics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">Approved Restaurants</h3>
                <p className="text-2xl font-bold text-primary">156</p>
              </div>
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">Live Restaurants</h3>
                <p className="text-2xl font-bold text-success">134</p>
              </div>
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">Pending Restaurants</h3>
                <p className="text-2xl font-bold text-warning">22</p>
              </div>
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h3 className="text-sm font-medium text-gray-500">Total Earnings</h3>
                <p className="text-2xl font-bold text-secondary">₹89,012</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Last 7-Day Order List */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Last 7-Day Order List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Order No</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderData.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.orderNo}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === "Completed" ? "bg-green-100 text-green-800" :
                        order.status === "Running" ? "bg-blue-100 text-blue-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell>{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}