import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
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
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="dispatcher" element={<Dispatcher />} />
              <Route path="drivers" element={<Drivers />} />
              <Route path="orders" element={<Orders />} />
              <Route path="restaurants" element={<Restaurants />} />
              <Route path="finances" element={<Finances />} />
              <Route path="promocodes" element={<Promocodes />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="documents" element={<Documents />} />
              <Route path="settings" element={<Settings />} />
              <Route path="pages" element={<Pages />} />
            </Routes>
          </AdminLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;