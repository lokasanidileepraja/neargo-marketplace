import { Button } from "@/components/ui/button";
import { Clock, Leaf, Star, TrendingUp } from "lucide-react";
import { memo } from "react";

const filters = [
  { label: "Fast Delivery", icon: <Clock className="w-4 h-4" />, key: "fast" },
  { label: "Top Rated", icon: <Star className="w-4 h-4" />, key: "top" },
  { label: "Trending", icon: <TrendingUp className="w-4 h-4" />, key: "trending" },
  { label: "Healthy", icon: <Leaf className="w-4 h-4" />, key: "healthy" },
] as const;

const QuickFilters = () => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant="outline"
          className="flex items-center gap-2 whitespace-nowrap hover:bg-primary hover:text-white transition-colors"
        >
          {filter.icon}
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

// Memoize the component since filters are static
export default memo(QuickFilters);