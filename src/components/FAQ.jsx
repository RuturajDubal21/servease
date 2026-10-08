import React, { useState } from 'react';
import { faqList } from '../data/providersData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about safety, rates, worker verification, and service guarantees.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F5F7FA] rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-100/80 transition-colors"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0B2D6B] shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0B2D6B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
