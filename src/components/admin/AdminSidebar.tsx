import {
  BarChart3,
  ShoppingCart,
  Store,
  Truck,
  DollarSign,
  Settings,
  Clock,
  Tag,
  Star,
  File,
  FileText,
  Menu,
  X,
  Home
} from "lucide-react";
import { SidebarItem } from "./sidebar/SidebarItem";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/admin/dashboard",
  },
  {
    title: "Dispatcher",
    icon: Clock,
    href: "/admin/dispatcher",
  },
  {
    title: "Delivery Persons",
    icon: Truck,
    href: "/admin/drivers",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "/admin/orders",
  },
  {
    title: "Restaurants",
    icon: Store,
    href: "/admin/restaurants",
  },
  {
    title: "Earnings",
    icon: DollarSign,
    href: "/admin/finances",
  },
  {
    title: "Promocodes",
    icon: Tag,
    href: "/admin/promocodes",
  },
  {
    title: "Reviews",
    icon: Star,
    href: "/admin/reviews",
  },
  {
    title: "Documents",
    icon: File,
    href: "/admin/documents",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
  {
    title: "Pages",
    icon: FileText,
    href: "/admin/pages",
  },
];

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarContent = (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Admin Dashboard</h2>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
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
        {menuItems.map((item) => (
          <SidebarItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            href={item.href}
            onClick={() => isMobile && setIsOpen(false)}
          />
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />
            <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              {sidebarContent}
            </div>
          </>
        )}
      </>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-[300px] h-screen bg-white border-r border-gray-200 overflow-y-auto shadow-sm">
      {sidebarContent}
    </div>
  );
}