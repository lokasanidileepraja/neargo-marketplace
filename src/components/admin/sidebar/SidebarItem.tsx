import { LucideIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarItemProps {
  title: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;  // Added onClick prop to the interface
}

export function SidebarItem({ title, icon: Icon, href, onClick }: SidebarItemProps) {
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
      className={`flex w-full items-center justify-between px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
        isActive ? "bg-gray-100" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-gray-500"}`} />
        <span className={isActive ? "font-medium" : ""}>{title}</span>
      </div>
    </button>
  );
}