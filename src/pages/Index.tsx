import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import Footer from "@/components/Footer";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import PromotionalBanner from "@/components/PromotionalBanner";
import QuickFilters from "@/components/QuickFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorBoundary } from "react-error-boundary";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {error.message || "Something went wrong. Please try again later."}
      </AlertDescription>
    </Alert>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense 
            fallback={
              <Skeleton className="w-full h-[400px] rounded-2xl animate-pulse" />
            }
          >
            <HeroSection />
          </Suspense>
        </ErrorBoundary>
        
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Filters</h2>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Skeleton className="h-12 w-full animate-pulse" />}>
                <QuickFilters />
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse Categories</h2>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense 
              fallback={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-48 rounded-lg animate-pulse" />
                  ))}
                </div>
              }
            >
              <CategoriesGrid />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Skeleton className="h-64 rounded-2xl animate-pulse" />}>
              <PromotionalBanner />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Restaurants</h2>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense 
              fallback={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-64 rounded-lg animate-pulse" />
                  ))}
                </div>
              }
            >
              <FeaturedRestaurants />
            </Suspense>
          </ErrorBoundary>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;