import { Button } from "@/components/ui/button";
import { Clock, Leaf, Star, TrendingUp } from "lucide-react";

const filters = [
  { label: "Fast Delivery", icon: <Clock className="w-4 h-4" /> },
  { label: "Top Rated", icon: <Star className="w-4 h-4" /> },
  { label: "Trending", icon: <TrendingUp className="w-4 h-4" /> },
  { label: "Healthy", icon: <Leaf className="w-4 h-4" /> },
];

const QuickFilters = () => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
      {filters.map((filter) => (
        <Button
          key={filter.label}
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

export default QuickFilters;