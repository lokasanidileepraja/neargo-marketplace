import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
  title: string;
  icon: LucideIcon;
  href?: string;
  onClose?: () => void;
}

export function SidebarItem({ title, icon: Icon, href }: SidebarItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center justify-between px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <span>{title}</span>
      </div>
    </button>
  );
}