import { useIsMobile } from "@/hooks/use-mobile";

interface AdminHeaderProps {
  title?: string;
  description?: string;
}

export function AdminHeader({ title, description }: AdminHeaderProps) {
  return (
    <div className="space-y-4">
      <header className="sticky top-16 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="flex h-14 items-center px-4 sm:px-6">
          {(title || description) && (
            <div className="px-4 sm:px-6">
              {title && (
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                  {title}
                </h1>
              )}
              {description && <p className="text-sm sm:text-base text-gray-600">{description}</p>}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}