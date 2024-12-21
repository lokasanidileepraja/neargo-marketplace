import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container py-8">
        <div className="space-y-8">
          <HeroSection />
          <CategoriesGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;