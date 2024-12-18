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
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;