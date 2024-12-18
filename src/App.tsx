import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderConfirmation from "@/pages/OrderConfirmation";
import FoodDelivery from "@/pages/FoodDelivery";
import RestaurantMenu from "@/pages/RestaurantMenu";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/food-delivery" element={<FoodDelivery />} />
        <Route path="/food-delivery/:id" element={<RestaurantMenu />} />
        <Route path="/groceries" element={<ComingSoon title="Groceries" />} />
        <Route path="/pharmacy" element={<ComingSoon title="Pharmacy" />} />
        <Route path="/local-favorites" element={<ComingSoon title="Local Favorites" />} />
        <Route path="/healthy-options" element={<ComingSoon title="Healthy Options" />} />
        <Route path="/quick-meals" element={<ComingSoon title="Quick Meals" />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

// Temporary component for upcoming features
const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500">Coming Soon</p>
          <p className="text-gray-500">Your products will be showcased here</p>
        </div>
      </div>
    </div>
  );
};

export default App;