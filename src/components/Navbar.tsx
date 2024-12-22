import { Link } from "react-router-dom";
import { ShoppingCart, Bell, User, Settings, Store, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Navbar = () => {
  const { itemCount } = useCart();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Order Delivered",
      message: "Your order #123 has been delivered",
      time: "2 minutes ago",
      isRead: false,
    },
    {
      id: 2,
      title: "New Offer",
      message: "20% off on your next order",
      time: "1 hour ago",
      isRead: false,
    },
    {
      id: 3,
      title: "Payment Successful",
      message: "Payment for order #122 was successful",
      time: "2 hours ago",
      isRead: true,
    },
  ];

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <>
      <div className="h-16" />
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 container-padding">
            <div className="flex items-center gap-4">
              {isMobile && (
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col gap-4">
                      <Link to="/" className="flex items-center py-2 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                        Home
                      </Link>
                      <Link to="/food-delivery" className="py-2" onClick={() => setIsOpen(false)}>Food Delivery</Link>
                      <Link to="/groceries" className="py-2" onClick={() => setIsOpen(false)}>Groceries</Link>
                      <Link to="/pharmacy" className="py-2" onClick={() => setIsOpen(false)}>Pharmacy</Link>
                      <Link to="/healthy-options" className="py-2" onClick={() => setIsOpen(false)}>Healthy Options</Link>
                      <Link to="/quick-meals" className="py-2" onClick={() => setIsOpen(false)}>Quick Meals</Link>
                      <Link to="/local-favorites" className="py-2" onClick={() => setIsOpen(false)}>Local Favorites</Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              )}
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-primary">NearGo</span>
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
                    <Bell className="h-5 w-5 text-gray-600" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[280px] sm:w-80 bg-white">
                  {notifications.map((notification) => (
                    <DropdownMenuItem key={notification.id} className="p-4 cursor-pointer">
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
                    <Link to="/notifications" className="text-primary text-sm w-full">
                      View all notifications
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                    <User className="h-5 w-5 text-gray-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white">
                  <DropdownMenuItem>
                    <Link to="/profile" className="flex items-center gap-2 w-full">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/admin/dashboard" className="flex items-center gap-2 w-full">
                      <Settings className="h-4 w-4" />
                      Admin Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/vendor/dashboard" className="flex items-center gap-2 w-full">
                      <Store className="h-4 w-4" />
                      Vendor Dashboard
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;