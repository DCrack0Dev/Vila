# Vilai Lai Spa — Luxury Web App

A production-grade, multi-page luxury spa website built for **Vilai Lai Spa** in Nelspruit/Mbombela, South Africa.

**Live Link:** [vilai-lai-day-spar.vercel.app](https://vilai-lai-day-spar.vercel.app/)

---

## 🏛 Architecture & Tech Stack

- **Frontend:** HTML5, CSS3 (Custom Variables, Flexbox, CSS Grid)
- **Interactions:** Vanilla JavaScript (Intersection Observer API for animations)
- **Design System:** Luxury-focused palette (Deep Chocolate, Gold Accents, Georgia Serif)
- **Deployment:** Vercel (Automatic Global CDN)
- **Architecture:** Multi-page static site for optimized SEO and performance.

## 📁 File Structure

```text
├── index.html          # Home sanctuary & hero rituals
├── services.html       # Full treatment menu & pricing
├── philosophy.html     # Our Story & master therapists
├── reviews.html        # Guest experiences & testimonials
├── contact.html        # Contact concierge & map
├── css/
│   └── style.css       # Global design system & responsiveness
└── js/
    └── main.js         # Booking logic & scroll animations
```

---

## 🚀 Trae IDE Instructions

Trae was used to build this project from a single-file prototype into a scalable multi-page application.

### **How to edit with Trae:**
1. **Global Styles:** To change colors or typography, edit the `:root` variables in `css/style.css`.
2. **Adding Sections:** Use the `.page-section` class in any HTML file to maintain consistent padding and alignment.
3. **Updating Logic:** Add new interactive features in `js/main.js` to ensure they apply across all pages.
4. **Luxury Standard:** Maintain the high whitespace-to-content ratio and keep the Georgia serif stack for all headings.

---

## 🌐 Vercel Deployment

This project is optimized for Vercel's edge network.

### **Manual Deployment:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the root directory.

### **Continuous Deployment (Recommended):**
1. Push your changes to GitHub: `git push origin main`
2. Vercel will automatically detect the push to `DCrack0Dev/Vila` and trigger a fresh build.
3. Your live link [vilai-lai-day-spar.vercel.app](https://vilai-lai-day-spar.vercel.app/) will update in seconds.

---

## ✨ Key Features
- **Booking Ritual:** A custom modal overlay for reservations available on every page.
- **Mobile Concierge:** A sticky bottom bar for one-tap Call/WhatsApp/Booking on mobile devices.
- **Performance:** Zero external dependencies (no jQuery, no heavy frameworks) for sub-second load times.
- **SEO Ready:** Semantic HTML structure with dedicated pages for each core service area.
