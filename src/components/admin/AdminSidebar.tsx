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
} from "lucide-react";
import { SidebarItem } from "./sidebar/SidebarItem";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

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

  const sidebarClasses = `
    ${isMobile 
      ? `fixed inset-y-0 left-0 z-50 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`
      : 'fixed top-[64px] left-0 w-[300px] h-[calc(100vh-64px)]'
    }
    bg-white border-r border-gray-200 overflow-y-auto shadow-sm
  `;

  return (
    <>
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-3 left-4 z-50"
          onClick={toggleSidebar}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}
      <div className={sidebarClasses}>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Admin Dashboard</h2>
        </div>
        <div className="px-4 pb-6">
          {menuItems.map((item) => (
            <div key={item.title} className="mb-2">
              <SidebarItem
                title={item.title}
                icon={item.icon}
                href={item.href}
                onClick={() => isMobile && setIsOpen(false)}
              />
            </div>
          ))}
        </div>
      </div>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}