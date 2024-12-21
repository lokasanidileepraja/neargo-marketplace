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
import { Filter, Plus, Search, FileText } from "lucide-react";

export default function Documents() {
  const documents = [
    {
      id: "1",
      name: "Terms and Conditions",
      type: "Legal",
      size: "245 KB",
      lastModified: "2024-03-15",
      status: "Published",
    },
    {
      id: "2",
      name: "Privacy Policy",
      type: "Legal",
      size: "180 KB",
      lastModified: "2024-03-14",
      status: "Published",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Documents</h1>
          <p className="text-muted-foreground">
            Manage and organize important documents
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-between space-x-4">
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search documents..."
              className="pl-8 bg-white border-gray-200"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    {doc.name}
                  </div>
                </TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>{doc.lastModified}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {doc.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}