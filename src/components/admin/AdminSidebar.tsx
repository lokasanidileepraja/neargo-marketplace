import {
  BarChart3,
  ShoppingBag,
  Store,
  Truck,
  DollarSign,
  Settings,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SidebarItem } from "./sidebar/SidebarItem";
import { SidebarGroup } from "./sidebar/SidebarGroup";

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/admin/dashboard",
  },
  {
    title: "Orders",
    icon: ShoppingBag,
    subItems: [
      { title: "All Orders", href: "/admin/orders" },
      { title: "Pending Orders", href: "/admin/orders/pending" },
      { title: "Approved Orders", href: "/admin/orders/approved" },
      { title: "Rejected Orders", href: "/admin/orders/rejected" },
      { title: "Ongoing Orders", href: "/admin/orders/ongoing" },
      { title: "Completed Orders", href: "/admin/orders/completed" },
      { title: "Cancelled Orders", href: "/admin/orders/cancelled" },
    ],
  },
  {
    title: "Restaurants",
    icon: Store,
    subItems: [
      { title: "Add Restaurant", href: "/admin/restaurants/add" },
      { title: "Restaurant List", href: "/admin/restaurants" },
      { title: "Un-Approved Restaurants", href: "/admin/restaurants/unapproved" },
      { title: "Blocked Restaurants", href: "/admin/restaurants/blocked" },
      { title: "Rejected Restaurants", href: "/admin/restaurants/rejected" },
    ],
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
    subItems: [
      { title: "General Settings", href: "/admin/settings" },
      { title: "Delivery Charges", href: "/admin/settings/delivery-charges" },
      { title: "Push Notifications", href: "/admin/settings/notifications" },
      { title: "Service Settings", href: "/admin/settings/service" },
    ],
  },
];

export function AdminSidebar({ open, onClose }: AdminSidebarProps) {
  return (
    <div className="w-[300px] h-screen bg-white border-r overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
      </div>
      <div className="overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.title} className="mb-2">
            {item.subItems ? (
              <SidebarGroup
                title={item.title}
                icon={item.icon}
                subItems={item.subItems}
                onClose={onClose}
              />
            ) : (
              <SidebarItem
                title={item.title}
                icon={item.icon}
                href={item.href}
                onClose={onClose}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
