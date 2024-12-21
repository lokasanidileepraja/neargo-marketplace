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
} from "lucide-react";
import { SidebarItem } from "./sidebar/SidebarItem";

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
    href: "/admin/promocodes",  // Fixed the path
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
  return (
    <div className="fixed top-[64px] left-0 w-[300px] h-[calc(100vh-64px)] bg-white border-r border-gray-200 overflow-y-auto z-50">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Admin Dashboard</h2>
      </div>
      <div className="overflow-y-auto h-full">
        {menuItems.map((item) => (
          <div key={item.title} className="mb-2">
            <SidebarItem
              title={item.title}
              icon={item.icon}
              href={item.href}
            />
          </div>
        ))}
      </div>
    </div>
  );
}