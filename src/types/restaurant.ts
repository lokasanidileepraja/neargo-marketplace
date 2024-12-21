export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  products: number;
  orders: number;
  status: "verified" | "pending";
  isOnline: boolean;
  email: string;
  phone: string;
  address: string;
  cuisine: string;
  openingHours: string;
  closingHours: string;
  deliveryRadius: number;
  minimumOrder: number;
  menu: MenuItem[];
  documents: {
    businessLicense: string;
    foodLicense: string;
    taxCertificate: string;
  };
  metrics: {
    averageDeliveryTime: number;
    customerSatisfaction: number;
    orderAcceptanceRate: number;
    revenue: number;
  };
}

export interface RestaurantFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  cuisine: string;
  openingHours: string;
  closingHours: string;
  deliveryRadius: number;
  minimumOrder: number;
}