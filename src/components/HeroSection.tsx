import { Suspense, memo } from "react";
import SearchBar from "./SearchBar";
import { Skeleton } from "./ui/skeleton";

const HeroSection = () => {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 mix-blend-multiply" />
        <picture>
          <source
            srcSet="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1200&h=400&fit=crop&auto=format&q=80"
            media="(min-width: 640px)"
            fetchPriority="high"
          />
          <source 
            srcSet="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&h=300&fit=crop&auto=format&q=80"
            media="(min-width: 400px)"
          />
          <img
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=200&fit=crop&auto=format&q=80"
            alt="Food delivery"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4 animate-fade-in">
          Delicious Food, Delivered Fast
        </h1>
        <p className="text-base sm:text-lg text-white/90 text-center mb-8 max-w-2xl mx-auto animate-fade-in">
          Order from your favorite local restaurants and get it delivered right to your doorstep.
        </p>
        <Suspense fallback={<Skeleton className="h-12 w-full max-w-2xl mx-auto rounded-full animate-pulse" />}>
          <div className="max-w-2xl mx-auto animate-fade-in">
            <SearchBar />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

// Memoize the component since its props don't change
export default memo(HeroSection);