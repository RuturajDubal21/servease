import React, { useState } from 'react';
import { ShieldCheck, User, Menu, X, Wrench, Zap, MapPin, Cpu } from 'lucide-react';

export default function Navbar({ user, onOpenAuth, onOpenProviderModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'AI Diagnostics', href: '#ai-escalation' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'Search & Book', href: '#search-booking' },
    { name: 'About', href: '#about' },
    { name: 'Scope', href: '#scope' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B2D6B]/95 backdrop-blur-md text-white border-b border-blue-900/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#F4C430] to-yellow-300 flex items-center justify-center text-[#0B2D6B] font-black text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
            <Zap className="w-6 h-6 fill-[#0B2D6B]" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
              Serv<span className="text-[#F4C430]">Ease</span>
            </span>
            <span className="text-[10px] block text-blue-200 tracking-wider font-semibold uppercase -mt-1">
              Smart Service Finder
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 text-sm font-medium text-blue-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F4C430] hover:after:w-full after:transition-all ${
                link.name === 'AI Diagnostics'
                  ? 'text-[#F4C430] font-bold flex items-center gap-1 bg-yellow-400/10 px-2.5 py-1 rounded-lg border border-[#F4C430]/30'
                  : 'hover:text-[#F4C430]'
              }`}
            >
              {link.name === 'AI Diagnostics' && <Cpu className="w-3.5 h-3.5" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onOpenProviderModal}
            className="px-4 py-2 text-sm font-semibold rounded-lg text-[#F4C430] border border-[#F4C430]/40 hover:bg-[#F4C430]/10 transition-all flex items-center gap-2"
          >
            <Wrench className="w-4 h-4 text-[#F4C430]" />
            Become a Provider
          </button>

          {user ? (
            <div className="flex items-center gap-3 bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-800/60">
              <div className="w-8 h-8 rounded-full bg-[#F4C430] text-[#0B2D6B] flex items-center justify-center font-bold text-sm">
                {user.displayName ? user.displayName.charAt(0) : 'U'}
              </div>
              <span className="text-sm font-medium text-white">{user.displayName || user.email}</span>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="px-5 py-2.5 text-sm font-bold rounded-lg bg-[#F4C430] text-[#0B2D6B] hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Sign In / Register
            </button>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-900/50 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B2D6B] border-b border-blue-800 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-blue-100 hover:text-[#F4C430] px-3 py-2 rounded-md font-medium text-base hover:bg-blue-900/40"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-blue-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProviderModal();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold rounded-lg text-[#F4C430] border border-[#F4C430] hover:bg-[#F4C430]/10"
            >
              Become a Provider
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 text-center text-sm font-bold rounded-lg bg-[#F4C430] text-[#0B2D6B] hover:bg-yellow-400"
            >
              {user ? `Logged in: ${user.displayName || user.email}` : 'Sign In / Register'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
