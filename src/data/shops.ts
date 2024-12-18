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

export const shops: Shop[] = [
  // Food Delivery Shops
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
        name: "Chole Bhature",
        price: 120,
        description: "Spicy chickpea curry served with fluffy deep-fried bhature",
        image: "https://images.unsplash.com/photo-1626132647523-66c7ee96c0eb?auto=format&fit=crop&q=80&w=800"
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
        id: 4,
        name: "Masala Dosa",
        price: 80,
        description: "Crispy dosa filled with spiced potato stuffing, served with chutney and sambar",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800"
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
  // Grocery Shops
  {
    id: 3,
    name: "Fresh Mart",
    description: "Your daily grocery needs under one roof",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    category: "groceries",
    items: [
      {
        id: 6,
        name: "Basmati Rice",
        price: 120,
        description: "Premium quality long-grain basmati rice (1kg)",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 7,
        name: "Toor Dal",
        price: 150,
        description: "High-protein lentils for everyday cooking (1kg)",
        image: "https://images.unsplash.com/photo-1585996746349-423aa961d976?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 8,
        name: "Fortune Sunflower Oil",
        price: 130,
        description: "Refined and healthy cooking oil (1L)",
        image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: 4,
    name: "Daily Needs",
    description: "Quality groceries at affordable prices",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800",
    category: "groceries",
    items: [
      {
        id: 9,
        name: "Aashirvaad Whole Wheat Atta",
        price: 250,
        description: "Nutrient-rich whole wheat flour for soft rotis (5kg)",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 10,
        name: "Tata Salt",
        price: 25,
        description: "Iodized salt for daily use (1kg)",
        image: "https://images.unsplash.com/photo-1518110925495-7f6a02fb0ca8?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  // Pharmacy Shops
  {
    id: 5,
    name: "HealthCare Plus",
    description: "Your trusted pharmacy partner",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800",
    category: "pharmacy",
    items: [
      {
        id: 11,
        name: "Paracetamol Tablets",
        price: 20,
        description: "Effective for fever and mild pain relief (500mg - 10 tabs)",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 12,
        name: "Dettol Antiseptic Liquid",
        price: 180,
        description: "Trusted antiseptic for cuts and wounds (500ml)",
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 13,
        name: "Himalaya Lip Balm",
        price: 45,
        description: "Herbal moisturizing balm for chapped lips (10g)",
        image: "https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: 6,
    name: "MediCare",
    description: "24/7 pharmacy services",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800",
    category: "pharmacy",
    items: [
      {
        id: 14,
        name: "Dabur Chyawanprash",
        price: 250,
        description: "Immunity booster for all ages (500g)",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 15,
        name: "Volini Pain Relief Spray",
        price: 120,
        description: "Instant relief for joint and muscle pain (100g)",
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  // Local Favorites Shops
  {
    id: 7,
    name: "Street Food Corner",
    description: "Authentic street food experience",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    category: "local-favorites",
    items: [
      {
        id: 16,
        name: "Pani Puri",
        price: 40,
        description: "Spicy water-filled crispy puris with fillings (1 Plate)",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 17,
        name: "Aloo Tikki Chaat",
        price: 70,
        description: "Crispy potato patties served with tangy chutneys and curd",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: 8,
    name: "Sweet & Chaat House",
    description: "Traditional sweets and snacks",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&q=80&w=800",
    category: "local-favorites",
    items: [
      {
        id: 18,
        name: "Lassi",
        price: 50,
        description: "Refreshing local drink made with yogurt (300ml)",
        image: "https://images.unsplash.com/photo-1544253232-3b9e8a8ba51b?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 19,
        name: "Jalebi",
        price: 60,
        description: "Crispy and sugary Indian sweet delight (200g)",
        image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  // Healthy Options Shops
  {
    id: 9,
    name: "Green Bowl",
    description: "Healthy and nutritious meals",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    category: "healthy-options",
    items: [
      {
        id: 20,
        name: "Sprout Salad",
        price: 70,
        description: "Nutritious salad made with fresh sprouts, veggies, and lime (200g)",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 21,
        name: "Cold-Pressed Green Juice",
        price: 120,
        description: "Detox drink with spinach, cucumber, and mint (300ml)",
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: 10,
    name: "Fit Kitchen",
    description: "Healthy alternatives to your favorite dishes",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    category: "healthy-options",
    items: [
      {
        id: 22,
        name: "Quinoa Khichdi",
        price: 150,
        description: "Protein-rich khichdi with quinoa and vegetables (300g)",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 23,
        name: "Dry Fruit Mix",
        price: 150,
        description: "Assorted almonds, cashews, and walnuts for energy (100g)",
        image: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  // Quick Meals Shops
  {
    id: 11,
    name: "Quick Bites",
    description: "Ready-to-eat meals for busy people",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    category: "quick-meals",
    items: [
      {
        id: 24,
        name: "Instant Poha Mix",
        price: 50,
        description: "Ready-to-cook flattened rice mix with spices (200g)",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 25,
        name: "Cup Noodles - Veggie Delight",
        price: 40,
        description: "Quick and tasty noodles for a quick bite",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: 12,
    name: "Express Meals",
    description: "Delicious meals in minutes",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800",
    category: "quick-meals",
    items: [
      {
        id: 26,
        name: "Frozen Parathas",
        price: 100,
        description: "Pre-cooked parathas for quick meals (Pack of 5)",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 27,
        name: "Sandwich Combo",
        price: 120,
        description: "Grilled sandwich with vegetables and cheese",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];