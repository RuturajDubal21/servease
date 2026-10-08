import React from 'react';
import { howItWorksSteps } from '../data/providersData';
import { UserCheck, Grid, MapPin, Users, Scale, CalendarCheck, CheckCircle2, Award, DollarSign } from 'lucide-react';

const stepIcons = [
  UserCheck,
  Grid,
  MapPin,
  Users,
  Scale,
  CalendarCheck,
  CheckCircle2,
  Award,
  DollarSign
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
            Seamless 9-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            How ServEase Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From initial search to verified completion — a transparent step-by-step experience for homeowners and workers.
          </p>
        </div>

        {/* Horizontal Process Stepper for Desktop / Grid for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 relative">
          {howItWorksSteps.map((item, idx) => {
            const IconComp = stepIcons[idx] || CheckCircle2;
            return (
              <div
                key={item.step}
                className="bg-[#F5F7FA] rounded-2xl p-6 border border-slate-200/90 relative hover:border-[#0B2D6B] hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#F4C430] group-hover:text-[#0B2D6B] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#0B2D6B] group-hover:text-white text-[#0B2D6B] flex items-center justify-center shadow-sm border border-slate-200 transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0B2D6B]">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0B2D6B] to-[#144498] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-bold text-white">Need an urgent technician right now?</h4>
            <p className="text-blue-200 text-sm">Activate emergency booking mode for guaranteed 15-minute dispatch.</p>
          </div>
          <a
            href="#search-booking"
            className="px-6 py-3 rounded-xl bg-[#F4C430] text-[#0B2D6B] font-extrabold hover:bg-yellow-400 transition-all whitespace-nowrap shadow-lg shadow-yellow-500/20"
          >
            Find Nearby Emergency Providers
          </a>
        </div>

      </div>
    </section>
  );
}
