import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import Footer from "@/components/Footer";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import PromotionalBanner from "@/components/PromotionalBanner";
import QuickFilters from "@/components/QuickFilters";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <Suspense 
          fallback={
            <Skeleton className="w-full h-[400px] rounded-2xl" />
          }
        >
          <HeroSection />
        </Suspense>
        
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Filters</h2>
            <Suspense fallback={<Skeleton className="h-12 w-full" />}>
              <QuickFilters />
            </Suspense>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse Categories</h2>
          <Suspense 
            fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-48 rounded-lg" />
                ))}
              </div>
            }
          >
            <CategoriesGrid />
          </Suspense>
        </section>

        <section>
          <Suspense fallback={<Skeleton className="h-64 rounded-2xl" />}>
            <PromotionalBanner />
          </Suspense>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Restaurants</h2>
          <Suspense 
            fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-64 rounded-lg" />
                ))}
              </div>
            }
          >
            <FeaturedRestaurants />
          </Suspense>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;