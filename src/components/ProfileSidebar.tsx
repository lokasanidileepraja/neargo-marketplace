import { useNavigate } from "react-router-dom";
import { 
  Package, Heart, CreditCard, MapPin, Settings,
  ChevronRight
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface ProfileSidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Package, label: "Orders", path: "/orders" },
  { icon: Heart, label: "Favorites", path: "/favorites" },
  { icon: CreditCard, label: "Payments", path: "/payments" },
  { icon: MapPin, label: "Address", path: "/address" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const ProfileSidebar = ({ open, onClose }: ProfileSidebarProps) => {
  const navigate = useNavigate();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Profile</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-gray-500" />
                <span>{item.label}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSidebar;