import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { AdminSidebarContent } from "./sidebar/AdminSidebarContent";

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />
            <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <AdminSidebarContent onClose={toggleSidebar} />
            </div>
          </>
        )}
      </>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-[300px] h-screen bg-white border-r border-gray-200 overflow-y-auto shadow-sm">
      <AdminSidebarContent />
    </div>
  );
}