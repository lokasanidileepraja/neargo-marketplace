import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DriverList } from "@/components/admin/drivers/DriverList";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Drivers() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 min-w-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Delivery Persons</h1>
          <p className="text-sm text-muted-foreground">
            Manage delivery personnel and their assignments
          </p>
        </div>
        <Button 
          onClick={() => navigate("/admin/drivers/add")}
          size="lg"
          className="w-full sm:w-auto bg-primary hover:bg-primary/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Delivery Person
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by name, phone or status..."
            className="pl-10 bg-white border-gray-200 w-full"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px] bg-white border-gray-200">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
            <SelectItem value="busy">Busy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <DriverList />
        </div>
      </div>
    </div>
  );
}