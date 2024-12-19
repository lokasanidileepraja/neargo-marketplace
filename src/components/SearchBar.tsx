import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Error",
        description: "Geolocation is not supported by your browser",
        variant: "destructive",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // For now, we'll just show the coordinates in a toast
        toast({
          title: "Location found",
          description: `Lat: ${latitude.toFixed(4)}, Long: ${longitude.toFixed(4)}`,
        });
      },
      (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input 
            type="text"
            placeholder="Search for food, groceries, medicines..."
            className="pl-10 pr-4 h-12 rounded-full border-gray-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchResults 
            searchTerm={searchTerm}
            onSelect={() => setSearchTerm("")}
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full"
          onClick={handleLocationClick}
        >
          <MapPin className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;