import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
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
    <div className="min-h-screen bg-[#0B1120] text-white">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 ml-[300px]">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold">Delivery Persons</h1>
                <p className="text-gray-400 mt-2">
                  Manage delivery personnel and their assignments
                </p>
              </div>
              <Button 
                onClick={() => navigate("/admin/drivers/add")}
                className="bg-blue-500 hover:bg-blue-600"
              >
                + Add Delivery Person
              </Button>
            </div>

            <div className="flex justify-between gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search delivery persons..."
                  className="pl-10 bg-transparent border-gray-700 text-white"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] bg-transparent border-gray-700 text-white">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-lg border border-gray-700 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-transparent">
                    <TableHead className="text-gray-400">Name</TableHead>
                    <TableHead className="text-gray-400">Contact Number</TableHead>
                    <TableHead className="text-gray-400">Rating</TableHead>
                    <TableHead className="text-gray-400">Document Status</TableHead>
                    <TableHead className="text-gray-400">Online Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyDrivers.map((driver) => (
                    <TableRow key={driver.id} className="border-gray-700 hover:bg-gray-800/50">
                      <TableCell className="text-white">{driver.name}</TableCell>
                      <TableCell className="text-white">{driver.contactNumber}</TableCell>
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
        </main>
      </div>
    </div>
  );
}