import { AdminHeader } from "@/components/admin/AdminHeader";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Search, Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      id: "1",
      customer: "John Doe",
      restaurant: "Pizza Palace",
      rating: 4,
      comment: "Great food and quick delivery!",
      date: "2024-03-15",
      status: "Published",
    },
    {
      id: "2",
      customer: "Jane Smith",
      restaurant: "Burger King",
      rating: 5,
      comment: "Excellent service and delicious food",
      date: "2024-03-14",
      status: "Published",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <AdminHeader 
        title="Reviews" 
        description="Monitor and manage customer reviews"
      />
      
      <div className="flex items-center justify-between space-x-4 mb-4">
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search reviews..."
              className="pl-8 bg-white border-gray-200"
            />
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Restaurant</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell>{review.customer}</TableCell>
                <TableCell>{review.restaurant}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1">{review.rating}</span>
                  </div>
                </TableCell>
                <TableCell className="max-w-xs truncate">{review.comment}</TableCell>
                <TableCell>{review.date}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {review.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}