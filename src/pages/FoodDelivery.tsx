import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "@/components/RestaurantCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const restaurants = [
  {
    id: 1,
    name: "Pizza Paradise",
    description: "Authentic wood-fired pizzas",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=350&fit=crop",
    menu: [
      { id: 1, name: "Margherita Pizza", price: 12.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=350&fit=crop" },
      { id: 2, name: "Pepperoni Pizza", price: 14.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=350&fit=crop" },
      { id: 3, name: "Garlic Bread", price: 4.99, image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500&h=350&fit=crop" },
      { id: 4, name: "Tiramisu", price: 6.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=350&fit=crop" },
      { id: 5, name: "Coke", price: 2.99, image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&h=350&fit=crop" },
    ],
  },
  {
    id: 2,
    name: "Burger Hub",
    description: "Juicy gourmet burgers made fresh",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=500&h=350&fit=crop",
    menu: [
      { id: 1, name: "Cheeseburger", price: 9.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop" },
      { id: 2, name: "Chicken Burger", price: 8.99, image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=500&h=350&fit=crop" },
      { id: 3, name: "Veggie Burger", price: 7.99, image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&h=350&fit=crop" },
      { id: 4, name: "French Fries", price: 3.99, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=350&fit=crop" },
      { id: 5, name: "Milkshake", price: 4.99, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&h=350&fit=crop" },
    ],
  },
  {
    id: 3,
    name: "Sushi Express",
    description: "Fresh sushi rolls and sashimi",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=350&fit=crop",
    menu: [
      { id: 1, name: "California Roll", price: 8.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=350&fit=crop" },
      { id: 2, name: "Spicy Tuna Roll", price: 9.99, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&h=350&fit=crop" },
      { id: 3, name: "Miso Soup", price: 3.99, image: "https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=500&h=350&fit=crop" },
      { id: 4, name: "Edamame", price: 4.99, image: "https://images.unsplash.com/photo-1631898039984-fd5f39c25a4b?w=500&h=350&fit=crop" },
      { id: 5, name: "Green Tea", price: 2.99, image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500&h=350&fit=crop" },
    ],
  },
  {
    id: 4,
    name: "Tandoori Delight",
    description: "Traditional Indian flavors",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=350&fit=crop",
    menu: [
      { id: 1, name: "Chicken Tikka", price: 12.99, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=350&fit=crop" },
      { id: 2, name: "Butter Naan", price: 2.99, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&h=350&fit=crop" },
      { id: 3, name: "Paneer Butter Masala", price: 11.99, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&h=350&fit=crop" },
      { id: 4, name: "Biryani", price: 13.99, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&h=350&fit=crop" },
      { id: 5, name: "Mango Lassi", price: 3.99, image: "https://images.unsplash.com/photo-1626682929870-d739cd40114c?w=500&h=350&fit=crop" },
    ],
  },
  {
    id: 5,
    name: "Healthy Bites",
    description: "Fresh salads and healthy bowls",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=350&fit=crop",
    menu: [
      { id: 1, name: "Caesar Salad", price: 8.99, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&h=350&fit=crop" },
      { id: 2, name: "Quinoa Bowl", price: 10.99, image: "https://images.unsplash.com/photo-1626371353531-b10bea3dc80a?w=500&h=350&fit=crop" },
      { id: 3, name: "Avocado Toast", price: 7.99, image: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?w=500&h=350&fit=crop" },
      { id: 4, name: "Smoothie Bowl", price: 9.99, image: "https://images.unsplash.com/photo-1626790680714-96631d21c8c7?w=500&h=350&fit=crop" },
      { id: 5, name: "Lemonade", price: 3.99, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&h=350&fit=crop" },
    ],
  },
];

const FoodDelivery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate("/")}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Food Delivery</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-8 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Restaurants Near You</h1>
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2" />
              Back to Home
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onViewMenu={() => navigate(`/food-delivery/${restaurant.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDelivery;