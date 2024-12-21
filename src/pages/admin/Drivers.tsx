import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyDrivers = [
  {
    id: 1,
    name: "John Smith",
    contactNumber: "+1234567890",
    rating: 5,
    documentStatus: "verified",
    onlineStatus: "online",
  },
  {
    id: 2,
    name: "Jane Doe",
    contactNumber: "+1987654321",
    rating: 5,
    documentStatus: "pending",
    onlineStatus: "offline",
  },
];

export default function Drivers() {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getOnlineStatusColor = (status: string) => {
    return status === "online" 
      ? "bg-green-100 text-green-800" 
      : "bg-red-100 text-red-800";
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Delivery Persons</h1>
          <p className="text-muted-foreground">
            Manage delivery personnel and their assignments
          </p>
        </div>
        <Button 
          onClick={() => navigate("/admin/drivers/add")}
          className="bg-primary hover:bg-primary/90"
        >
          + Add Delivery Person
        </Button>
      </div>

      <div className="flex justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search delivery persons..."
            className="pl-10 bg-white border-gray-200"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] bg-white border-gray-200">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border border-gray-200 overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-gray-50">
              <TableHead className="text-gray-600">Name</TableHead>
              <TableHead className="text-gray-600">Contact Number</TableHead>
              <TableHead className="text-gray-600">Rating</TableHead>
              <TableHead className="text-gray-600">Document Status</TableHead>
              <TableHead className="text-gray-600">Online Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyDrivers.map((driver) => (
              <TableRow key={driver.id} className="hover:bg-gray-50">
                <TableCell className="text-gray-900">{driver.name}</TableCell>
                <TableCell className="text-gray-900">{driver.contactNumber}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {[...Array(driver.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(driver.documentStatus)}`}>
                    {driver.documentStatus}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-xs ${getOnlineStatusColor(driver.onlineStatus)}`}>
                    {driver.onlineStatus}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}