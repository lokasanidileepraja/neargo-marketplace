import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PromotionalBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&h=400&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      <div className="relative px-6 py-12 sm:px-12 sm:py-16">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Special Offer!</h2>
          <p className="text-lg sm:text-xl mb-6 text-white/90">
            Get 20% off your first order when you order from our featured restaurants.
          </p>
          <Link 
            to="/featured"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;