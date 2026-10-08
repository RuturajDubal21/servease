import React, { useState } from 'react';
import { Zap, Droplets, Wrench, Hammer, Sparkles, Wind, Tv, Home, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight, X } from 'lucide-react';

const individualServices = [
  {
    id: 'srv-electrician',
    name: 'Electrician',
    title: 'Book Electrician Service',
    icon: Zap,
    startingPrice: '₹299',
    basePrice: 299,
    estTime: '30-45 mins',
    status: 'Available Now',
    badge: 'Popular',
    desc: 'Complete home wiring, short circuit fix, switchboard replacement, MCB installation & light fitting.',
    topProvider: 'Rajesh Sharma (4.9 ★ • 142 Reviews)',
    subServices: ['Switchboard & Socket Fix', 'MCB Breaker Replacement', 'Wiring & Short Circuit Repair', 'Fan & Light Fitting', 'Inverter Installation']
  },
  {
    id: 'srv-plumber',
    name: 'Plumber',
    title: 'Book Plumber Service',
    icon: Droplets,
    startingPrice: '₹349',
    basePrice: 349,
    estTime: '20-35 mins',
    status: 'Available Now',
    badge: 'Fast Dispatch',
    desc: 'High-pressure pipe leak sealing, tap mixer fitting, drainage unclogging & bathroom sanitaryware.',
    topProvider: 'Amit Kumar Verma (4.8 ★ • 189 Reviews)',
    subServices: ['Tap & Mixer Fitting', 'Pipe Leakage Repair', 'Drainage Unclogging', 'Water Tank Cleaning', 'Bathroom Sanitary Fix']
  },
  {
    id: 'srv-mechanic',
    name: 'Mechanic',
    title: 'Book Mechanic Service',
    icon: Wrench,
    startingPrice: '₹499',
    basePrice: 499,
    estTime: '15-25 mins',
    status: 'Emergency Ready',
    badge: '24/7 Emergency',
    desc: 'Roadside vehicle breakdown, battery jumpstart, flat tire repair & two-wheeler / car engine tuning.',
    topProvider: 'Suresh Patil (4.9 ★ • 96 Reviews)',
    subServices: ['Roadside Breakdown Fix', 'Car Battery Jumpstart', 'Brake Pad Replacement', 'Two-wheeler Engine Service', 'Flat Tire On-site Fix']
  },
  {
    id: 'srv-carpenter',
    name: 'Carpenter',
    title: 'Book Carpenter Service',
    icon: Hammer,
    startingPrice: '₹399',
    basePrice: 399,
    estTime: '40-60 mins',
    status: 'Available Now',
    badge: 'Top Rated',
    desc: 'Furniture repair, door lock installation, modular kitchen drawer fix, polishing & custom woodwork.',
    topProvider: 'Manoj Carpenter (4.7 ★ • 114 Reviews)',
    subServices: ['Furniture Repair & Assembly', 'Door Lock & Hinge Fitting', 'Modular Kitchen Repair', 'Wood Polishing', 'Custom Cabinet Fitting']
  },
  {
    id: 'srv-cleaner',
    name: 'Cleaner',
    title: 'Book Deep Cleaning Service',
    icon: Sparkles,
    startingPrice: '₹599',
    basePrice: 599,
    estTime: '2-3 Hours',
    status: 'Available Now',
    badge: 'Eco-Friendly',
    desc: 'Full apartment deep cleaning, sofa & carpet steam sanitization, kitchen degreasing & bathroom scrub.',
    topProvider: 'Sunita Deshmukh (4.95 ★ • 230 Reviews)',
    subServices: ['Full Home Deep Cleaning', 'Sofa & Carpet Steam Wash', 'Kitchen Degreasing', 'Bathroom Sanitization', 'Move-in Scrubbing']
  },
  {
    id: 'srv-ac',
    name: 'AC Repair',
    title: 'Book AC Repair Service',
    icon: Wind,
    startingPrice: '₹449',
    basePrice: 449,
    estTime: '30-45 mins',
    status: 'Emergency Ready',
    badge: 'High Demand',
    desc: 'Foam jet servicing, R32/R410 gas refilling, PCB circuit repair, cooling restoration & installation.',
    topProvider: 'Vikas Technocare (4.85 ★ • 165 Reviews)',
    subServices: ['Foam Jet Servicing', 'Refrigerant Gas Charging', 'AC PCB Board Repair', 'Leakage & Noise Fix', 'Split/Window AC Install']
  },
  {
    id: 'srv-appliance',
    name: 'Home Appliance Repair',
    title: 'Book Appliance Repair Service',
    icon: Tv,
    startingPrice: '₹349',
    basePrice: 349,
    estTime: '30-50 mins',
    status: 'Available Now',
    badge: '90-Day Warranty',
    desc: 'Washing machine drum fix, refrigerator cooling repair, microwave magnetron & RO water filter replacement.',
    topProvider: 'Prakash Appliance Hub (4.75 ★ • 88 Reviews)',
    subServices: ['Washing Machine Repair', 'Refrigerator Repair', 'Microwave Repair', 'RO Water Filter Servicing', 'Geyser / Water Heater Fix']
  },
  {
    id: 'srv-handyman',
    name: 'Other Household Services',
    title: 'Book Handyman Service',
    icon: Home,
    startingPrice: '₹249',
    basePrice: 249,
    estTime: '20-40 mins',
    status: 'Available Now',
    badge: 'Quick Handyman',
    desc: 'Heavy TV wall mounting, curtain rod drilling, mirror hanging, pest control spray & household odd jobs.',
    topProvider: 'Ganesh Handyman (4.9 ★ • 76 Reviews)',
    subServices: ['TV Wall Mount Fitting', 'Wall Drilling & Rod Fixing', 'Pest Control Treatment', 'Mirror & Art Hanging', 'General Odd Jobs']
  }
];

