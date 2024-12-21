import { Routes, Route } from 'react-router-dom';
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
import OrderSuccess from './pages/OrderSuccess';
import AdminDashboard from './pages/admin/Dashboard';
import { AdminLayout } from './components/admin/AdminLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food-delivery" element={<FoodDelivery />} />
      <Route path="/groceries" element={<Groceries />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/healthy-options" element={<HealthyOptions />} />
      <Route path="/quick-meals" element={<QuickMeals />} />
      <Route path="/local-favorites" element={<LocalFavorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/restaurant-menu" element={<RestaurantMenu />} />
      <Route path="/shop/:id" element={<ShopDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;