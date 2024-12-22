import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AdminHeaderProps {
  title?: string;
  description?: string;
}

export function AdminHeader({ title, description }: AdminHeaderProps) {
  return (
    <div className="space-y-4">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="flex flex-col sm:flex-row h-auto sm:h-14 items-start sm:items-center px-4 sm:px-6 py-3 sm:py-0 gap-3 sm:gap-4">
          <div className="flex flex-1 items-center gap-4 w-full">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search orders, restaurants..."
                className="w-full pl-8 bg-white border-gray-200"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-gray-100"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4 text-gray-600" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      {(title || description) && (
        <div className="px-4 sm:px-6">
          {title && <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">{title}</h1>}
          {description && <p className="text-sm sm:text-base text-gray-600">{description}</p>}
        </div>
      )}
    </div>
  );
}