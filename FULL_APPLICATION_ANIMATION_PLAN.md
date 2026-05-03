# 🎬 Korvion Media - Full Application Animation Plan

## 📊 Overview
This document outlines the animation strategy for the **entire Korvion Media website**, covering all pages and creating a cohesive, premium user experience through carefully orchestrated animations.

---

## 🎯 Animation Philosophy
- **Purposeful**: Every animation serves a functional or emotional purpose
- **Performance-first**: Optimized for 60fps, GPU-accelerated where possible
- **Progressive enhancement**: Core content accessible without animations
- **Brand-aligned**: Reflects Korvion's premium, technical positioning
- **Consistent**: Shared animation patterns across all pages

---

## 🛠️ Tech Stack
- **GSAP 3.x**: Primary animation engine
- **ScrollTrigger**: Scroll-driven animations
- **Framer Motion**: React component animations
- **Lenis**: Smooth scrolling foundation

---

## 🌐 Global Animations (All Pages)

### Navigation
**Status**: ✅ Implemented
- Smooth scroll to sections
- Active link highlighting
- Magnetic hover effects on links
- Mobile menu slide transitions
- Dropdown menu with stagger + blur

### Footer
**Status**: ✅ Implemented
- Large "KORVION" watermark background (8% opacity)
- Staggered content reveal (FadeInSection)
- Social icon hover animations (scale + lift)
- Link hover transitions

### Scroll Progress
**Status**: ✅ Implemented
- Fixed top progress bar
- Smooth fill animation tied to scroll position

### Smooth Scrolling
**Status**: ✅ Implemented
- Lenis smooth scroll on all pages
- Buttery smooth scroll experience

---

## 📄 Page-by-Page Breakdown

### 1. Home Page (`/`) ✅ FULLY ANIMATED

#### Hero Section
**Status**: ✅ Complete
- Split text reveal on heading (word-by-word stagger)
- Fade-in with upward motion on subheading
- Magnetic hover effect on CTA buttons
- Ripple effect on button clicks
- Animated orb with 3D parallax
- Star rating fade-in
- Badge pulse animation

#### Stats Bar
**Status**: ✅ Complete
- Counter animations for numerical values (₹10Cr+, 120+, 4.8x, 92%)
- Staggered fade-in for each stat card
- Viewport-triggered animations

#### Logo Marquee
**Status**: ✅ Complete
- Continuous horizontal scroll
- Seamless loop
- Hover effects on logos

#### About Section
**Status**: ✅ Complete
- Parallax background movement (speed: 0.3)
- Fade-in sections from left/right
- Staggered list items with check icons
- Section isolation for proper stacking

#### Services Section (Horizontal Scroll)
**Status**: ✅ Complete
- Full-screen pinned section
- Vertical scroll drives horizontal movement
- 4 slides with different reveal patterns:
  - **Slide 1**: Introduction fade
  - **Slide 2**: Cards fade from bottom with blur (services 1-4)
  - **Slide 3**: Cards slide from right with stagger (services 5-8)
  - **Slide 4**: CTA scales from center
- GSAP ScrollTrigger with snap points

#### Case Studies / Proof Section
**Status**: ✅ Complete
- Tilt cards on hover (3D effect)
- Staggered entrance
- Testimonial cards with hover lift
- Quote icon animations

#### Process Section
**Status**: ✅ Complete
- Numbered steps with stagger
- Tilt effect on cards
- Grid pattern background
- Timeline visualization

#### Why Korvion Section
**Status**: ✅ Complete
- Split grid reveal
- Icon animations
- Staggered content blocks
- Check icon animations

#### CTA Section
**Status**: ✅ Complete
- Dramatic reveal on scroll
- Magnetic + Ripple effects on button
- Background glow effects

---

### 2. Services Page (`/services`) ✅ FULLY ENHANCED

**Current State**: Fully animated with premium effects

**Implemented Enhancements**:

#### 2.1 Hero Section
- ✅ Split text animation on heading (word-by-word reveal)
- ✅ Smooth scroll wrapper with Lenis
- ✅ Scroll progress indicator
- ✅ Fade-in with stagger on subtitle

#### 2.2 Service Cards
- ✅ **Staggered Reveal**: Dramatic entrance with slide + fade
- ✅ **Number Animation**: Counter animation for service numbers (01-08)
- ✅ **Icon Animation**: Icons rotate 360° and scale on reveal
- ✅ **Magnetic Hover**: MagneticButton applied to "Explore" links
- ✅ **Tilt Effect**: TiltCard component on hover
- ✅ **Glow Effect**: Animated background glow on hover
- ✅ **Outcome List**: StaggerChildren for outcome items

