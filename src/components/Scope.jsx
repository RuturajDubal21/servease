import React from 'react';
import { Zap, Droplets, Wrench, Hammer, Sparkles, Home, CheckCircle2 } from 'lucide-react';

const scopeData = [
  {
    title: 'Electricians',
    icon: Zap,
    services: [
      'Complete Home Wiring & Rewiring',
      'MCB & Distribution Board Replacement',
      'Short Circuit Diagnosis & Emergency Repair',
      'Inverter & Generator Installation',
      'Smart Light & Appliance Switch Fitting'
    ]
  },
  {
    title: 'Plumbers',
    icon: Droplets,
    services: [
      'High-Pressure Pipe Leakage Sealing',
      'Drainage & Sewage Blockage Removal',
      'Sanitaryware, Tap & Mixer Fitting',
      'Water Overhead Tank Cleaning',
      'Geyser & Water Heater Plumbing'
    ]
  },
  {
    title: 'Mechanics',
    icon: Wrench,
    services: [
      '24/7 Roadside Car & Bike Breakdown',
      'Battery Replacement & Jumpstart',
      'Brake Pad & Clutch Adjustment',
      'On-site Engine Diagnostics & Oil Change',
      'Flat Tire Repair & Air Pressure Fix'
    ]
  },
  {
    title: 'Carpenters',
    icon: Hammer,
    services: [
      'Custom Furniture Assembly & Repair',
      'Door & Window Frame Lock Fitting',
      'Modular Kitchen Hinge & Drawer Repairs',
      'Wood Polishing, Varnishing & Refurbishing',
      'Custom Wall Shelves & Cabinetry'
    ]
  },
  {
    title: 'Cleaners',
    icon: Sparkles,
    services: [
      'Full Apartment & Villa Deep Cleaning',
      'Sofa, Mattress & Carpet Steam Sanitization',
      'Kitchen Heavy Degreasing & Appliance Wash',
      'Bathroom Scrubbing & Hard Water Removal',
      'Move-in / Move-out Pre-occupancy Scrub'
    ]
  },
  {
    title: 'Other Household Services',
    icon: Home,
    services: [
      'Heavy TV Wall Mounting & Drilling',
      'Pest Control Spray & Termite Treatment',
      'RO Water Purifier Filter Servicing',
      'Curtain Rod & Mirror Installation',
      'General Handyman Odd Job Repairs'
    ]
  }
];

export default function Scope() {
  return (
    <section id="scope" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
            Coverage Area
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            Supported Service Scope
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Comprehensive listing of trades and tasks supported across all urban and suburban service zones.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scopeData.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5F7FA] rounded-2xl p-6 border border-slate-200 hover:border-[#0B2D6B] hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2D6B] text-[#F4C430] flex items-center justify-center font-bold shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#0B2D6B]">
                    {item.title}
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {item.services.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
