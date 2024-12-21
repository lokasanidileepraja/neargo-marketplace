import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { shops } from "@/data/shops";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const ShopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const shop = shops.find(s => s.id === Number(id));

  if (!shop) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container py-8">
          <BackButton />
          <div className="text-center">
            <h1 className="text-2xl font-bold">Shop not found</h1>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      shopId: shop.id
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

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
              <BreadcrumbLink onClick={() => navigate(`/${shop.category}`)}>
                {shop.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{shop.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-8">
          <BackButton />
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full md:w-1/3 h-64 object-cover rounded-lg"
              />
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{shop.name}</h1>
                <p className="text-gray-600">{shop.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">Rating:</span>
                  <span className="text-lg">{shop.rating}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shop.items.map((item) => (
                <Card key={item.id} className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">₹{item.price}</span>
                      <Button onClick={() => handleAddToCart(item)}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;