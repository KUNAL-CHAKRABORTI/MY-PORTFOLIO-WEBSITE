# Portfolio Website Upgrade TODO

## 🚀 Priority 1: HIGH IMPACT Improvements

### 1. Chatbot API Integration
- [ ] Create environment variable in frontend `.env`:
  ```
  VITE_CHAT_API_URL=http://localhost:5000
  ```
- [ ] Update `src/components/Chatbot.jsx` to call backend API
- [ ] Add error handling for API failures
- [ ] Fallback to local replies when API is down
- [ ] Add loading states for API calls

### 2. SEO & Meta Tags
- [ ] Add to `index.html`:
  ```html
  <meta name="description" content="Kunal Chakraborti - MERN Stack Developer specializing in AI-powered web applications.">
  <meta name="keywords" content="MERN Stack Developer, React Developer, Full Stack Developer, AI Integration">
  <meta name="author" content="Kunal Chakraborti">
  <meta name="theme-color" content="#050508">
  <meta property="og:title" content="Kunal Chakraborti | MERN Stack Developer Portfolio">
  <meta property="og:description" content="Building AI-powered web products">
  <meta property="og:url" content="https://kunal.dev">
  <meta property="og:type" content="website">
  <meta property="og:image" content="/preview.png">
  <meta name="twitter:card" content="summary_large_image">
  ```
- [ ] Create `public/preview.png` (1200x630px social preview)
- [ ] Add favicon in `public/favicon.ico`

### 3. Contact Form Enhancement
- [ ] Replace alert() with custom toast notifications
- [ ] Add input validation with error messages
- [ ] Save form data to localStorage
- [ ] Add loading state to submit button

---

## 🎯 Priority 2: MEDIUM IMPACT Improvements

### 4. Accessibility (A11y)
- [ ] Add skip-to-content link for keyboard users
- [ ] Add prefers-reduced-motion support in CSS
- [ ] Add visible focus states for interactive elements
- [ ] Ensure color contrast meets WCAG AA standards

### 5. User Experience
- [ ] Add scroll progress indicator in navbar
- [ ] Add Back to Top button
- [ ] Add smooth scroll for all anchor links
- [ ] Improve mobile touch targets (min 44px)

### 6. Content Expansion
- [ ] Add 2-3 more projects (aim for 5-6 total)
- [ ] Add testimonial section
- [ ] Add GitHub stats display
- [ ] Add case studies for projects

---

## 📦 Priority 3: ENHANCEMENTS

### 7. Design & Visual
- [ ] Add micro-interactions on buttons
- [ ] Improve card hover effects
- [ ] Add skeleton loading states
- [ ] Improve typography hierarchy

### 8. Code Quality
- [ ] Extract hardcoded arrays to `src/data/`
- [ ] Create custom hooks in `src/hooks/`
- [ ] Split App.jsx into smaller components
- [ ] Add PropTypes or migrate to TypeScript

---

## 🔧 Priority 4: BACKEND & DEVOPS

### 9. Backend Improvements
- [ ] Add rate limiting (express-rate-limit)
- [ ] Add input validation (zod)
- [ ] Add caching for AI responses
- [ ] Add error handling middleware

### 10. Deployment
- [ ] Set up environment variables for production
- [ ] Configure Vercel/Render for backend
- [ ] Add CI/CD pipeline (GitHub Actions)
- [ ] Add analytics (Umami)
- [ ] Add error tracking (Sentry)

---

## 📋 Quick Wins

| Task |
|------|
| Add meta description |
| Add Open Graph tags |
| Connect Chatbot API |
| Replace alerts with toasts |
| Add scroll progress |
| Add back to top button |

---

*Last Updated: January 2026*
