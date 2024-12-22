import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedRestaurants = () => {
  const { data: restaurants, isLoading } = useQuery({
    queryKey: ['featured-restaurants'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('restaurants')
        .select('*')
        .eq('status', 'verified')
        .order('rating', { ascending: false })
        .limit(4);
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="p-4 space-y-4">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {restaurants?.map((restaurant) => (
        <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
          <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={restaurant.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=350&fit=crop'} 
                alt={restaurant.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium">{restaurant.rating}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{restaurant.description}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedRestaurants;