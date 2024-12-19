import { ShoppingCart, Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";

const Navbar = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-2.5">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 
              className="text-2xl font-bold text-primary cursor-pointer"
              onClick={() => navigate("/")}
            >
              NearGo
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/notifications")}>
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate("/cart")} className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsProfileOpen(true)}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
      <ProfileSidebar 
        open={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
};

export default Navbar;