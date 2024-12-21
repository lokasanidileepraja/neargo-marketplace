import { AdminHeader } from "@/components/admin/AdminHeader";

export default function Reviews() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <AdminHeader 
        title="Reviews" 
        description="Monitor and manage customer reviews"
      />
      <div className="grid gap-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p className="text-sm text-muted-foreground">
            Review management functionality will be implemented here.
          </p>
        </div>
      </div>
    </div>
  );
}