export default function DirectServiceBookingHub() {
  const [activeBookingModal, setActiveBookingModal] = useState(null);
  const [userAddress, setUserAddress] = useState('Flat 402, Kothrud Residency, Paud Road, Pune');
  const [serviceDate, setServiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [isEmergency, setIsEmergency] = useState(false);
  const [selectedSubService, setSelectedSubService] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleOpenBookingModal = (service) => {
    setActiveBookingModal(service);
    setSelectedSubService(service.subServices[0]);
    setBookingConfirmed(false);
  };

  const handleConfirmDirectBooking = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <section id="direct-booking" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0B2D6B] text-xs font-extrabold uppercase tracking-wider">
            Direct Individual Service Booking Portal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            Book Specific Local Services by Name
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose any individual service below to view instant rate cards, top verified technicians, and book your service with 1-click confirmation.
          </p>
        </div>

        {/* 8 Individual Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {individualServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#F5F7FA] rounded-3xl p-6 border border-slate-200 hover:border-[#0B2D6B] hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    {service.badge}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {service.status}
                  </span>
                </div>

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B2D6B] text-[#F4C430] flex items-center justify-center font-black text-xl shadow-md group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0B2D6B] transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium">Est. Arrival: {service.estTime}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Top Provider assigned */}
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-700 mb-4">
                    <span className="text-slate-400 block text-[10px] font-medium">Assigned Master Professional:</span>
                    <strong className="text-[#0B2D6B] font-bold">{service.topProvider}</strong>
                  </div>
                </div>

                {/* Card Bottom Price & EXPLICIT BOOK BUTTON */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Starting Price</span>
                    <span className="text-lg font-black text-[#0B2D6B]">{service.startingPrice}</span>
                  </div>

                  <button
                    onClick={() => handleOpenBookingModal(service)}
                    className="px-4 py-2.5 rounded-xl bg-[#0B2D6B] hover:bg-[#F4C430] hover:text-[#0B2D6B] text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Book {service.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Explicit Modal Booking Form for Individual Service */}
      {activeBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in text-slate-900">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border-2 border-[#0B2D6B] relative animate-scale-up max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#0B2D6B] text-white p-6 relative">
              <button
                onClick={() => {
                  setActiveBookingModal(null);
                  setBookingConfirmed(false);
                }}
                className="absolute top-5 right-5 text-blue-200 hover:text-white p-1 rounded-full hover:bg-blue-900/50"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-[#F4C430]" />
                <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider">Direct Service Booking</span>
              </div>
              <h3 className="text-2xl font-black text-white">{activeBookingModal.title}</h3>
              <p className="text-xs text-blue-200">Base Charge: {activeBookingModal.startingPrice} • Est. Arrival: {activeBookingModal.estTime}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs">
              
              {bookingConfirmed ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h4 className="text-2xl font-black text-emerald-900">{activeBookingModal.name} Service Confirmed!</h4>
                  <p className="text-xs text-emerald-800">
                    Your request for <strong>{selectedSubService}</strong> has been booked with {activeBookingModal.topProvider}.
                  </p>
                  <div className="bg-white p-3 rounded-xl border border-emerald-200 text-left space-y-1 text-slate-700">
                    <div>Date: <strong>{serviceDate} ({timeSlot})</strong></div>
                    <div>Service Address: <strong>{userAddress}</strong></div>
                    <div>Total Payable Amount: <strong>₹{activeBookingModal.basePrice + 49 + (isEmergency ? 150 : 0)}</strong></div>
                  </div>
                  <button
                    onClick={() => {
                      setActiveBookingModal(null);
                      setBookingConfirmed(false);
                    }}
                    className="w-full py-3 rounded-xl bg-[#0B2D6B] text-white font-bold text-xs"
                  >
                    Done / Close Portal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleConfirmDirectBooking} className="space-y-4">
                  
                  {/* Sub-Service Task Selection */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Select Specific Task / Sub-Service *</label>
                    <select
                      value={selectedSubService}
                      onChange={(e) => setSelectedSubService(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B] font-semibold text-slate-800"
                    >
                      {activeBookingModal.subServices.map((sub, i) => (
                        <option key={i} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  {/* Assigned Master Technician */}
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <span className="text-[10px] text-blue-900 block font-bold uppercase">Matched Master Technician:</span>
                    <strong className="text-sm text-[#0B2D6B]">{activeBookingModal.topProvider}</strong>
                  </div>

                  {/* Service Address */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Service Address *</label>
                    <input
                      type="text"
                      required
                      value={userAddress}
                      onChange={(e) => setUserAddress(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0B2D6B]"
                    />
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Date</label>
                      <input
                        type="date"
                        required
                        value={serviceDate}
                        onChange={(e) => setServiceDate(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Time Slot</label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs"
                      >
                        <option>09:00 AM - 11:00 AM</option>
                        <option>11:00 AM - 01:00 PM</option>
                        <option>02:00 PM - 04:00 PM</option>
                        <option>04:00 PM - 06:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Emergency Option */}
                  <label className="p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between cursor-pointer">
                    <span className="font-bold text-amber-900 text-xs">Emergency Priority Dispatch (+₹150)</span>
                    <input
                      type="checkbox"
                      checked={isEmergency}
                      onChange={(e) => setIsEmergency(e.target.checked)}
                      className="w-4 h-4 accent-[#0B2D6B]"
                    />
                  </label>

                  {/* Price Summary */}
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl space-y-1 text-xs">
                    <div className="flex justify-between text-slate-300"><span>Base Charge ({activeBookingModal.name}):</span> <span>₹{activeBookingModal.basePrice}</span></div>
                    <div className="flex justify-between text-slate-300"><span>Platform & Inspection Fee:</span> <span>₹49</span></div>
                    {isEmergency && <div className="flex justify-between text-amber-400 font-bold"><span>Emergency Charge:</span> <span>+₹150</span></div>}
                    <div className="flex justify-between text-[#F4C430] font-black text-sm border-t border-slate-800 pt-1.5 mt-1">
                      <span>Total Estimated Price:</span>
                      <span>₹{activeBookingModal.basePrice + 49 + (isEmergency ? 150 : 0)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#F4C430] text-[#0B2D6B] font-black text-xs hover:bg-yellow-400 transition-all shadow-lg"
                  >
                    Confirm & Book {activeBookingModal.name} Service Now
                  </button>

                </form>
              )}

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
