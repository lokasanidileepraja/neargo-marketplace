import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import KiranaShopCard from "@/components/KiranaShopCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { shops } from "@/data/shops";
import Navbar from "@/components/Navbar";

const FoodDelivery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const categoryShops = shops.filter(shop => shop.category === category);
  
  const categoryTitle = category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate("/")}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{categoryTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-8 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Shops Near You</h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryShops.map((shop) => (
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

export default FoodDelivery;