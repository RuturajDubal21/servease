import React from 'react';
import { MapPin, ShieldCheck, Calculator, Clock, AlertTriangle, Star } from 'lucide-react';
import { featuresList } from '../data/providersData';

const iconMap = {
  MapPin: MapPin,
  ShieldCheck: ShieldCheck,
  Calculator: Calculator,
  Clock: Clock,
  AlertTriangle: AlertTriangle,
  Star: Star
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0B2D6B] text-xs font-extrabold uppercase tracking-wider">
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            Why Choose <span className="text-[#0B2D6B] relative inline-block">ServEase?<span className="absolute bottom-1 left-0 w-full h-2 bg-[#F4C430]/40 -z-10 rounded"></span></span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineered to remove friction, eliminate surprise charges, and deliver verified experts to your doorstep safely.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Accent Top Border Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B2D6B] to-[#F4C430] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B2D6B] group-hover:bg-[#0B2D6B] group-hover:text-[#F4C430] flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B2D6B] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
