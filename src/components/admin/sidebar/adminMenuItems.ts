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

export const adminMenuItems = [
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