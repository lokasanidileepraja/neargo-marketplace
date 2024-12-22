import { useNavigate } from "react-router-dom";
import { shops } from "@/data/shops";

interface SearchResult {
  type: 'shop' | 'item';
  name: string;
  category: string;
  shopId: number;
  itemId?: number;
}

interface SearchResultsProps {
  searchTerm: string;
  onSelect: () => void;
}

const SearchResults = ({ searchTerm, onSelect }: SearchResultsProps) => {
  const navigate = useNavigate();

  if (!searchTerm) return null;

  const results: SearchResult[] = [];
  
  shops.forEach(shop => {
    if (shop.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      results.push({
        type: 'shop',
        name: shop.name,
        category: shop.category,
        shopId: shop.id
      });
    }
    
    shop.items.forEach(item => {
      if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({
          type: 'item',
          name: item.name,
          category: shop.category,
          shopId: shop.id,
          itemId: item.id
        });
      }
    });
  });

  if (results.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
      {results.map((result, index) => (
        <button
          key={`${result.type}-${index}`}
          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-2 border-b border-gray-100 last:border-b-0"
          onClick={() => {
            navigate(`/${result.category}/${result.shopId}`);
            onSelect();
          }}
        >
          <span className="text-sm font-medium text-gray-900">{result.name}</span>
          <span className="text-xs text-gray-500 ml-auto px-2 py-1 bg-gray-100 rounded-full">
            {result.type === 'shop' ? 'Shop' : 'Item'}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SearchResults;