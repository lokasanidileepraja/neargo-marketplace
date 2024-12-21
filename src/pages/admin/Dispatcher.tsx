import { AdminHeader } from "@/components/admin/AdminHeader";

export default function Dispatcher() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <AdminHeader 
        title="Dispatcher" 
        description="Manage and track delivery assignments in real-time"
      />
      <div className="grid gap-4">
        {/* Placeholder content */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p className="text-sm text-muted-foreground">
            Dispatcher functionality will be implemented here.
          </p>
        </div>
      </div>
    </div>
  );
}