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
import { Filter, Plus, Search } from "lucide-react";

export default function Promocodes() {
  const promocodes = [
    {
      id: "1",
      code: "SUMMER2024",
      discount: "20%",
      usageLimit: "100",
      used: "45",
      status: "Active",
      expiry: "2024-08-31",
    },
    {
      id: "2",
      code: "WELCOME50",
      discount: "50%",
      usageLimit: "200",
      used: "150",
      status: "Active",
      expiry: "2024-07-15",
    },
    // Add more promocodes as needed
  ];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <AdminHeader 
        title="Promocodes" 
        description="Manage promotional codes and discounts"
      />
      
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search promocodes..."
              className="pl-8 bg-white border-gray-200"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Usage Limit</TableHead>
              <TableHead>Used</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {promocodes.map((promo) => (
              <TableRow key={promo.id}>
                <TableCell className="font-medium">{promo.code}</TableCell>
                <TableCell>{promo.discount}</TableCell>
                <TableCell>{promo.usageLimit}</TableCell>
                <TableCell>{promo.used}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {promo.status}
                  </Badge>
                </TableCell>
                <TableCell>{promo.expiry}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Edit
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