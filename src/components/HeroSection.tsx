import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-2xl shadow-sm">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Welcome to NearGo
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Your one-stop marketplace for all daily needs - from groceries to medicines, delivered right to your doorstep.
      </p>
      <SearchBar />
    </div>
  );
};

export default HeroSection;