export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Shop {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  items: MenuItem[];
  category: string;
}