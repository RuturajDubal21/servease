import React from 'react';
import { serviceCategories } from '../data/providersData';
import { Zap, Droplets, Wrench, Hammer, Sparkles, Wind, Tv, Home, ArrowRight } from 'lucide-react';

const categoryIcons = {
  Zap: Zap,
  Droplets: Droplets,
  Wrench: Wrench,
  Hammer: Hammer,
  Sparkles: Sparkles,
  Wind: Wind,
  Tv: Tv,
  Home: Home
};

export default function Services({ onSelectCategory }) {
  return (
    <section id="services" className="py-20 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0B2D6B] text-xs font-extrabold uppercase tracking-wider">
            Category Directory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            Explore Verified Service Categories
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose a service category to view instant estimates, active technicians, and real customer reviews.
          </p>
        </div>

        {/* Categories 8 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((cat) => {
            const IconComponent = categoryIcons[cat.icon] || Home;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#0B2D6B] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Badge */}
                {cat.badge && (
                  <span className="absolute top-4 right-4 text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    {cat.badge}
                  </span>
                )}

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B2D6B] group-hover:bg-[#0B2D6B] group-hover:text-[#F4C430] flex items-center justify-center mb-5 transition-all shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#0B2D6B] transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Starts from</span>
                    <span className="text-lg font-black text-[#0B2D6B]">{cat.startingPrice}</span>
                  </div>

                  <span className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#F4C430] group-hover:text-[#0B2D6B] text-slate-600 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
