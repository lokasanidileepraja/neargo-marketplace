import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export default function BlockedRestaurants() {
  const handleUnblock = (id: string) => {
    console.log("Unblocking restaurant:", id);
    // Add unblock logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader 
        title="Blocked Restaurants" 
        description="Manage restaurants that have been blocked from the platform" 
      />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/" label="Back to Home" />
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Blocked Restaurants List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Restaurant Name</TableHead>
                  <TableHead>Blocked Date</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Pizza Palace</TableCell>
                  <TableCell>2024-03-15</TableCell>
                  <TableCell>Multiple customer complaints</TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleUnblock("1")}
                    >
                      Unblock
                    </Button>
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