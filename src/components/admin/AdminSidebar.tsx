import {
  BarChart3,
  ShoppingBag,
  Store,
  Truck,
  DollarSign,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

export function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
      </div>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.subItems ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex w-full items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem
                      key={subItem.href}
                      onClick={() => navigate(subItem.href)}
                    >
                      {subItem.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                onClick={() => navigate(item.href)}
                className="flex w-full items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </button>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}