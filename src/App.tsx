import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import Login from './pages/Login';
import Home from './pages/Home';
import FoodDelivery from './pages/FoodDelivery';
import Groceries from './pages/Groceries';
import Pharmacy from './pages/Pharmacy';
import HealthyOptions from './pages/HealthyOptions';
import QuickMeals from './pages/QuickMeals';
import LocalFavorites from './pages/LocalFavorites';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import RestaurantMenu from './pages/RestaurantMenu';
import ShopDetail from './pages/ShopDetail';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import OrderSuccess from './pages/OrderSuccess';
import { AdminLayout } from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminDispatcher from './pages/admin/Dispatcher';
import AdminDrivers from './pages/admin/Drivers';
import AdminOrders from './pages/admin/Orders';
import AdminRestaurants from './pages/admin/Restaurants';
import AdminFinances from './pages/admin/Finances';
import AdminPromocodes from './pages/admin/Promocodes';
import AdminReviews from './pages/admin/Reviews';
import AdminDocuments from './pages/admin/Documents';
import AdminSettings from './pages/admin/Settings';
import AdminPages from './pages/admin/Pages';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/food-delivery" element={<ProtectedRoute><FoodDelivery /></ProtectedRoute>} />
      <Route path="/food-delivery/:id" element={<ProtectedRoute><ShopDetail /></ProtectedRoute>} />
      <Route path="/groceries" element={<ProtectedRoute><Groceries /></ProtectedRoute>} />
      <Route path="/groceries/:id" element={<ProtectedRoute><ShopDetail /></ProtectedRoute>} />
      <Route path="/pharmacy" element={<ProtectedRoute><Pharmacy /></ProtectedRoute>} />
      <Route path="/pharmacy/:id" element={<ProtectedRoute><ShopDetail /></ProtectedRoute>} />
      <Route path="/healthy-options" element={<ProtectedRoute><HealthyOptions /></ProtectedRoute>} />
      <Route path="/healthy-options/:id" element={<ProtectedRoute><ShopDetail /></ProtectedRoute>} />
      <Route path="/quick-meals" element={<ProtectedRoute><QuickMeals /></ProtectedRoute>} />
      <Route path="/quick-meals/:id" element={<ProtectedRoute><ShopDetail /></ProtectedRoute>} />
      <Route path="/local-favorites" element={<ProtectedRoute><LocalFavorites /></ProtectedRoute>} />
      <Route path="/local-favorites/:id" element={<ProtectedRoute><ShopDetail /></ProtectedRoute>} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
      <Route path="/restaurant-menu" element={<ProtectedRoute><RestaurantMenu /></ProtectedRoute>} />
      <Route path="/shop/:id" element={<ProtectedRoute><ShopDetail /></ProtectedRoute>} />
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/order-success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="dispatcher" element={<AdminDispatcher />} />
        <Route path="drivers" element={<AdminDrivers />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="restaurants" element={<AdminRestaurants />} />
        <Route path="finances" element={<AdminFinances />} />
        <Route path="promocodes" element={<AdminPromocodes />} />
        <Route path="reviews" element={<AdminReviews />} />
        <Route path="documents" element={<AdminDocuments />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="pages" element={<AdminPages />} />
      </Route>
    </Routes>
  );
}

export default App;