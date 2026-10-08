import React from 'react';
import { CreditCard, MapPin, Cpu, AlertTriangle, Mic, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

const roadmapMilestones = [
  {
    phase: 'Phase 1 - Implemented',
    quarter: 'Q4 Release',
    title: 'Core Discovery & Verified Booking Engine',
    desc: 'GPS search radius filter, verified worker badging, upfront pricing estimates, and real-time booking dispatch system.',
    icon: CheckCircle2,
    status: 'LIVE NOW',
    color: 'bg-emerald-500'
  },
  {
    phase: 'Phase 2 - Upcoming',
    quarter: 'Q1 Launch',
    title: 'In-app Payments & Digital Wallet',
    desc: 'Seamless unified payments via UPI (GPay/PhonePe), Credit Cards, Net Banking, and instant escrow release upon customer satisfaction.',
    icon: CreditCard,
    status: 'IN DEVELOPMENT',
    color: 'bg-[#F4C430]'
  },
  {
    phase: 'Phase 3 - Upcoming',
    quarter: 'Q2 Launch',
    title: 'Live Provider GPS Map Telemetry',
    desc: 'Real-time WebSocket map tracking displaying technician movement on map, ETA updates, and turn-by-turn navigation.',
    icon: MapPin,
    status: 'PLANNED',
    color: 'bg-blue-500'
  },
  {
    phase: 'Phase 4 - Advanced',
    quarter: 'Q3 Launch',
    title: 'AI-Based Provider Recommendation Engine',
    desc: 'Machine learning algorithms ranking providers based on proximity, response velocity, historic repair quality, and user sentiment.',
    icon: Cpu,
    status: 'RESEARCH',
    color: 'bg-purple-500'
  },
  {
    phase: 'Phase 5 - Enterprise',
    quarter: 'Q4 Launch',
    title: 'Emergency Priority Auto-Dispatch Hotline',
    desc: 'One-click SOS trigger dispatching nearest 3 active technicians simultaneously to guarantee 10-minute emergency arrival.',
    icon: AlertTriangle,
    status: 'ROADMAP',
    color: 'bg-rose-500'
  },
  {
    phase: 'Phase 6 - Next-Gen',
    quarter: 'Future Horizon',
    title: 'Voice-Based Search & Multi-Lingual AI Assistant',
    desc: 'Voice search in regional languages (Hindi, Marathi, English) enabling hands-free booking for senior citizens & regional users.',
    icon: Mic,
    status: 'VISION',
    color: 'bg-amber-600'
  }
];

export default function FutureRoadmap() {
  return (
    <section id="roadmap" className="py-20 bg-[#0B2D6B] text-white relative overflow-hidden">
      
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900 border border-[#F4C430]/40 text-[#F4C430] text-xs font-extrabold uppercase tracking-wider">
            Future Enhancements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ServEase Innovation Roadmap
          </h2>
          <p className="text-blue-100/80 text-base sm:text-lg">
            Our strategic technology timeline to transform local home services into an intelligent, instant, and frictionless ecosystem.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="relative border-l-2 border-blue-800/80 ml-4 md:ml-32 space-y-12">
          {roadmapMilestones.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                
                {/* Timeline Node Icon Pin */}
                <div className={`absolute -left-[21px] top-1 w-10 h-10 rounded-full ${item.color} text-[#0B2D6B] flex items-center justify-center font-bold shadow-lg border-4 border-[#0B2D6B] group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-5 h-5 text-white" />
                </div>

                {/* Content Box */}
                <div className="bg-blue-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-blue-800/80 hover:border-[#F4C430]/60 transition-all shadow-xl space-y-3">
                  
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider">
                      {item.phase} • {item.quarter}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 text-blue-200 border border-white/10">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#F4C430] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-blue-100/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
