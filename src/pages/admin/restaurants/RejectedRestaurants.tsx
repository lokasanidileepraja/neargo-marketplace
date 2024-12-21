import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";

export default function RejectedRestaurants() {
  const handleReview = (id: string) => {
    console.log("Reviewing restaurant:", id);
    // Add review logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader 
        title="Rejected Restaurants" 
        description="Review and manage rejected restaurant applications" 
      />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin/restaurants" label="Back to Restaurants" />
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Rejected Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Restaurant Name</TableHead>
                  <TableHead>Application Date</TableHead>
                  <TableHead>Rejection Reason</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Burger Joint</TableCell>
                  <TableCell>2024-03-10</TableCell>
                  <TableCell>Incomplete documentation</TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleReview("1")}
                    >
                      Review Again
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