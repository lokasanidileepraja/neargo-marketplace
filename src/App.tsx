import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Index from "@/pages/Index";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderConfirmation from "@/pages/OrderConfirmation";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import { shops } from "@/data/shops";
import KiranaShopCard from "@/components/KiranaShopCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/food-delivery" element={<CategoryPage title="Food Delivery" category="food-delivery" />} />
        <Route path="/groceries" element={<CategoryPage title="Groceries" category="groceries" />} />
        <Route path="/pharmacy" element={<CategoryPage title="Pharmacy" category="pharmacy" />} />
        <Route path="/local-favorites" element={<CategoryPage title="Local Favorites" category="local-favorites" />} />
        <Route path="/healthy-options" element={<CategoryPage title="Healthy Options" category="healthy-options" />} />
        <Route path="/quick-meals" element={<CategoryPage title="Quick Meals" category="quick-meals" />} />
        <Route path="/:category/:shopId" element={<ShopDetail />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

const CategoryPage = ({ title, category }: { title: string; category: string }) => {
  const navigate = useNavigate();
  const categoryShops = shops.filter(shop => shop.category === category);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="container py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500">Explore our selection of {title.toLowerCase()}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryShops.map((shop) => (
              <KiranaShopCard
                key={shop.id}
                shop={shop}
                onViewItems={() => navigate(`/${category}/${shop.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopDetail = () => {
  const navigate = useNavigate();
  const { category, shopId } = useParams();
  const shop = shops.find(s => s.id === Number(shopId));

  if (!shop) {
    return <div>Shop not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container py-8">
        <div className="space-y-8">
          <button onClick={() => navigate(`/${category}`)} className="flex items-center text-gray-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {category}
          </button>
          <div>
            <h1 className="text-3xl font-bold">{shop.name}</h1>
            <p className="text-gray-500 mt-2">{shop.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shop.items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold">₹{item.price}</span>
                    <Button onClick={() => console.log('Add to cart:', item)}>
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
  );
};

export default App;