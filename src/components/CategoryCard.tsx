import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  path: string;
}

const CategoryCard = ({ title, icon, description, path }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-lg transition-shadow bg-white"
      onClick={() => navigate(path)}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-4 bg-primary/10 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Card>
  );
};

export default CategoryCard;