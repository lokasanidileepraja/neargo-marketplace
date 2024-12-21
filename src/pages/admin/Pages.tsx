import { AdminHeader } from "@/components/admin/AdminHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BackButton from "@/components/BackButton";
import AIChat from "@/components/AIChat";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Search, Trash2 } from "lucide-react";

// Dummy data for pages
const pages = [
  {
    title: "About Us",
    slug: "about-us",
    status: "published",
    lastModified: "2024-02-20",
  },
  {
    title: "Terms & Conditions",
    slug: "terms-conditions",
    status: "published",
    lastModified: "2024-02-20",
  },
  {
    title: "Privacy Policy",
    slug: "privacy-policy",
    status: "draft",
    lastModified: "2024-02-20",
  },
];

export default function Pages() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      <BackButton to="/" label="Back to Home" />
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-black">Pages</h1>
          <p className="text-gray-600 mt-2">
            Manage static pages and content
          </p>
        </div>
        <Button>
          + Add Page
        </Button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-black">AI Assistant</h2>
        <AIChat />
      </div>

      <div className="flex justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search pages..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-black">Title</TableHead>
              <TableHead className="text-black">Slug</TableHead>
              <TableHead className="text-black">Status</TableHead>
              <TableHead className="text-black">Last Modified</TableHead>
              <TableHead className="text-black">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page) => (
              <TableRow key={page.slug}>
                <TableCell className="text-black font-medium">
                  {page.title}
                </TableCell>
                <TableCell className="text-black">{page.slug}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${getStatusColor(
                      page.status
                    )}`}
                  >
                    {page.status}
                  </span>
                </TableCell>
                <TableCell className="text-black">
                  {page.lastModified}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                    >
                      <Trash2 className="h-4 w-4 text-red-400" />
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