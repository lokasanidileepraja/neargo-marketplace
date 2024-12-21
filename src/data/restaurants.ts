import { Restaurant } from "@/types/restaurant";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Paradise",
    rating: 4,
    products: 45,
    orders: 1200,
    status: "verified",
    isOnline: true,
    email: "contact@pizzaparadise.com",
    phone: "+1 234 567 890",
    address: "123 Main St, City",
    cuisine: "Italian",
    openingHours: "09:00",
    closingHours: "22:00",
    deliveryRadius: 5,
    minimumOrder: 15,
    menu: [
      {
        id: 1,
        name: "Margherita Pizza",
        price: 12.99,
        description: "Fresh tomatoes, mozzarella, and basil",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
        category: "Pizza"
      },
      {
        id: 2,
        name: "Pepperoni Pizza",
        price: 14.99,
        description: "Classic pepperoni with cheese",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
        category: "Pizza"
      }
    ],
    documents: {
      businessLicense: "https://example.com/license1.pdf",
      foodLicense: "https://example.com/food1.pdf",
      taxCertificate: "https://example.com/tax1.pdf"
    },
    metrics: {
      averageDeliveryTime: 30,
      customerSatisfaction: 95,
      orderAcceptanceRate: 98,
      revenue: 50000
    }
  },
  {
    id: 2,
    name: "Burger Hub",
    rating: 5,
    products: 35,
    orders: 800,
    status: "pending",
    isOnline: false,
    email: "info@burgerhub.com",
    phone: "+1 234 567 891",
    address: "456 Oak St, City",
    cuisine: "American",
    openingHours: "10:00",
    closingHours: "23:00",
    deliveryRadius: 3,
    minimumOrder: 10,
    menu: [
      {
        id: 1,
        name: "Classic Burger",
        price: 9.99,
        description: "Beef patty with lettuce and tomato",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        category: "Burgers"
      },
      {
        id: 2,
        name: "Chicken Burger",
        price: 8.99,
        description: "Grilled chicken with special sauce",
        image: "https://images.unsplash.com/photo-1615297928064-24977384d0da",
        category: "Burgers"
      }
    ],
    documents: {
      businessLicense: "https://example.com/license2.pdf",
      foodLicense: "https://example.com/food2.pdf",
      taxCertificate: "https://example.com/tax2.pdf"
    },
    metrics: {
      averageDeliveryTime: 25,
      customerSatisfaction: 92,
      orderAcceptanceRate: 95,
      revenue: 35000
    }
  }
];