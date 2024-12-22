import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import Footer from "@/components/Footer";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import PromotionalBanner from "@/components/PromotionalBanner";
import QuickFilters from "@/components/QuickFilters";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <HeroSection />
        
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Filters</h2>
            <QuickFilters />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse Categories</h2>
          <CategoriesGrid />
        </section>

        <section>
          <PromotionalBanner />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Restaurants</h2>
          <FeaturedRestaurants />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;