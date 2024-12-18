import { Shop } from './types';

export const foodDeliveryShops: Shop[] = [
  {
    id: 1,
    name: "Spice Paradise",
    description: "Authentic North Indian cuisine with a modern twist",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800",
    category: "food-delivery",
    items: [
      {
        id: 1,
        name: "Paneer Butter Masala Thali",
        price: 220,
        description: "Delicious paneer curry served with rice, roti, and salad",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        name: "Chicken Biryani",
        price: 250,
        description: "Fragrant basmati rice cooked with spiced chicken and served with raita",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        name: "Masala Dosa",
        price: 80,
        description: "Crispy dosa filled with spiced potato stuffing, served with chutney and sambar",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        name: "Chole Bhature",
        price: 120,
        description: "Spicy chickpea curry served with fluffy deep-fried bhature",
        image: "https://images.unsplash.com/photo-1626132647523-66c7ee96c0eb?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 5,
        name: "Momos",
        price: 90,
        description: "Hot and soft dumplings served with spicy chutney",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: 2,
    name: "South Indian Delight",
    description: "Best South Indian dishes in town",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=800",
    category: "food-delivery",
    items: [
      {
        id: 6,
        name: "Paneer Butter Masala Thali",
        price: 220,
        description: "Delicious paneer curry served with rice, roti, and salad",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 7,
        name: "Chicken Biryani",
        price: 250,
        description: "Fragrant basmati rice cooked with spiced chicken and served with raita",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 8,
        name: "Masala Dosa",
        price: 80,
        description: "Crispy dosa filled with spiced potato stuffing, served with chutney and sambar",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 9,
        name: "Chole Bhature",
        price: 120,
        description: "Spicy chickpea curry served with fluffy deep-fried bhature",
        image: "https://images.unsplash.com/photo-1626132647523-66c7ee96c0eb?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 10,
        name: "Momos",
        price: 90,
        description: "Hot and soft dumplings served with spicy chutney",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];