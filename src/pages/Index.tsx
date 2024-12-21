import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <HeroSection />
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse Categories</h2>
          <CategoriesGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;