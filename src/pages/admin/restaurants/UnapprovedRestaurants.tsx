import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export default function UnapprovedRestaurants() {
  const handleApprove = (id: string) => {
    console.log("Approving restaurant:", id);
    // Add approve logic here
  };

  const handleReject = (id: string) => {
    console.log("Rejecting restaurant:", id);
    // Add reject logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader 
        title="Unapproved Restaurants" 
        description="Review and approve new restaurant applications" 
      />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin/restaurants" label="Back to Restaurants" />
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Pending Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Restaurant Name</TableHead>
                  <TableHead>Application Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Sushi Express</TableCell>
                  <TableCell>2024-03-20</TableCell>
                  <TableCell>Pending Review</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleApprove("1")}
                      >
                        Approve
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReject("1")}
                      >
                        Reject
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}