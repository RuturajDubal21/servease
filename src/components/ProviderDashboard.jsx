import React, { useState } from 'react';
import { Wrench, ShieldCheck, Star, DollarSign, CheckCircle2, Clock, MapPin, AlertTriangle, Package, ToggleLeft, ToggleRight, User, LogOut, ArrowRight, Zap, Bell, Check, X } from 'lucide-react';

export default function ProviderDashboard({ providerUser, onSwitchToCustomerView, onSignOut }) {
  const [availabilityStatus, setAvailabilityStatus] = useState('Available Now');
  const [jobQueue, setJobQueue] = useState([
    {
      id: 'job-101',
      customerName: 'Ruturaj Dubal',
      location: 'Paud Road, Kothrud, Pune (1.2 km away)',
      issue: 'Continuous Bathroom Tap Leakage',
      aiDiagnosis: 'Damaged Tap Cartridge (91% Confidence)',
      predictedParts: ['Tap Cartridge C-14 (x1)', 'Rubber O-Ring (x2)', 'PTFE Tape (x1)'],
      inventoryStatus: 'Parts Pre-Reserved in Van ✓',
      estimatedEarnings: '₹450',
      timeSlot: 'Today, 10:00 AM - 12:00 PM',
      isEmergency: false,
      status: 'PENDING'
    },
    {
      id: 'job-102',
      customerName: 'Shravi Gaikwad',
      location: 'Deccan Gymkhana, Pune (2.5 km away)',
      issue: 'Main Circuit Switchboard Sparking',
      aiDiagnosis: 'Short Circuit Terminal Arc (95% Confidence)',
      predictedParts: ['16A Modular Socket (x1)', 'Single Pole MCB (x1)'],
      inventoryStatus: 'Parts Pre-Reserved in Van ✓',
      estimatedEarnings: '₹680',
      timeSlot: 'Today, 02:00 PM - 04:00 PM',
      isEmergency: true,
      status: 'PENDING'
    }
  ]);

  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: 'Quarter-Turn Ceramic Disc Cartridge', stock: 8, status: 'In Stock' },
    { id: 2, name: '16A Modular Switch & Heavy Socket', stock: 12, status: 'In Stock' },
    { id: 3, name: 'R32 Refrigerant Gas Canister (1kg)', stock: 3, status: 'Low Stock' },
    { id: 4, name: 'PTFE Thread Sealing Tape Roll', stock: 25, status: 'In Stock' }
  ]);

  const handleAcceptJob = (jobId) => {
    setJobQueue(jobQueue.map(j => j.id === jobId ? { ...j, status: 'ACCEPTED' } : j));
  };

  const handleDeclineJob = (jobId) => {
    setJobQueue(jobQueue.filter(j => j.id !== jobId));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-[#F4C430] selection:text-[#0B2D6B]">
      
      {/* Top Provider Header */}
      <header className="sticky top-0 z-50 bg-[#0B2D6B] border-b border-blue-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Portal Badge */}
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-xl bg-[#F4C430] text-[#0B2D6B] flex items-center justify-center font-black text-xl shadow-md">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                ServEase <span className="text-[#F4C430] text-xs font-bold px-2 py-0.5 rounded bg-yellow-400/20 border border-[#F4C430]/40">Provider Portal</span>
              </span>
              <span className="text-[10px] block text-blue-200 tracking-wider font-semibold uppercase -mt-1">
                Verified Technician Command Dashboard
              </span>
            </div>
          </div>

          {/* Availability Status Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-blue-950 px-3.5 py-1.5 rounded-xl border border-blue-800 text-xs">
              <span className="text-blue-300 font-semibold">Live Status:</span>
              <select
                value={availabilityStatus}
                onChange={(e) => setAvailabilityStatus(e.target.value)}
                className="bg-blue-900 text-white font-extrabold rounded-lg px-2.5 py-1 border border-blue-700 outline-none text-xs"
              >
                <option value="Available Now">🟢 Available Now</option>
                <option value="Emergency Ready">🚨 Emergency Ready</option>
                <option value="Busy / On Job">🔴 Busy / On Job</option>
              </select>
            </div>

            {/* Switch View & Logout */}
            <button
              onClick={onSwitchToCustomerView}
              className="px-3.5 py-2 text-xs font-bold rounded-xl bg-blue-900 hover:bg-blue-800 text-blue-100 border border-blue-700 transition-colors"
            >
              Customer View
            </button>

            <button
              onClick={onSignOut}
              className="p-2 rounded-xl bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Command Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Profile Stats Banner */}
        <div className="bg-gradient-to-r from-[#0B2D6B] via-[#0D3478] to-[#071939] rounded-3xl p-6 sm:p-8 border-2 border-[#F4C430]/40 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            
            <div className="flex items-center gap-5">
              <div className="relative">
                <img
                  src={providerUser.avatar || "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=250"}
                  alt={providerUser.displayName}
                  className="w-20 h-20 rounded-2xl object-cover border-4 border-[#F4C430] shadow-xl"
                />
                <span className="absolute -bottom-1 -right-1 bg-amber-400 text-[#0B2D6B] p-1 rounded-full shadow-md" title="ServEase Master Technician">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-black text-white">{providerUser.displayName || 'Amit Kumar Verma'}</h1>
                  <span className="px-2.5 py-0.5 bg-[#F4C430] text-[#0B2D6B] text-[10px] font-black rounded-full uppercase">
                    Master {providerUser.category || 'Plumber & Electrician'}
                  </span>
                </div>
                <div className="text-xs text-blue-200 flex items-center gap-3">
                  <span>Rating: ⭐ <strong>4.9 / 5.0</strong> (189 Jobs)</span>
                  <span>•</span>
                  <span>Base Location: <strong>Kothrud, Pune</strong></span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 w-full sm:w-auto text-center">
              <div className="bg-blue-950/90 p-4 rounded-2xl border border-blue-800">
                <span className="text-[10px] text-blue-300 block font-semibold uppercase">Monthly Earnings</span>
                <span className="text-xl font-black text-[#F4C430]">₹42,500</span>
              </div>
              <div className="bg-blue-950/90 p-4 rounded-2xl border border-blue-800">
                <span className="text-[10px] text-blue-300 block font-semibold uppercase">Completed Jobs</span>
                <span className="text-xl font-black text-emerald-400">189</span>
              </div>
              <div className="bg-blue-950/90 p-4 rounded-2xl border border-blue-800">
                <span className="text-[10px] text-blue-300 block font-semibold uppercase">Acceptance Rate</span>
                <span className="text-xl font-black text-white">98%</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 1: Live Incoming AI Job Queue */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Bell className="w-6 h-6 text-[#F4C430] animate-bounce" />
              Live Incoming Job Requests ({jobQueue.length})
            </h2>
            <span className="text-xs text-blue-300 font-semibold">Matched via Instant GPS Radius</span>
          </div>

          {jobQueue.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {jobQueue.map((job) => (
                <div
                  key={job.id}
                  className={`bg-slate-800 rounded-3xl p-6 border-2 transition-all space-y-4 shadow-xl ${
                    job.status === 'ACCEPTED'
                      ? 'border-emerald-500 bg-emerald-950/40'
                      : 'border-blue-700 hover:border-[#F4C430]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 border-b border-slate-700 pb-3">
                    <div>
                      <span className="text-[10px] font-black text-[#F4C430] uppercase tracking-wider block">Job Order #{job.id}</span>
                      <h3 className="text-lg font-black text-white">{job.customerName}</h3>
                      <div className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-lg font-black text-[#F4C430] block">{job.estimatedEarnings}</span>
                      {job.isEmergency && (
                        <span className="text-[10px] bg-rose-600 text-white font-extrabold px-2 py-0.5 rounded uppercase">
                          Emergency 15-Min
                        </span>
                      )}
                    </div>
                  </div>

                  {/* AI Diagnostic Summary */}
                  <div className="p-3.5 bg-blue-950/80 rounded-2xl border border-blue-800 text-xs space-y-1">
                    <span className="text-[#F4C430] font-bold block">🧠 AI Visual Diagnosis:</span>
                    <div className="text-white font-extrabold text-sm">{job.issue}</div>
                    <div className="text-blue-200">{job.aiDiagnosis}</div>
                  </div>

                  {/* Pre-Reserved Parts */}
                  <div className="p-3 bg-slate-900 rounded-2xl text-xs space-y-1">
                    <span className="text-slate-400 block font-semibold">📦 Pre-Reserved Parts Required:</span>
                    <div className="flex flex-wrap gap-1">
                      {job.predictedParts.map((pt, i) => (
                        <span key={i} className="px-2 py-0.5 bg-blue-900 text-blue-100 rounded text-[11px] font-bold">
                          {pt}
                        </span>
                      ))}
                    </div>
                    <div className="text-emerald-400 text-[11px] font-bold pt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {job.inventoryStatus}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {job.status === 'ACCEPTED' ? (
                    <div className="p-3.5 bg-emerald-900/80 text-emerald-200 rounded-2xl text-center text-xs font-bold border border-emerald-500">
                      ✓ Job Accepted! Address & Customer Contact Unlocked. On the way!
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => handleDeclineJob(job.id)}
                        className="py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs transition-colors flex items-center justify-center gap-1"
                      >
                        <X className="w-4 h-4" /> Decline
                      </button>

                      <button
                        onClick={() => handleAcceptJob(job.id)}
                        className="py-3 rounded-xl bg-[#F4C430] text-[#0B2D6B] font-black text-xs hover:bg-yellow-400 transition-all shadow-lg flex items-center justify-center gap-1"
                      >
                        <Check className="w-4 h-4" /> Accept & Dispatch
                      </button>
                    </div>
                  )}

                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-800 p-8 rounded-3xl text-center text-slate-400 text-sm">
              No pending jobs right now. Stay online to receive incoming auto-dispatch requests!
            </div>
          )}
        </div>

        {/* Section 2: Van Parts & Inventory Locker Manager */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Package className="w-6 h-6 text-[#F4C430]" />
            Service Van Pre-Reserved Inventory Locker
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventoryItems.map((item) => (
              <div key={item.id} className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-white">{item.name}</span>
                  <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 text-[10px] font-bold rounded border border-emerald-700">
                    {item.status}
                  </span>
                </div>
                <div className="text-2xl font-black text-[#F4C430]">{item.stock} Units</div>
                <div className="text-[10px] text-slate-400">Pre-reserved for instant single-visit dispatch</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
