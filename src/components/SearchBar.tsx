import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input 
        type="text"
        placeholder="Search for food, groceries, medicines..."
        className="pl-10 pr-4 h-12 rounded-full border-gray-200"
      />
    </div>
  );
};

export default SearchBar;