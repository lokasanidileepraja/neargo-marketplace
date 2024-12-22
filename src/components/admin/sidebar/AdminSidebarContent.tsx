import { Home, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarItem } from "../sidebar/SidebarItem";
import { adminMenuItems } from "./adminMenuItems";
import { Button } from "@/components/ui/button";

interface AdminSidebarContentProps {
  onClose?: () => void;
}

export function AdminSidebarContent({ onClose }: AdminSidebarContentProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Admin Dashboard</h2>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
      <Link 
        to="/"
        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Home className="h-5 w-5" />
        <span>Back to Home</span>
      </Link>
      <div className="space-y-2">
        {adminMenuItems.map((item) => (
          <SidebarItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            href={item.href}
            onClick={onClose}
          />
        ))}
      </div>
    </div>
  );
}