#### 2.3 Transitions
- ✅ Smooth scroll-triggered animations
- ✅ Section isolation for proper stacking (`.section-isolate`)
- ✅ Fully opaque backgrounds to prevent text bleeding

**Status**: ✅ COMPLETE

**Implementation Files**:
- `src/routes/services.tsx` - Main service page
- Apply: `SplitText`, `TiltCard`, `MagneticButton`, `StaggerChildren`, `CounterAnimation`

---

### 3. Work/Case Studies Page (`/work`) ✅ FULLY ENHANCED

**Current State**: Fully animated with premium effects

**Implemented Enhancements**:

#### 3.1 Hero Section
- ✅ Split text animation on heading (word-by-word reveal)
- ✅ Animated background glow (pulsing orb effect)
- ✅ Smooth scroll wrapper with Lenis
- ✅ Scroll progress indicator
- ✅ Fade-in with stagger on subtitle

#### 3.2 Case Study Cards
- ✅ **Staggered Reveal**: Slide-in effect from bottom
- ✅ **Metric Counters**: CounterAnimation for numbers (+312%, 4.7x, -42%)
- ✅ **Hover Tilt**: TiltCard 3D effect on entire card
- ✅ **Sequential Blocks**: Problem → Solution → Result reveal with stagger
- ✅ **Tag Animation**: Slide-in from left with stagger
- ✅ **Metric Cards**: Scale + fade on reveal with stagger

#### 3.3 Visual Enhancements
- ✅ Animated percentage indicators
- ✅ Hover scale effect on metric cards
- ✅ Section isolation for proper stacking (`.section-isolate`)
- ✅ Fully opaque backgrounds to prevent text bleeding

**Status**: ✅ COMPLETE

**Implementation Files**:
- `src/routes/work.tsx` - Case studies page
- Apply: `SplitText`, `TiltCard`, `CounterAnimation`, `StaggerChildren`, `FadeInSection`

---

### 4. Contact Page (`/contact`) ✅ FULLY ENHANCED

**Current State**: Fully animated with premium effects

**Implemented Enhancements**:

#### 4.1 Hero Section
- ✅ Split text animation on heading (word-by-word reveal)
- ✅ Smooth scroll wrapper with Lenis
- ✅ Scroll progress indicator
- ✅ Fade-in with stagger on subtitle

#### 4.2 Form Section
- ✅ **Staggered Field Reveal**: StaggerChildren for form fields
- ✅ **Input Focus Animations**: Scale animation on focus (`whileFocus`)
- ✅ **Ripple Effect**: RippleButton on submit button
- ✅ **Magnetic Effect**: MagneticButton on submit button
- ✅ **Success Animation**: Enhanced checkmark with spring animation and scale

#### 4.3 Info Cards
- ✅ **Staggered Reveal**: Cards appear with delay using StaggerChildren
- ✅ **Hover Lift**: Card lifts on hover with shadow
- ✅ **Icon Animations**: Icons rotate on hover
- ✅ **Hover Scale**: Cards scale on hover

#### 4.4 Interactive Elements
- ✅ Magnetic + Ripple button effect on submit
- ✅ Section isolation for proper stacking (`.section-isolate`)
- ✅ Fully opaque backgrounds to prevent text bleeding

**Status**: ✅ COMPLETE

**Implementation Files**:
- `src/routes/contact.tsx` - Contact page
- Apply: `SplitText`, `MagneticButton`, `RippleButton`, `StaggerChildren`, `FadeInSection`

---

### 5. Process Page (`/process`) ✅ FULLY ENHANCED

**Current State**: Fully animated with premium effects

**Implemented Enhancements**:

#### 5.1 Hero Section
- ✅ Split text animation on heading (word-by-word reveal)
- ✅ Smooth scroll wrapper with Lenis
- ✅ Scroll progress indicator
- ✅ Fade-in with stagger on subtitle

#### 5.2 Timeline
- ✅ **Animated Line Drawing**: Timeline line animates with scaleY from 0 to 1
- ✅ **Pulse Animation**: Timeline dots pulse when in view
- ✅ **Sequential Phase Reveal**: Phases appear with staggered delay
- ✅ **Number Animation**: Phase numbers scale on reveal (01, 02, 03, 04)

