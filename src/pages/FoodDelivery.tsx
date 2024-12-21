import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import KiranaShopCard from "@/components/KiranaShopCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { shops } from "@/data/shops";
import Navbar from "@/components/Navbar";

const FoodDelivery = () => {
  const navigate = useNavigate();
  const foodDeliveryShops = shops.filter(shop => shop.category === "food-delivery");

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
              <BreadcrumbPage>Food Delivery</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-8 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Restaurants Near You</h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2" />
              Back to Home
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodDeliveryShops.map((shop) => (
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