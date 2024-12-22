import { LucideIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface VendorSidebarItemProps {
  title: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
}

export function VendorSidebarItem({ title, icon: Icon, href, onClick }: VendorSidebarItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === href;

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex w-full items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${
        isActive ? "bg-gray-100" : ""
      }`}
    >
      <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-gray-500"}`} />
      <span className={isActive ? "font-medium" : ""}>{title}</span>
    </button>
  );
}