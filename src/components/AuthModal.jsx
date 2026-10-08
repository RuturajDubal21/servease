import React, { useState } from 'react';
import { X, User, Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { auth } from '../firebase';

export default function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [role, setRole] = useState('customer'); // customer or provider
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegister) {
        const res = await auth.createUserWithEmailAndPassword(email, password, displayName, role);
        onAuthSuccess(res.user);
      } else {
        const res = await auth.signInWithEmailAndPassword(email, password);
        onAuthSuccess(res.user);
      }
      setLoading(false);
      onClose();
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Authentication failed.');
    }
  };

  const handleGuestLogin = async () => {
    const res = await auth.signInWithEmailAndPassword('demo.user@servease.com', 'password123');
    onAuthSuccess(res.user);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scale-up">
        
        {/* Modal Header */}
        <div className="bg-[#0B2D6B] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-blue-200 hover:text-white p-1 rounded-full hover:bg-blue-900/50"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-[#F4C430]" />
            <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider">ServEase Firebase Auth</span>
          </div>
          <h3 className="text-2xl font-black text-white">
            {isRegister ? 'Create Your Account' : 'Welcome Back'}
          </h3>
          <p className="text-xs text-blue-200 mt-1">
            {isRegister ? 'Join ServEase as a Customer or Verified Provider' : 'Sign in to manage your service bookings'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {isRegister && (
              <>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-slate-400 absolute left-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shravi Gaikwad"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0B2D6B] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Register As</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRole('customer')}
                      className={`py-2 rounded-xl text-xs font-bold border ${
                        role === 'customer'
                          ? 'bg-[#0B2D6B] text-white border-[#0B2D6B]'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      Customer
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('provider')}
                      className={`py-2 rounded-xl text-xs font-bold border ${
                        role === 'provider'
                          ? 'bg-[#0B2D6B] text-white border-[#0B2D6B]'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      Service Worker
                    </button>
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3" />
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0B2D6B] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Password</label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0B2D6B] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#0B2D6B] hover:bg-[#F4C430] hover:text-[#0B2D6B] text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{loading ? 'Processing...' : isRegister ? 'Complete Registration' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Login Option */}
          <div className="pt-3 border-t border-slate-100 flex flex-col items-center gap-2">
            <button
              onClick={handleGuestLogin}
              className="w-full py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-extrabold text-xs transition-colors"
            >
              🚀 One-Click Demo Guest Sign In
            </button>

            <button
              onClick={() => {
                setIsRegister(!isRegister);
                setError('');
              }}
              className="text-xs font-bold text-[#0B2D6B] hover:underline"
            >
              {isRegister ? 'Already have an account? Sign In' : "Don't have an account? Register now"}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
