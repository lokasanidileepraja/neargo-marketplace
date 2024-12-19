import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shops } from "@/data/shops";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value) {
      const matchingShops = shops.filter(shop => 
        shop.name.toLowerCase().includes(value.toLowerCase()) ||
        shop.items.some(item => 
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );

      if (matchingShops.length > 0) {
        const firstMatch = matchingShops[0];
        navigate(`/${firstMatch.category}`);
      }
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input 
        type="text"
        placeholder="Search for food, groceries, medicines..."
        className="pl-10 pr-4 h-12 rounded-full border-gray-200"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;