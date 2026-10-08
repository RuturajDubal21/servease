import React from 'react';
import { testimonialsList } from '../data/providersData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0B2D6B] text-xs font-extrabold uppercase tracking-wider">
            Verified Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            Loved by Thousands of Homeowners
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Real stories from local users who experienced fast, transparent, and trustworthy service booking.
          </p>
        </div>

        {/* 3 Grid Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6 group-hover:text-yellow-200 transition-colors" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm italic leading-relaxed relative z-10">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-4 mt-6">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0B2D6B]"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
