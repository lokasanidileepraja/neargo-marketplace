import {
  BarChart3,
  ShoppingCart,
  Package,
  Settings,
  Store
} from "lucide-react";
import { VendorSidebarItem } from "./sidebar/VendorSidebarItem";

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/vendor/dashboard",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "/vendor/orders",
  },
  {
    title: "Products",
    icon: Package,
    href: "/vendor/products",
  },
  {
    title: "Analytics",
    icon: Store,
    href: "/vendor/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/vendor/settings",
  },
];

export function VendorSidebar() {
  return (
    <div className="fixed top-[64px] left-0 w-[300px] h-[calc(100vh-64px)] bg-white border-r border-gray-200 overflow-y-auto shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Vendor Dashboard</h2>
      </div>
      <div className="px-4 pb-6">
        {menuItems.map((item) => (
          <div key={item.title} className="mb-2">
            <VendorSidebarItem
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