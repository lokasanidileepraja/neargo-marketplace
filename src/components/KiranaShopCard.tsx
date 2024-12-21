import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface KiranaShop {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  category: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
  }>;
}

interface KiranaShopCardProps {
  shop: KiranaShop;
}

const KiranaShopCard = ({ shop }: KiranaShopCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden">
      <img
        src={shop.image}
        alt={shop.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{shop.name}</h3>
          <p className="text-gray-500">{shop.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{shop.rating}</span>
          </div>
          <Button onClick={() => navigate(`/${shop.category}/${shop.id}`)}>
            View Items
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default KiranaShopCard;