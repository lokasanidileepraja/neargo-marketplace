import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-4 animate-fade-in">
          Welcome to NearGo
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto animate-fade-in">
          Your one-stop marketplace for all daily needs - from groceries to medicines, delivered right to your doorstep.
        </p>
        <div className="max-w-2xl mx-auto animate-fade-in">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;