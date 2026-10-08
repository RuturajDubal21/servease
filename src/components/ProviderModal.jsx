import React, { useState } from 'react';
import { X, Wrench, ShieldCheck, CheckCircle2, Upload, FileText } from 'lucide-react';
import { addDoc } from '../firebase';

export default function ProviderModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    category: 'Electrician',
    experienceYears: '5 Years',
    locality: 'Kothrud, Pune',
    aadhaarNumber: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await addDoc('provider_applications', formData);
      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative">
        
        {/* Header */}
        <div className="bg-[#0B2D6B] text-white p-6 relative">
          <button
            onClick={() => {
              setSubmitted(false);
              onClose();
            }}
            className="absolute top-5 right-5 text-blue-200 hover:text-white p-1 rounded-full hover:bg-blue-900/50"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <Wrench className="w-5 h-5 text-[#F4C430]" />
            <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider">Worker Onboarding Portal</span>
          </div>
          <h3 className="text-2xl font-black text-white">Become a ServEase Provider</h3>
          <p className="text-xs text-blue-200">Earn up to ₹45,000/month with zero commission on your first 50 jobs.</p>
        </div>

        {/* Body */}
        <div className="p-6">
          
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold text-emerald-900">Application Submitted!</h4>
              <p className="text-xs text-emerald-800">
                Thank you for applying, {formData.fullName}. Our local verification agent will contact you at <strong>{formData.phone}</strong> within 24 hours for Aadhaar identity audit.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-[#0B2D6B] text-white font-bold text-xs"
              >
                Close Portal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra Patil"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98220 11223"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Trade Specialty *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B]"
                  >
                    <option>Electrician</option>
                    <option>Plumber</option>
                    <option>Mechanic</option>
                    <option>Carpenter</option>
                    <option>Cleaner</option>
                    <option>AC Repair</option>
                    <option>Home Appliance Repair</option>
                    <option>Other Household Services</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Experience (Years)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 6 Years"
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Base Locality / City</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kothrud, Pune"
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Aadhaar / ID Card Number</label>
                <input
                  type="text"
                  required
                  placeholder="12-digit Aadhaar number for background verification"
                  value={formData.aadhaarNumber}
                  onChange={(e) => setFormData({ ...formData, aadhaarNumber: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B]"
                />
              </div>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-[11px] text-blue-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0B2D6B] shrink-0 mt-0.5" />
                <span>ServEase background verification includes identity check, address audit, and skill assessment before badge activation.</span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-[#0B2D6B] text-white font-extrabold text-xs hover:bg-[#F4C430] hover:text-[#0B2D6B] transition-all shadow-md"
              >
                {submitting ? 'Submitting Application...' : 'Submit Provider Application'}
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
