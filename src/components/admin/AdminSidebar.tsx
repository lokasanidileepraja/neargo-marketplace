import {
  BarChart3,
  ShoppingBag,
  Store,
  Truck,
  DollarSign,
  Settings,
} from "lucide-react";
import { SidebarItem } from "./sidebar/SidebarItem";
import { SidebarGroup } from "./sidebar/SidebarGroup";

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/admin/dashboard",
  },
  {
    title: "Orders",
    icon: ShoppingBag,
    href: "/admin/orders",
  },
  {
    title: "Restaurants",
    icon: Store,
    href: "/admin/restaurants",
  },
  {
    title: "Drivers",
    icon: Truck,
    href: "/admin/drivers",
  },
  {
    title: "Finances",
    icon: DollarSign,
    href: "/admin/finances",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export function AdminSidebar() {
  return (
    <div className="fixed top-[64px] left-0 w-[300px] h-[calc(100vh-64px)] bg-white border-r overflow-y-auto z-50">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
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