import { Bell, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AdminHeaderProps {
  title?: string;
  description?: string;
}

export function AdminHeader({ title, description }: AdminHeaderProps) {
  const navigate = useNavigate();
  
  const notifications = [
    {
      id: 1,
      title: "New Order",
      message: "Order #123 has been placed",
      time: "2 minutes ago"
    },
    {
      id: 2,
      title: "Restaurant Update",
      message: "New restaurant registration pending approval",
      time: "5 minutes ago"
    }
  ];

  return (
    <div className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <img src="/neargo-logo.png" alt="NearGo" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-bold text-[#F97316]">NearGo</span>
          </div>
          {(title || description) && (
            <div>
              {title && (
                <h1 className="text-xl font-semibold tracking-tight">
                  {title}
                </h1>
              )}
              {description && <p className="text-sm text-gray-500">{description}</p>}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  2
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </div>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-2 text-center">
                <button 
                  onClick={() => navigate('/admin/notifications')}
                  className="text-primary text-sm w-full"
                >
                  View all notifications
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/admin/orders')}>
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => navigate('/admin/profile')}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/admin/settings')}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}