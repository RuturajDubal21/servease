import React from 'react';
import { AlertOctagon, CheckCircle2, ShieldAlert, Sparkles, TrendingUp, Users } from 'lucide-react';

export default function AboutProblem() {
  return (
    <section id="about" className="py-20 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0B2D6B] text-xs font-extrabold uppercase tracking-wider">
            Our Mission & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            Bridging the Trust Gap in Local Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering households with instant access to background-checked local experts while guaranteeing fair compensation for skilled tradespeople.
          </p>
        </div>

        {/* 2-Column Split: Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: The Problem Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-rose-100 shadow-sm relative space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <AlertOctagon className="w-8 h-8" />
              </div>

              <div className="inline-block px-3 py-1 rounded-md bg-rose-100 text-rose-800 text-xs font-extrabold uppercase tracking-wider">
                The Problem
              </div>

              <h3 className="text-2xl font-black text-slate-900 leading-snug">
                Traditional Local Hiring is Broken & Vulnerable
              </h3>

              <blockquote className="text-slate-700 text-base italic border-l-4 border-rose-400 pl-4 py-1 leading-relaxed bg-rose-50/50 rounded-r-lg">
                “People often struggle to find reliable local workers in unfamiliar areas. Traditional recommendations are slow, unverified, and may lead to overcharging or poor service quality.”
              </blockquote>

              <ul className="space-y-3 pt-2 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Uncertain worker background and zero criminal safety checks.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Arbitrary pricing, sudden hidden charges, and price haggling.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Long waiting times without live tracking or emergency arrival guarantee.
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 text-xs font-semibold text-rose-700">
              ServEase eliminates risk by replacing word-of-mouth guesswork with verified digital trust.
            </div>
          </div>

          {/* Right: The Solution Card */}
          <div className="bg-[#0B2D6B] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#F4C430]/40 shadow-xl relative space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F4C430] text-[#0B2D6B] flex items-center justify-center font-bold shadow-md">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="inline-block px-3 py-1 rounded-md bg-[#F4C430]/20 text-[#F4C430] text-xs font-extrabold uppercase tracking-wider border border-[#F4C430]/40">
                The ServEase Solution
              </div>

              <h3 className="text-2xl font-black text-white leading-snug">
                Smart Location-Based Verified Matching
              </h3>

              <p className="text-blue-100 text-base leading-relaxed bg-blue-900/60 p-4 rounded-xl border border-blue-800">
                “ServEase connects users with verified local professionals using location-based matching, ratings, reviews, availability tracking, and estimated pricing.”
              </p>

              <ul className="space-y-3 pt-2 text-sm text-blue-200">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0" />
                  Government ID & background-verified professional profiles.
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0" />
                  Upfront price estimates with standard rate cards.
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0" />
                  Real-time GPS availability tracking & 15-min emergency dispatch.
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-blue-800 text-xs font-semibold text-[#F4C430]">
              Empowering both users with speed & local tradespeople with sustainable daily work.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
