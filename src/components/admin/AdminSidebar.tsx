import {
  BarChart3,
  ShoppingBag,
  Store,
  Truck,
  DollarSign,
  Settings,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/admin",
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
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    navigate(href);
    onClose();
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] p-0">
        <SheetHeader className="p-6">
          <SheetTitle>Admin Dashboard</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto h-full">
          {menuItems.map((item) => (
            <div key={item.title} className="mb-2">
              {item.subItems ? (
                <div>
                  <div className="flex items-center gap-3 px-6 py-3 text-gray-700">
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <div className="ml-12 space-y-1">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.href}
                        onClick={() => handleNavigation(subItem.href)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        {subItem.title}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavigation(item.href)}
                  className="flex w-full items-center justify-between px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}