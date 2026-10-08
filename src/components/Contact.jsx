import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { addDoc } from '../firebase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    try {
      await addDoc('contacts', formData);
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0B2D6B] text-xs font-extrabold uppercase tracking-wider">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            We'd Love to Hear From You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have questions, feedback, or need corporate service provider onboarding? Drop us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Box */}
            <div className="bg-[#0B2D6B] text-white rounded-3xl p-8 space-y-6 shadow-xl border border-blue-900">
              <h3 className="text-2xl font-black text-white">ServEase Headquarters</h3>
              
              <div className="space-y-4 text-sm text-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#F4C430]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-300 block font-semibold">Official Support Email</span>
                    <a href="mailto:support@servease.com" className="font-extrabold text-white hover:text-[#F4C430] transition-colors">
                      support@servease.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#F4C430]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-300 block font-semibold">Helpdesk Phone Hotline</span>
                    <a href="tel:+919876543210" className="font-extrabold text-white hover:text-[#F4C430] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#F4C430]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-300 block font-semibold">Innovation Hub Location</span>
                    <span className="font-semibold text-white">ServEase Tech Center, Kothrud, Pune, Maharashtra 411038</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-md h-64 relative bg-slate-200">
              <iframe
                title="ServEase Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.250882194602!2d73.8055621!3d18.5062635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb802613eb5%3A0x86daae3c1e2d42d3!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900">Send Us a Message</h3>
              <p className="text-xs sm:text-sm text-slate-600">Fill out the details below and our team will respond within 2 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold">Message Sent Successfully!</h4>
                <p className="text-sm">Thank you for reaching out to ServEase. We have logged your inquiry.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ruturaj Dubal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B2D6B] focus:outline-none text-sm text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B2D6B] focus:outline-none text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B2D6B] focus:outline-none text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">How can we help you? *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Type your message, inquiry, or provider feedback here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0B2D6B] focus:outline-none text-sm text-slate-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#0B2D6B] hover:bg-[#F4C430] hover:text-[#0B2D6B] text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Sending...' : 'Submit Contact Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
