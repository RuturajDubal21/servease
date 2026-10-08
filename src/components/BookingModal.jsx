import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, AlertTriangle, ShieldCheck, CheckCircle2, DollarSign } from 'lucide-react';
import { addDoc } from '../firebase';

export default function BookingModal({ isOpen, onClose, provider, user }) {
  const [address, setAddress] = useState('Flat 402, Kothrud Residency, Paud Road, Pune');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [isEmergency, setIsEmergency] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  if (!isOpen || !provider) return null;

  const baseCharge = provider.basePrice || 299;
  const platformFee = 49;
  const emergencyFee = isEmergency ? 150 : 0;
  const totalPrice = baseCharge + platformFee + emergencyFee;

  const handleConfirm = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const bookingData = {
      bookingId: 'SRV-' + Math.floor(100000 + Math.random() * 900000),
      providerId: provider.id,
      providerName: provider.name,
      category: provider.category,
      userEmail: user ? user.email : 'guest.customer@servease.com',
      userAddress: address,
      date,
      timeSlot,
      isEmergency,
      pricing: {
        baseCharge,
        platformFee,
        emergencyFee,
        totalPrice
      },
      status: 'CONFIRMED',
      createdAt: new Date().toISOString()
    };

    try {
      await addDoc('bookings', bookingData);
      setSubmitting(false);
      setConfirmedBooking(bookingData);
    } catch (err) {
      setSubmitting(false);
      setConfirmedBooking(bookingData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0B2D6B] text-white p-6 relative">
          <button
            onClick={() => {
              setConfirmedBooking(null);
              onClose();
            }}
            className="absolute top-5 right-5 text-blue-200 hover:text-white p-1 rounded-full hover:bg-blue-900/50"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-5 h-5 text-[#F4C430]" />
            <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider">Verified Booking Dispatch</span>
          </div>
          <h3 className="text-xl font-black text-white">Book {provider.name}</h3>
          <p className="text-xs text-blue-200">{provider.category} • {provider.experience} Exp</p>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {confirmedBooking ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
              <h4 className="text-2xl font-black text-emerald-900">Booking Confirmed!</h4>
              <p className="text-xs text-emerald-800">
                Your service order <strong className="font-mono text-slate-900">{confirmedBooking.bookingId}</strong> has been assigned to {provider.name}.
              </p>

              <div className="bg-white p-4 rounded-xl text-left text-xs space-y-2 border border-emerald-200">
                <div className="flex justify-between"><span className="text-slate-500">Date & Slot:</span> <strong>{confirmedBooking.date} ({confirmedBooking.timeSlot})</strong></div>
                <div className="flex justify-between"><span className="text-slate-500">Service Address:</span> <strong className="text-right">{confirmedBooking.userAddress}</strong></div>
                <div className="flex justify-between"><span className="text-slate-500">Total Payable:</span> <strong className="text-[#0B2D6B] text-sm">₹{confirmedBooking.pricing.totalPrice}</strong></div>
              </div>

              <button
                onClick={() => {
                  setConfirmedBooking(null);
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-[#0B2D6B] text-white font-bold text-xs"
              >
                Done / Back to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-4">
              
              {/* Provider Summary Badge */}
              <div className="flex items-center gap-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <img src={provider.avatar} alt={provider.name} className="w-14 h-14 rounded-xl object-cover" />
                <div className="text-xs">
                  <div className="font-extrabold text-slate-900 text-sm">{provider.name}</div>
                  <div className="text-slate-500">{provider.location} ({provider.distanceKm} km away)</div>
                  <div className="text-[#0B2D6B] font-bold mt-0.5">Rating: ⭐ {provider.rating} ({provider.reviewsCount} reviews)</div>
                </div>
              </div>

              {/* Service Address */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Service Address *</label>
                <div className="relative flex items-center">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B] focus:outline-none"
                  />
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Service Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Time Slot</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B]"
                  >
                    <option>09:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 01:00 PM</option>
                    <option>02:00 PM - 04:00 PM</option>
                    <option>04:00 PM - 06:00 PM</option>
                    <option>06:00 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Emergency Option Toggle */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-amber-900">Emergency 15-Min Arrival</div>
                    <div className="text-[10px] text-amber-700">Guaranteed priority dispatch (+₹150)</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={isEmergency}
                  onChange={(e) => setIsEmergency(e.target.checked)}
                  className="w-5 h-5 accent-[#0B2D6B] cursor-pointer"
                />
              </div>

              {/* Upfront Price Breakdown */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2 text-xs">
                <div className="font-bold text-[#F4C430] uppercase tracking-wider text-[10px] border-b border-slate-800 pb-1">
                  Transparent Rate Card Breakdown
                </div>
                <div className="flex justify-between text-slate-300"><span>Base Inspection Fee:</span> <span>₹{baseCharge}</span></div>
                <div className="flex justify-between text-slate-300"><span>Safety & Platform Fee:</span> <span>₹{platformFee}</span></div>
                {isEmergency && <div className="flex justify-between text-amber-400 font-bold"><span>Emergency Priority Charge:</span> <span>+₹{emergencyFee}</span></div>}
                <div className="flex justify-between text-white font-extrabold text-sm border-t border-slate-800 pt-2">
                  <span>Total Estimated Price:</span>
                  <span className="text-[#F4C430]">₹{totalPrice}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-[#F4C430] text-[#0B2D6B] font-extrabold text-sm hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20"
              >
                {submitting ? 'Confirming Dispatch...' : `Confirm Booking • Pay ₹${totalPrice} After Completion`}
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
