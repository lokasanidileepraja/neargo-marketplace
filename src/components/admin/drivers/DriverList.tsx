import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const dummyDrivers = [
  {
    id: 1,
    name: "John Smith",
    phone: "+1234567890",
    status: "Active",
    rating: 4.8,
    earnings: "₹15,000",
    onlineStatus: "online"
  },
  {
    id: 2,
    name: "Jane Doe",
    phone: "+9876543210",
    status: "Inactive",
    rating: 4.5,
    earnings: "₹12,000",
    onlineStatus: "offline"
  }
];

export function DriverList() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      case "inactive":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getOnlineStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-100 text-green-800 border-green-200";
      case "offline":
        return "bg-red-100 text-red-800 border-red-200";
      case "busy":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/50">
            <TableHead className="font-semibold whitespace-nowrap">Name</TableHead>
            <TableHead className="font-semibold whitespace-nowrap">Phone</TableHead>
            <TableHead className="font-semibold whitespace-nowrap">Status</TableHead>
            <TableHead className="font-semibold whitespace-nowrap">Online Status</TableHead>
            <TableHead className="font-semibold whitespace-nowrap">Rating</TableHead>
            <TableHead className="font-semibold whitespace-nowrap">Earnings</TableHead>
            <TableHead className="font-semibold text-right whitespace-nowrap">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyDrivers.map((driver) => (
            <TableRow key={driver.id} className="hover:bg-gray-50/50">
              <TableCell className="font-medium whitespace-nowrap">{driver.name}</TableCell>
              <TableCell className="whitespace-nowrap">{driver.phone}</TableCell>
              <TableCell>
                <Badge variant="secondary" className={`whitespace-nowrap ${getStatusColor(driver.status)}`}>
                  {driver.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className={`whitespace-nowrap ${getOnlineStatusColor(driver.onlineStatus)}`}>
                  {driver.onlineStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 whitespace-nowrap">
                  ★ {driver.rating}
                </span>
              </TableCell>
              <TableCell className="whitespace-nowrap">{driver.earnings}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-gray-100"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    className="hover:bg-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}