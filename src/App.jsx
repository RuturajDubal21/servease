import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DirectServiceBookingHub from './components/DirectServiceBookingHub';
import AiChatbotAssistant from './components/AiChatbotAssistant';
import AiJobIntelligenceEngine from './components/AiJobIntelligenceEngine';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import SearchBooking from './components/SearchBooking';
import AboutProblem from './components/AboutProblem';
import Scope from './components/Scope';
import FutureRoadmap from './components/FutureRoadmap';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import BookingModal from './components/BookingModal';
import ProviderModal from './components/ProviderModal';

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [bookingProvider, setBookingProvider] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    const searchSection = document.getElementById('search-booking');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookProvider = (provider) => {
    setBookingProvider(provider);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#F4C430] selection:text-[#0B2D6B]">
      
      {/* Sticky Header Navbar */}
      <Navbar
        user={user}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenProviderModal={() => setIsProviderModalOpen(true)} />

        {/* 2. Direct Service Booking Hub (Book Each Service Individually by Name) */}
        <DirectServiceBookingHub />

        {/* 3. Interactive AI Diagnostic Chatbot Assistant */}
        <AiChatbotAssistant onBookProvider={() => {
          const searchSec = document.getElementById('search-booking');
          if (searchSec) searchSec.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 4. AI Job Intelligence & Pre-Reservation Engine */}
        <AiJobIntelligenceEngine />

        {/* 5. Features Section */}
        <Features />

        {/* 6. How It Works Section */}
        <HowItWorks />

        {/* 7. Services Page / Directory */}
        <Services onSelectCategory={handleSelectCategory} />

        {/* 8. Search & Booking Interactive Tool */}
        <SearchBooking
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onBookProvider={handleBookProvider}
        />

        {/* 9. About / Problem Statement & Solution */}
        <AboutProblem />

        {/* 10. Scope Section */}
        <Scope />

        {/* 11. Future Enhancements Roadmap */}
        <FutureRoadmap />

        {/* Extra UI Elements */}
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={(u) => setUser(u)}
      />

      <BookingModal
        isOpen={!!bookingProvider}
        onClose={() => setBookingProvider(null)}
        provider={bookingProvider}
        user={user}
      />

      <ProviderModal
        isOpen={isProviderModalOpen}
        onClose={() => setIsProviderModalOpen(false)}
      />

    </div>
  );
}
