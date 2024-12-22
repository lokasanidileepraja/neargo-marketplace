import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

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
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);

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

  const handleDelete = (id: number) => {
    console.log("Deleting driver:", id);
    setSelectedDriver(null);
  };

  // Mobile card view component
  const MobileDriverCard = ({ driver }: { driver: typeof dummyDrivers[0] }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-medium">{driver.name}</h3>
          <p className="text-sm text-gray-500">{driver.phone}</p>
        </div>
        <Badge variant="secondary" className={getOnlineStatusColor(driver.onlineStatus)}>
          {driver.onlineStatus}
        </Badge>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <Badge variant="secondary" className={getStatusColor(driver.status)}>
            {driver.status}
          </Badge>
        </div>
        <div>
          <p className="text-sm text-gray-500">Rating</p>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            ★ {driver.rating}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500">Earnings</p>
          <p className="font-medium">{driver.earnings}</p>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm" className="hover:bg-gray-100">
          <Edit2 className="h-4 w-4" />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2 className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Driver</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this driver? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleDelete(driver.id)}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );

  return (
    <div>
      {/* Mobile View */}
      <div className="md:hidden">
        {dummyDrivers.map((driver) => (
          <MobileDriverCard key={driver.id} driver={driver} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Phone</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Online Status</TableHead>
              <TableHead className="font-semibold">Rating</TableHead>
              <TableHead className="font-semibold">Earnings</TableHead>
              <TableHead className="font-semibold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyDrivers.map((driver) => (
              <TableRow key={driver.id} className="hover:bg-gray-50/50">
                <TableCell className="font-medium">{driver.name}</TableCell>
                <TableCell>{driver.phone}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(driver.status)}>
                    {driver.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getOnlineStatusColor(driver.onlineStatus)}>
                    {driver.onlineStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    ★ {driver.rating}
                  </span>
                </TableCell>
                <TableCell>{driver.earnings}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="hover:bg-gray-100">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Driver</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this driver? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(driver.id)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}