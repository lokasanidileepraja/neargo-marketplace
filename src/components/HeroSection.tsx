import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <div className="text-center space-y-4 mb-8">
      <h1 className="text-4xl font-bold">Welcome to NearGo</h1>
      <p className="text-gray-500">Your one-stop shop for all daily needs</p>
      <SearchBar />
    </div>
  );
};

export default HeroSection;