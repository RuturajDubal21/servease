import React from 'react';
import { Search, ShieldCheck, Star, MapPin, ArrowRight, Zap, CheckCircle2, Clock } from 'lucide-react';

export default function Hero({ onOpenProviderModal }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#0B2D6B] via-[#0D3478] to-[#071F4B] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/60 border border-[#F4C430]/40 text-[#F4C430] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Zap className="w-4 h-4 fill-[#F4C430]" />
              <span>Smart Platform for Verified Local Service Providers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Find Trusted Local Service Providers in <span className="text-[#F4C430] underline decoration-[#F4C430]/40 decoration-wavy decoration-2">Minutes</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl font-normal leading-relaxed">
              Book verified electricians, plumbers, mechanics, carpenters, and cleaners near you with transparent pricing and real customer reviews.
            </p>

            {/* Primary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#search-booking"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F4C430] text-[#0B2D6B] font-extrabold text-base hover:bg-yellow-400 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-3 group"
              >
                <Search className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Find Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenProviderModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span>Become a Provider</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-blue-800/60 grid grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F4C430] shrink-0" />
                <span className="text-xs sm:text-sm text-blue-200 font-medium">100% ID Verified Workers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#F4C430] shrink-0" />
                <span className="text-xs sm:text-sm text-blue-200 font-medium">15-Min Emergency Arrival</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0" />
                <span className="text-xs sm:text-sm text-blue-200 font-medium">Transparent Fixed Rates</span>
              </div>
            </div>

          </div>

          {/* Right Visual Column (App Illustration Showcase) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Phone Showcase Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Outer Decorative Gradient Border Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F4C430] via-yellow-300 to-blue-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* Main Illustration Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 bg-slate-900 shadow-2xl">
                <img
                  src="./public/hero_app_illustration.jpg"
                  alt="ServEase Mobile App Nearby Provider Finder"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to local image path if public prefix varies
                    e.target.onerror = null;
                    e.target.src = "./hero_app_illustration.jpg";
                  }}
                />
              </div>

              {/* Floating Badge 1: Top Right Verified Rating */}
              <div className="absolute -top-4 -right-4 bg-white/95 text-slate-900 p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 backdrop-blur-md animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Customer Rating</div>
                  <div className="text-sm font-black text-slate-800">4.9 / 5.0 (2.4k+ Reviews)</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left Real-time Dispatch */}
              <div className="absolute -bottom-5 -left-4 bg-[#0B2D6B]/95 text-white p-3.5 rounded-2xl shadow-2xl border border-blue-700/60 flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-[#F4C430] text-[#0B2D6B] flex items-center justify-center font-bold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-blue-200 font-medium">GPS Discovery</div>
                  <div className="text-sm font-bold text-[#F4C430]">Nearby Providers Active</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
