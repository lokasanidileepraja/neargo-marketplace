import { Bell, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface AdminHeaderProps {
  title?: string;
  description?: string;
}

const notifications = [
  {
    id: 1,
    title: "New Order",
    message: "Order #123 has been placed",
    time: "2 minutes ago",
  },
  {
    id: 2,
    title: "Order Update",
    message: "Order #120 has been delivered",
    time: "5 minutes ago",
  },
  {
    id: 3,
    title: "New Restaurant",
    message: "Restaurant registration pending approval",
    time: "10 minutes ago",
  },
];

export function AdminHeader({ title, description }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Link to="/admin" className="flex items-center">
                <img src="/neargo-logo.png" alt="NearGo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-primary">NearGo</span>
              </Link>
            </div>
            {(title || description) && (
              <div>
                {title && (
                  <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
                )}
                {description && (
                  <p className="text-sm text-gray-500">{description}</p>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className="flex flex-col items-start p-4"
                  >
                    <div className="flex w-full justify-between">
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-xs text-gray-500">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="p-2 text-center">
                  <Link
                    to="/admin/notifications"
                    className="w-full text-sm text-primary"
                  >
                    View all notifications
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/admin/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/admin/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}