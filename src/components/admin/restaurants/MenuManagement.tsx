import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const dummyMenuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "₹299",
    category: "Pizza",
    status: "active"
  },
  {
    id: 2,
    name: "Chicken Biryani",
    price: "₹399",
    category: "Rice",
    status: "active"
  }
];

export function MenuManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Menu Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyMenuItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}