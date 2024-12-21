import { useNavigate } from "react-router-dom";

interface SidebarSubItemProps {
  title: string;
  href: string;
  onClose?: () => void;
}

export function SidebarSubItem({ title, href }: SidebarSubItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
    >
      {title}
    </button>
  );
}