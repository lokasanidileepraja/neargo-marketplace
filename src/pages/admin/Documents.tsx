import { AdminHeader } from "@/components/admin/AdminHeader";

export default function Documents() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <AdminHeader 
        title="Documents" 
        description="Manage and view important documents"
      />
      <div className="grid gap-4">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p className="text-sm text-muted-foreground">
            Document management functionality will be implemented here.
          </p>
        </div>
      </div>
    </div>
  );
}