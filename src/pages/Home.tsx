import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoriesGrid from '@/components/CategoriesGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <HeroSection />
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 animate-fade-in">Browse Categories</h2>
            <CategoriesGrid />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}