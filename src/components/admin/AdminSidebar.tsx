import {
  BarChart3,
  Users,
  Store,
  ShoppingBag,
  Truck,
  DollarSign,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/admin",
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
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
      </div>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <button
            key={item.title}
            onClick={() => navigate(item.href)}
            className="flex w-full items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}