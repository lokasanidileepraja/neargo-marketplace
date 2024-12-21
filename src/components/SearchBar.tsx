import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SearchResults from "./SearchResults";
import LocationButton from "./LocationButton";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input 
            type="text"
            placeholder="Search for food, groceries, medicines..."
            className="pl-10 pr-4 h-12 rounded-full border-gray-200 bg-gray-50 focus:bg-white transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchResults 
            searchTerm={searchTerm}
            onSelect={() => setSearchTerm("")}
          />
        </div>
        <LocationButton />
      </div>
    </div>
  );
};

export default SearchBar;