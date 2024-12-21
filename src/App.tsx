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
      
      {/* Admin Routes with proper layout */}
      <Route path="/admin" element={<AdminLayout />}>
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