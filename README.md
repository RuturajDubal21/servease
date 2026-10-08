# ServEase – Smart Local Service Finder

> **Tagline:** “Smart Platform for Verified Local Service Providers”  
> **Developed by:** Ruturaj Dubal & Shravi Gaikwad  
> **Target Audience:** Homeowners & verified local service providers (Electricians, Plumbers, Mechanics, Carpenters, Cleaners)

---

## 🌟 Executive Overview & Problem Statement

**The Problem:**  
People often struggle to find reliable local workers in unfamiliar areas. Traditional recommendations are slow, unverified, and may lead to overcharging or poor service quality.

**The ServEase Solution:**  
ServEase connects users with verified local professionals using location-based matching, ratings, reviews, availability tracking, and estimated pricing.

---

## 🛠️ Technology Stack & Architecture

- **Frontend Core:** React 18, HTML5, Modern ES Modules
- **Design System & Styling:** Custom Tailwind CSS (Deep Blue `#0B2D6B`, Gold `#F4C430`, Light Gray `#F5F7FA`, Pure White `#FFFFFF`)
- **Icons & Animation:** Lucide Icons & Framer Motion design patterns
- **Backend API:** Node.js + Express REST API (`server/server.js`)
- **Authentication & Database:** Firebase Auth & Firestore SDK setup (`src/firebase.js`) with intelligent mock state fallbacks for instant offline/browser demonstration.

---

## 🚀 Key Features & Included Pages

1. **Sticky Navigation Bar:** Logo, brand identity, navigation links, theme & Auth status, "Become a Provider", "Sign In / Register".
2. **Hero Section:** Headline *"Find Trusted Local Service Providers in Minutes"*, subheadline, dual CTAs ("Find Services" and "Become a Provider"), floating badges (4.9 Rating, 100% ID Verified, 15m Dispatch), and mobile app showcase illustration (`public/hero_app_illustration.jpg`).
3. **Features Section (6 Cards):**
   - GPS-based Nearby Discovery
   - Verified Professional Profiles
   - Transparent Price Estimates
   - Real-time Availability Tracking
   - Emergency Booking Option
   - Ratings & Reviews System
4. **How It Works (9-Step Pipeline):** Register -> Category -> Location -> View Providers -> Compare -> Book -> Accept -> Complete -> Payment & Feedback.
5. **Services Directory:** Category cards with instant rate estimates for Electrician, Plumber, Mechanic, Carpenter, Cleaner, AC Repair, Home Appliance Repair, and Handyman.
6. **Search & Booking Live Engine:** Category picker, Geolocation detection ("Use GPS"), live radius slider, and provider cards with real-time status badges and "Book Now" trigger.
7. **About & Problem/Solution:** Split-view comparative analysis highlighting traditional hiring vulnerabilities vs ServEase digital trust platform.
8. **Supported Scope:** Breakdown of trades & sub-tasks.
9. **Future Enhancements Roadmap:** Timeline for In-app Payments, Live Provider GPS Telemetry, AI Recommendations, Emergency Dispatch, and Voice Search.
10. **Testimonials, FAQ Accordion, & Contact Section:** Complete with `support@servease.com`, `+91 98765 43210`, and embedded Google Map view.

---

## 💻 How to Run the Demonstration

### Option 1: Direct Browser Launch (Instant Demo)
Simply double click or open [`index.html`](file:///C:/Users/Lenovo/.gemini/antigravity/scratch/servease/index.html) in Google Chrome, Microsoft Edge, or Firefox!

### Option 2: Node.js & Vite Development Server
```bash
# Frontend
npm install
npm run dev

# Backend Express API
cd server
npm install
npm start
```

---

*ServEase Project submitted for Academic & College Demonstration by Ruturaj Dubal & Shravi Gaikwad.*
