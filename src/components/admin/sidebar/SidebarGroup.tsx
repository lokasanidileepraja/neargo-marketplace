import { LucideIcon } from "lucide-react";
import { SidebarSubItem } from "./SidebarSubItem";

interface SubItem {
  title: string;
  href: string;
}

interface SidebarGroupProps {
  title: string;
  icon: LucideIcon;
  subItems: SubItem[];
  onClose: () => void;
}

export function SidebarGroup({ title, icon: Icon, subItems }: SidebarGroupProps) {
  return (
    <div>
      <div className="flex items-center gap-3 px-6 py-3 text-gray-700">
        <Icon className="h-5 w-5" />
        <span className="font-medium">{title}</span>
      </div>
      <div className="ml-12 space-y-1">
        {subItems.map((subItem) => (
          <SidebarSubItem
            key={subItem.href}
            title={subItem.title}
            href={subItem.href}
            onClose={() => {}}
          />
        ))}
      </div>
    </div>
  );
}