const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Provider Dataset
const providers = [
  {
    id: 'p1',
    name: 'Rajesh Sharma',
    category: 'Electrician',
    rating: 4.9,
    reviewsCount: 142,
    experience: '8 Years',
    priceRange: '₹299 - ₹499',
    basePrice: 299,
    status: 'Available Now',
    verified: true,
    distanceKm: 1.2,
    location: 'Kothrud, Pune',
    skills: ['Wiring & Rewiring', 'Circuit Breakers', 'MCB Installation', 'Appliance Repair']
  },
  {
    id: 'p2',
    name: 'Amit Kumar Verma',
    category: 'Plumber',
    rating: 4.8,
    reviewsCount: 189,
    experience: '10 Years',
    priceRange: '₹349 - ₹599',
    basePrice: 349,
    status: 'Available Now',
    verified: true,
    distanceKm: 0.8,
    location: 'Deccan Gymkhana, Pune',
    skills: ['Pipe Leak Repairs', 'Tap & Mixer Fitting', 'Drainage Unclogging']
  },
  {
    id: 'p3',
    name: 'Suresh Patil',
    category: 'Mechanic',
    rating: 4.9,
    reviewsCount: 96,
    experience: '12 Years',
    priceRange: '₹499 - ₹899',
    basePrice: 499,
    status: 'Emergency Ready',
    verified: true,
    distanceKm: 2.5,
    location: 'Shivajinagar, Pune',
    skills: ['Breakdown Assistance', 'Battery Jumpstart', 'Two-wheeler Engine']
  }
];

// In-Memory Database for Bookings & Contacts
const bookings = [];
const contactInquiries = [];

// REST API Endpoints

// GET /api/providers - Fetch all or filter by category & location
app.get('/api/providers', (req, res) => {
  const { category, location } = req.query;
  let results = [...providers];

  if (category && category !== 'All Categories') {
    results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (location) {
    results = results.filter(p => p.location.toLowerCase().includes(location.toLowerCase()));
  }

  res.json({
    success: true,
    count: results.length,
    data: results
  });
});

// POST /api/providers/search - GPS & Advanced Search
app.post('/api/providers/search', (req, res) => {
  const { category, lat, lng, radiusKm = 5, query } = req.body;
  let results = [...providers];

  if (category && category !== 'All Categories') {
    results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      p.skills.some(s => s.toLowerCase().includes(q))
    );
  }

  res.json({
    success: true,
    userLocation: { lat, lng },
    radiusKm,
    count: results.length,
    data: results
  });
});

// POST /api/bookings - Create new service booking
app.post('/api/bookings', (req, res) => {
  const { providerId, providerName, category, userAddress, date, timeSlot, isEmergency, estimatedPrice } = req.body;

  if (!providerId || !userAddress || !date) {
    return res.status(400).json({ success: false, message: 'Missing required booking details.' });
  }

  const newBooking = {
    bookingId: 'SRV-' + Math.floor(100000 + Math.random() * 900000),
    providerId,
    providerName,
    category,
    userAddress,
    date,
    timeSlot,
    isEmergency: !!isEmergency,
    estimatedPrice,
    status: 'CONFIRMED',
    createdAt: new Date().toISOString()
  };

  bookings.push(newBooking);
  res.status(201).json({
    success: true,
    message: 'Service booked successfully!',
    booking: newBooking
  });
});

// POST /api/contact - Receive user contact inquiry
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  const inquiry = {
    id: 'INQ-' + Date.now(),
    name,
    email,
    phone,
    message,
    timestamp: new Date().toISOString()
  };

  contactInquiries.push(inquiry);
  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out to ServEase! Our support team will get back to you shortly.',
    inquiryId: inquiry.id
  });
});

// Serve frontend static build if available
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`ServEase Express Server running on http://localhost:${PORT}`);
});
