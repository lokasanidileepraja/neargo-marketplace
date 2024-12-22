import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoriesGrid from '@/components/CategoriesGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto section-spacing">
        <div className="container-padding space-y-12">
          <HeroSection />
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse Categories</h2>
            <CategoriesGrid />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}