#### 5.3 Phase Cards
- ✅ **Slide-in from Alternating Sides**: Left/right based on index
- ✅ **Staggered Deliverable Tags**: Tags appear with delay and hover scale
- ✅ **Sequential Reveals**: Each phase appears with proper delay

#### 5.4 Visual Flow
- ✅ Section isolation for proper stacking (`.section-isolate`)
- ✅ Fully opaque backgrounds to prevent text bleeding
- ✅ Smooth scroll-triggered animations

**Status**: ✅ COMPLETE

**Implementation Files**:
- `src/routes/process.tsx` - Process page
- Apply: `SplitText`, `CounterAnimation`, `StaggerChildren`, `FadeInSection`
- Create: `TimelineAnimation.tsx` component

---

### 6. Service Detail Pages ✅ FULLY ENHANCED

**Pages**:
- `/services/$serviceSlug` - Dynamic service pages
- `/social-media-marketing` - Dedicated page
- `/branding-agency-creative-services` - Dedicated page
- `/video-production-photography-services` - Dedicated page

**Status**: ✅ All pages fully enhanced

**Implemented Animations**:
- ✅ Hero section with SplitText animation (word-by-word reveal with highlighted keywords)
- ✅ Service feature cards with TiltCard 3D hover effect
- ✅ Icon animations (rotate 360° and scale on reveal)
- ✅ MagneticButton on all CTA buttons
- ✅ StaggerChildren for lists and card grids
- ✅ Section isolation with `.section-isolate` class
- ✅ Fully opaque backgrounds (`bg-surface` instead of `bg-surface/30`)
- ✅ Smooth scroll wrapper with Lenis
- ✅ Scroll progress indicator
- ✅ FAQ accordions with enhanced hover states
- ✅ Hover effects (scale, glow, border transitions)

**Status**: ✅ COMPLETE

---

### 7. Careers Page (`/careers`) 🔍 NOT CHECKED

**Status**: Need to review if page exists and current implementation

**Recommended Animations** (if exists):
- Hero section animations
- Job listing cards with stagger
- Benefits section with icons
- Application form animations
- Team culture section

**Priority**: 🟢 LOW

---

## 🧩 Animation Components Library

### ✅ Implemented Components
1. **SplitText** - Text reveal animations (word/character)
2. **FadeInSection** - Viewport-triggered fades with direction
3. **StaggerChildren** - Sequential child animations
4. **ParallaxSection** - Scroll-based parallax
5. **TiltCard** - 3D tilt on hover
6. **MagneticButton** - Cursor-following buttons
7. **RippleButton** - Click ripple effect
8. **AnimatedOrb** - Floating orb with parallax
9. **CounterAnimation** - Number counting
10. **HorizontalScroll** - Marquee scrolling
11. **HorizontalScrollSection** - Full horizontal scroll
12. **ScrollProgress** - Page progress indicator

### 🔄 Components Needed
1. **TimelineAnimation** - Animated timeline with drawing effect
2. **FormFieldAnimation** - Input field focus/validation animations
3. **MetricCounter** - Animated metric displays with progress bars
4. **PageTransition** - Smooth page-to-page transitions
5. **LoadingAnimation** - Page loading states
6. **CardFlip** - 3D card flip effect
7. **DrawSVG** - SVG path drawing animation
8. **ShakeAnimation** - Error shake effect
9. **PulseGlow** - Pulsing glow effect
10. **ProgressBar** - Animated progress bars

---

## 📅 Implementation Priority

### Phase 1: High Priority ✅ COMPLETE
1. ✅ Home page (COMPLETE)
2. ✅ **Services page enhancements** (COMPLETE)
   - Split text hero
   - Tilt cards
   - Magnetic links
   - Counter animations
3. ✅ **Work/Case Studies page enhancements** (COMPLETE)
   - Split text hero
   - Metric counters
   - Tilt cards
   - Sequential block reveals

### Phase 2: Medium Priority ✅ COMPLETE
4. ✅ **Contact page enhancements** (COMPLETE)
   - Form field animations
   - Success/error states
   - Info card animations
5. ✅ **Process page enhancements** (COMPLETE)
   - Timeline drawing animation
   - Phase counter animations
   - Alternating slide-ins
6. ✅ **Service detail pages** (COMPLETE)
   - All 4 pages fully enhanced
   - Consistent animations applied

### Phase 3: Optional Future Enhancements
7. 🔄 **Careers page** (if exists)
   - Review and enhance
