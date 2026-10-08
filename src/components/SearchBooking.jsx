import React, { useState } from 'react';
import { initialProviders, serviceCategories } from '../data/providersData';
import { Search, MapPin, Star, ShieldCheck, Clock, Award, Check, AlertCircle, Navigation, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function SearchBooking({ selectedCategory, onSelectCategory, onBookProvider }) {
  const [categoryFilter, setCategoryFilter] = useState(selectedCategory || 'All Categories');
  const [locationInput, setLocationInput] = useState('');
  const [maxDistance, setMaxDistance] = useState(5);
  const [statusFilter, setStatusFilter] = useState('All');
  const [locatingUser, setLocatingUser] = useState(false);
  const [gpsActive, setGpsActive] = useState(false);

  // Sync prop changes
  React.useEffect(() => {
    if (selectedCategory) {
      setCategoryFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const handleUseCurrentLocation = () => {
    setLocatingUser(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocatingUser(false);
          setGpsActive(true);
          setLocationInput(`Current Location (Lat: ${position.coords.latitude.toFixed(2)}, Lng: ${position.coords.longitude.toFixed(2)}) - Kothrud, Pune`);
        },
        (error) => {
          setLocatingUser(false);
          setGpsActive(true);
          setLocationInput('Detected: Kothrud, Pune, Maharashtra');
        },
        { timeout: 5000 }
      );
    } else {
      setLocatingUser(false);
      setGpsActive(true);
      setLocationInput('Detected: Kothrud, Pune, Maharashtra');
    }
  };

  // Filtered providers calculation
  const filteredProviders = initialProviders.filter((provider) => {
    const matchesCategory = categoryFilter === 'All Categories' || provider.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesLocation = !locationInput || provider.location.toLowerCase().includes(locationInput.toLowerCase()) || gpsActive;
    const matchesDistance = provider.distanceKm <= maxDistance;
    const matchesStatus = statusFilter === 'All' || provider.status === statusFilter;
    return matchesCategory && matchesLocation && matchesDistance && matchesStatus;
  });

  return (
    <section id="search-booking" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0B2D6B] text-xs font-extrabold uppercase tracking-wider">
            Live Finder Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2D6B] tracking-tight">
            Search & Book Nearby Verified Providers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Use instant GPS radius matching to view ratings, pricing, and book your technician in seconds.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="bg-[#0B2D6B] rounded-2xl p-6 sm:p-8 text-white shadow-2xl mb-12 border border-blue-900">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Category Dropdown */}
            <div className="md:col-span-4 space-y-1">
              <label className="text-xs font-semibold text-blue-200 uppercase tracking-wider block">
                Service Category
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  onSelectCategory(e.target.value);
                }}
                className="w-full bg-blue-950/90 text-white font-medium rounded-xl px-4 py-3.5 border border-blue-700/80 focus:ring-2 focus:ring-[#F4C430] focus:outline-none"
              >
                <option value="All Categories">All Categories</option>
                {serviceCategories.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Location Input with GPS button */}
            <div className="md:col-span-5 space-y-1">
              <label className="text-xs font-semibold text-blue-200 uppercase tracking-wider block">
                Your Location
              </label>
              <div className="relative flex items-center">
                <MapPin className="w-5 h-5 text-[#F4C430] absolute left-3.5" />
                <input
                  type="text"
                  placeholder="Enter locality or landmark (e.g. Kothrud, Pune)..."
                  value={locationInput}
                  onChange={(e) => {
                    setLocationInput(e.target.value);
                    setGpsActive(false);
                  }}
                  className="w-full bg-blue-950/90 text-white font-medium pl-11 pr-28 py-3.5 rounded-xl border border-blue-700/80 focus:ring-2 focus:ring-[#F4C430] focus:outline-none placeholder-blue-300/60 text-sm"
                />
                <button
                  onClick={handleUseCurrentLocation}
                  disabled={locatingUser}
                  className="absolute right-2 px-3 py-1.5 rounded-lg bg-[#F4C430] text-[#0B2D6B] text-xs font-extrabold hover:bg-yellow-400 transition-all flex items-center gap-1 shadow-sm"
                >
                  <Navigation className={`w-3.5 h-3.5 ${locatingUser ? 'animate-spin' : ''}`} />
                  <span>{locatingUser ? 'Locating...' : 'Use GPS'}</span>
                </button>
              </div>
            </div>

            {/* Search Trigger */}
            <div className="md:col-span-3 pt-5 md:pt-0">
              <button
                onClick={() => {}}
                className="w-full py-4 rounded-xl bg-[#F4C430] text-[#0B2D6B] font-extrabold text-base hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20"
              >
                <Search className="w-5 h-5" />
                <span>Search Providers</span>
              </button>
            </div>

          </div>

          {/* Additional Quick Filter Controls */}
          <div className="mt-6 pt-6 border-t border-blue-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-4">
              <span className="text-blue-200 font-semibold flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-[#F4C430]" />
                Radius: <strong className="text-white">{maxDistance} km</strong>
              </span>
              <input
                type="range"
                min="1"
                max="10"
                value={maxDistance}
                onChange={(e) => setMaxDistance(Number(e.target.value))}
                className="w-32 accent-[#F4C430] cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-blue-200 font-semibold">Status:</span>
              {['All', 'Available Now', 'Emergency Ready'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                    statusFilter === st
                      ? 'bg-[#F4C430] text-[#0B2D6B]'
                      : 'bg-blue-900/60 text-blue-200 hover:bg-blue-800'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results Counter Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-slate-800 text-sm font-bold flex items-center gap-2">
            <span>Found <strong className="text-[#0B2D6B] text-base">{filteredProviders.length}</strong> verified providers</span>
            {categoryFilter !== 'All Categories' && (
              <span className="bg-blue-50 text-[#0B2D6B] px-2.5 py-0.5 rounded-md border border-blue-200 text-xs">
                Category: {categoryFilter}
              </span>
            )}
          </div>
          <span className="text-xs text-slate-500 font-medium">Sorted by distance & top rating</span>
        </div>

        {/* Provider Cards Grid */}
        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#0B2D6B]"
              >
                <div>
                  {/* Top Avatar Banner */}
                  <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50/40 border-b border-slate-100 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={provider.avatar}
                          alt={provider.name}
                          className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md"
                        />
                        {provider.verified && (
                          <span className="absolute -bottom-1 -right-1 bg-amber-400 text-[#0B2D6B] p-1 rounded-full shadow-sm" title="ServEase Verified">
                            <ShieldCheck className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0B2D6B] transition-colors">
                            {provider.name}
                          </h3>
                        </div>
                        <p className="text-xs font-bold text-[#0B2D6B]">{provider.category}</p>
                        <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{provider.location} ({provider.distanceKm} km)</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full whitespace-nowrap border ${
                        provider.status === 'Emergency Ready'
                          ? 'bg-rose-100 text-rose-800 border-rose-300'
                          : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      }`}
                    >
                      {provider.status}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-slate-50 rounded-xl text-center border border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Rating</span>
                        <span className="text-sm font-black text-slate-800 flex items-center justify-center gap-0.5">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                          {provider.rating}
                        </span>
                      </div>
                      <div className="border-x border-slate-200">
                        <span className="text-[10px] text-slate-400 block font-medium">Experience</span>
                        <span className="text-xs font-bold text-slate-800">{provider.experience}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Reviews</span>
                        <span className="text-xs font-bold text-slate-800">{provider.reviewsCount}</span>
                      </div>
                    </div>

                    {/* Bio / Skills */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {provider.bio}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {provider.skills.slice(0, 3).map((sk, i) => (
                        <span key={i} className="text-[10px] font-semibold px-2 py-0.5 bg-blue-50 text-[#0B2D6B] rounded-md">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Price & Action */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2 pt-4">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Est. Price Range</span>
                    <span className="text-base font-black text-[#0B2D6B]">{provider.priceRange}</span>
                  </div>

                  <button
                    onClick={() => onBookProvider(provider)}
                    className="px-5 py-2.5 rounded-xl bg-[#0B2D6B] hover:bg-[#F4C430] hover:text-[#0B2D6B] text-white font-bold text-xs transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Book Now</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center max-w-md mx-auto space-y-4">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">No Providers Found</h3>
            <p className="text-sm text-slate-600">
              Try adjusting your category filter, widening your search radius, or clearing location keywords.
            </p>
            <button
              onClick={() => {
                setCategoryFilter('All Categories');
                setLocationInput('');
                setMaxDistance(10);
                setStatusFilter('All');
              }}
              className="px-4 py-2 rounded-lg bg-[#0B2D6B] text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
