import React from 'react';
import { Zap, Heart, Shield, Award, Mail, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071939] text-white pt-16 pb-10 border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4C430] flex items-center justify-center text-[#0B2D6B] font-black text-xl">
                <Zap className="w-5 h-5 fill-[#0B2D6B]" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Serv<span className="text-[#F4C430]">Ease</span>
              </span>
            </a>

            <p className="text-[#F4C430] font-bold text-sm">
              “Smart Platform for Verified Local Service Providers”
            </p>

            <p className="text-xs text-blue-200/80 max-w-sm leading-relaxed">
              Empowering urban homes and local service professionals with instant GPS matching, transparent rate cards, background verification, and emergency dispatch.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-900/60 hover:bg-[#F4C430] hover:text-[#0B2D6B] text-blue-200 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-900/60 hover:bg-[#F4C430] hover:text-[#0B2D6B] text-blue-200 flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-900/60 hover:bg-[#F4C430] hover:text-[#0B2D6B] text-blue-200 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-900/60 hover:bg-[#F4C430] hover:text-[#0B2D6B] text-blue-200 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-blue-200/80 font-medium">
              <li><a href="#home" className="hover:text-[#F4C430]">Home</a></li>
              <li><a href="#features" className="hover:text-[#F4C430]">Platform Features</a></li>
              <li><a href="#how-it-works" className="hover:text-[#F4C430]">How It Works</a></li>
              <li><a href="#search-booking" className="hover:text-[#F4C430]">Search & Book</a></li>
              <li><a href="#about" className="hover:text-[#F4C430]">About & Solution</a></li>
              <li><a href="#roadmap" className="hover:text-[#F4C430]">Future Enhancements</a></li>
            </ul>
          </div>

          {/* Col 4: Top Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Popular Trades</h4>
            <ul className="space-y-2 text-xs text-blue-200/80 font-medium">
              <li><a href="#services" className="hover:text-[#F4C430]">Verified Electricians</a></li>
              <li><a href="#services" className="hover:text-[#F4C430]">Plumbing Specialists</a></li>
              <li><a href="#services" className="hover:text-[#F4C430]">Roadside Mechanics</a></li>
              <li><a href="#services" className="hover:text-[#F4C430]">Furniture Carpenters</a></li>
              <li><a href="#services" className="hover:text-[#F4C430]">Home Deep Cleaners</a></li>
              <li><a href="#services" className="hover:text-[#F4C430]">AC & Appliance Repair</a></li>
            </ul>
          </div>

          {/* Col 5: College Project Developer Credits */}
          <div className="bg-blue-950/80 rounded-2xl p-5 border border-blue-800/80 space-y-3">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#F4C430] block">
              College Project Demonstration
            </span>
            <div className="text-xs font-bold text-white leading-tight">
              ServEase Full-Stack Platform
            </div>
            <div className="pt-2 border-t border-blue-900 text-xs text-blue-200 space-y-1">
              <span className="text-[10px] text-blue-400 block">Developed By:</span>
              <div className="font-extrabold text-[#F4C430]">Ruturaj Dubal</div>
              <div className="font-extrabold text-[#F4C430]">Shravi Gaikwad</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/70">
          <p>© 2026 ServEase Inc. All rights reserved.</p>
          <div className="flex items-center gap-1 font-semibold text-blue-200">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>by Ruturaj Dubal & Shravi Gaikwad</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