8. 🔄 **Page transitions** (Optional)
   - Route change animations
9. 🔄 **Loading animations** (Optional)
   - Initial page load
10. 🔄 **Advanced micro-interactions** (Optional)
    - Cursor trails
    - Easter eggs

---

## ⚡ Performance Considerations

### Optimization Strategies
1. **GPU Acceleration**: Use `transform` and `opacity` for animations
2. **Will-change**: Applied to frequently animated elements
3. **Lazy Loading**: Animations initialize on viewport entry
4. **Cleanup**: Proper ScrollTrigger and GSAP instance cleanup
5. **Reduced Motion**: Respect `prefers-reduced-motion`

### Best Practices
- Avoid animating `width`, `height`, `top`, `left`
- Use `transform: translate3d()` for hardware acceleration
- Batch DOM reads/writes
- Use `requestAnimationFrame` for custom animations
- Debounce resize handlers
- Use IntersectionObserver for viewport detection

---

## ♿ Accessibility

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus Management
- Maintain focus visibility during animations
- Ensure keyboard navigation works with animated elements
- Provide skip links for long animated sections
- Announce dynamic content changes to screen readers

---

## 🧪 Testing Checklist

### Per-Page Testing
- [x] Home page (✅ Complete)
- [x] Services page (✅ Complete)
- [x] Work page (✅ Complete)
- [x] Contact page (✅ Complete)
- [x] Process page (✅ Complete)
- [x] Service detail pages (✅ Complete - All 4 pages)
- [ ] Careers page (if exists)

### Cross-Browser Testing
- [ ] Chrome Desktop
- [ ] Firefox Desktop
- [ ] Safari Desktop
- [ ] Edge Desktop
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Samsung Internet

### Performance Testing
- [ ] Lighthouse audit (all pages)
- [ ] Memory leak testing
- [ ] Slow network (3G) testing
- [ ] CPU throttling testing
- [ ] Animation frame rate monitoring

### Accessibility Testing
- [ ] Reduced motion testing
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Focus management
- [ ] Color contrast with animations

---

## 📊 Success Metrics

- **Performance**: Maintain 60fps on all animations
- **Accessibility**: 100% keyboard navigable, screen reader friendly
- **Load Time**: < 3s initial load on 3G
- **Engagement**: Increased time on page by 30%
- **Conversion**: Improved CTA click rates by 20%
- **Lighthouse Score**: 90+ on all pages

---

## 🎯 Next Steps

### ✅ Completed
1. ✅ **All Core Pages Enhanced**: Home, Services, Work, Contact, Process, and all Service Detail pages
2. ✅ **All Animation Components Created**: SplitText, TiltCard, MagneticButton, RippleButton, CounterAnimation, StaggerChildren, etc.
3. ✅ **Section Isolation Applied**: All pages use `.section-isolate` class to prevent text bleeding
4. ✅ **Consistent Animation System**: All pages follow the same animation patterns

### 🔄 Recommended Next Steps
1. **Cross-Browser Testing**: Test all pages on Chrome, Firefox, Safari, Edge
2. **Mobile Device Testing**: Test on iOS Safari, Chrome Mobile, various screen sizes
3. **Performance Audit**: Run Lighthouse audits on all pages
4. **Accessibility Audit**: Test with screen readers and keyboard navigation
5. **Reduced Motion Support**: Implement `prefers-reduced-motion` fallbacks
6. **Optional Enhancements**:
   - Page transition animations
   - Loading screen animations
   - Careers page (if exists)
   - Advanced cursor effects

---

## 📝 Notes

### Animation Timing Standards
- **Fast**: 0.2-0.3s (micro-interactions)
- **Medium**: 0.4-0.6s (standard animations)
- **Slow**: 0.8-1.2s (hero/dramatic reveals)

### Easing Standards
- **Ease Out**: Most UI elements `cubic-bezier(0.16, 1, 0.3, 1)`
- **Ease In Out**: Smooth transitions `cubic-bezier(0.65, 0, 0.35, 1)`
- **Spring**: Playful interactions (Framer Motion spring)

### Known Issues
- None currently

### Future Enhancements
- Page transition animations
- Cursor trail effect
- WebGL effects for hero sections
- Particle systems
- 3D model integration

---

**Last Updated**: May 4, 2026
**Version**: 3.0 - All Core Pages Complete
**Status**: ✅ All core pages fully enhanced with premium animations

