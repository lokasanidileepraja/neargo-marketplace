import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import KiranaShopCard from "@/components/KiranaShopCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { shops } from "@/data/shops";
import Navbar from "@/components/Navbar";

const Groceries = () => {
  const navigate = useNavigate();
  const groceryShops = shops.filter(shop => shop.category === "groceries");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="fixed top-16 left-0 right-0 bg-white border-b z-40 py-4">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate("/")}>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Groceries</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container pt-32 pb-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Grocery Stores Near You</h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groceryShops.map((shop) => (
              <KiranaShopCard
                key={shop.id}
                shop={shop}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groceries;