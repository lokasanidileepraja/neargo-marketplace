import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  path: string;
}

const CategoryCard = ({ title, icon, description, path }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card 
        className="group p-6 cursor-pointer hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 hover:border-primary/20 text-center"
        onClick={() => navigate(path)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigate(path);
          }
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CategoryCard;