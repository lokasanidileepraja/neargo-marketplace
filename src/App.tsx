import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/admin/Dashboard";
import Dispatcher from "@/pages/admin/Dispatcher";
import Drivers from "@/pages/admin/Drivers";
import Orders from "@/pages/admin/Orders";
import Restaurants from "@/pages/admin/Restaurants";
import Finances from "@/pages/admin/Finances";
import Promocodes from "@/pages/admin/Promocodes";
import Reviews from "@/pages/admin/Reviews";
import Documents from "@/pages/admin/Documents";
import Settings from "@/pages/admin/Settings";
import Pages from "@/pages/admin/Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/dispatcher" element={<Dispatcher />} />
        <Route path="/admin/drivers" element={<Drivers />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/restaurants" element={<Restaurants />} />
        <Route path="/admin/finances" element={<Finances />} />
        <Route path="/admin/promocodes" element={<Promocodes />} />
        <Route path="/admin/reviews" element={<Reviews />} />
        <Route path="/admin/documents" element={<Documents />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/pages" element={<Pages />} />
      </Routes>
    </Router>
  );
}

export default App;
