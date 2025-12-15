# HubSpot Heavyweight Belts Landing Page Setup

Modern, tech-forward landing page design inspired by premium stablecoin/crypto marketing. Features a glowing product showcase, bold gradient typography, and rotating partner brand logos.

## Files Included

1. **hubspot-head.html** - All CSS styles (goes in HEAD HTML section)
2. **hubspot-footer.html** - JavaScript functionality (goes in FOOTER HTML section)
3. **hubspot-source.html** - Main HTML content (goes in SOURCE CODE section)

## HubSpot Setup Instructions

### Step 1: Create a New Landing Page

1. Log in to your HubSpot account
2. Navigate to **Marketing** > **Landing Pages**
3. Click **Create** > **Landing Page**
4. Choose **Blank template** or **Drag and drop**

### Step 2: Insert the Code

#### Head HTML Section
1. Click on the **Settings** tab (gear icon)
2. Scroll to **Advanced Options**
3. Find **Head HTML** section
4. Copy and paste the entire contents of `hubspot-head.html`

#### Footer HTML Section
1. Still in **Settings** > **Advanced Options**
2. Find **Footer HTML** section
3. Copy and paste the entire contents of `hubspot-footer.html`

#### Source Code Section
1. Switch to **Content** tab
2. Click the **</>** icon to switch to source code view
3. Copy and paste the entire contents of `hubspot-source.html`
4. You can add this below your existing header or in a full-width section

### Step 3: Configure Settings

1. **Page Title**: "Heavyweight Industrial Belts | Applied Industrial Technologies"
2. **Meta Description**: "Premium heavyweight belts for industrial power transmission. Next-generation reliability and performance."
3. **URL Path**: /heavyweight-belts or your preferred slug

## Design Features

This landing page uses a **modern, tech-forward design** inspired by premium crypto/tech product launches.

### Visual Style
- **Dark blue gradient background** (navy to deep blue)
- **Glowing card showcase** - pulsing glow effect for product/logo
- **Large gradient headline** - 5rem with blue gradient text effect
- **Centered layout** - everything flows from top to bottom
- **Rotating brand logos** - infinite scroll marquee at bottom

### Color Scheme
- Primary: Deep Navy (#0a1628) → Royal Blue (#1e3a8a)
- Accent: Blue (#3b82f6)
- Glow effect: Pulsing blue shadows
- Text: White with blue gradients

### Key Sections

1. **Glowing Product Card** (Top Center)
   - Pulsing glow animation (3-second loop)
   - Rounded card with gradient border
   - Perfect for logo, icon, or product silhouette
   - 500px max width, maintains aspect ratio
   - Blue glow filter on image

2. **Hero Content** (Center)
   - Optional tagline (small, uppercase, subtle)
   - Massive 5rem headline with gradient effect
   - "Heavyweight Belts, Meet The Future."
   - Two prominent CTAs side-by-side

3. **Rotating Brand Logos** (Bottom)
   - Infinite scroll animation (30s loop)
   - 6 partner logos (duplicated for seamless loop)
   - Grayscale + brightened for consistency
   - Pauses on hover
   - Auto-fetches logos from Clearbit (or use your own)

### CTA Buttons

Two modern call-to-action buttons:

1. **Get a Quote** (Primary)
   - Blue background with glowing border
   - Inset glow effect
   - Uppercase text

2. **Learn More** (Secondary)
   - Transparent with blue border
   - Hover fills with subtle blue tint

## Customization Guide

### 1. Replace the Glowing Product Image

The centerpiece glowing card needs your product icon/logo:

**Current:** Blue "S" shaped SVG placeholder
**Replace with:** Your belt icon, product logo, or simplified graphic

```html
<!-- Find line 18 in hubspot-source.html -->
<!-- Replace the <svg>...</svg> with: -->
<img src="https://your-hubspot-domain.com/hubfs/belt-icon.png" alt="Heavyweight Belts">
```

**Image Requirements:**
- Format: PNG with transparent background (recommended)
- Size: 400x400px minimum
- Style: Simple icon, logo, or product silhouette
- Color: White or light blue works best with the glow effect

### 2. Customize Brand Logos

Replace the placeholder logos with your actual partners/clients:

```html
<!-- Lines 84-101 in hubspot-source.html -->
<!-- First Set -->
<div class="ait-brand-item">
  <img src="YOUR-PARTNER-LOGO-URL" alt="Partner Name">
</div>

<!-- Duplicate the same logos in lines 104-121 for seamless loop -->
```

**Using Your Own Logos:**
1. Upload partner logos to HubSpot File Manager
2. Get the public URL for each logo
3. Replace Clearbit URLs with your logo URLs
4. Keep logos roughly 40px height (they auto-scale)

**Logo Tips:**
- Use simple, recognizable logos
- SVG format preferred (scales perfectly)
- Or use high-quality PNG files
- All logos will be grayscale + brightened automatically

### 3. Update Copy

**Tagline** (line 36):
```html
<p class="ait-hero-tagline">Your custom tagline here</p>
```

**Main Headline** (lines 39-41):
```html
<h1 class="ait-hero-title">
  Heavyweight Belts, Meet The Future.
</h1>
```

**CTA Buttons** (lines 45-50):
```html
<a href="/contact" class="ait-btn ait-btn-primary">Get a Quote</a>
<a href="/catalog" class="ait-btn ait-btn-secondary">Learn More</a>
```

### 4. Alternative: Show Stats Instead of Brands

If you prefer to display stats instead of partner logos:

1. **Uncomment** the stats section (lines 56-74 in `hubspot-source.html`)
2. **Comment out** or delete the brands section (lines 77-124)
3. Customize the stat values:

```html
<div class="ait-stat-value">125,000</div>  <!-- Belt Systems Installed -->
<div class="ait-stat-value">2,500</div>    <!-- Industries Served -->
<div class="ait-stat-value">99.7%</div>    <!-- Operational Uptime -->
```

## Adding a Background Video (Optional)

Want to add a subtle video behind everything?

Add this to **hubspot-source.html** at line 6, right after `<section class="ait-hero-section">`:

```html
<video autoplay muted loop playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.15; z-index: 0;">
  <source src="YOUR-VIDEO-URL.mp4" type="video/mp4">
</video>
```

**Video Recommendations:**
- Low opacity (0.1-0.2) so it doesn't overpower
- Subtle industrial footage (conveyor belts, machinery, etc.)
- MP4 format, under 5MB
- 1920x1080 resolution

## Design Details

### Glow Card Animation
The product showcase card has a **pulsing glow effect**:
- 3-second animation loop
- Glows from 80px to 100px radius
- Blue color (#1e3a8a)
- Creates "breathing" effect

### Brand Logo Scroll
The brand marquee is an **infinite scroll**:
- 30-second complete loop
- Logos duplicated for seamless effect
- Pauses on hover (users can read)
- Grayscale + brightness filter for consistency

### Gradient Typography
The headline uses **gradient clipping**:
- Light blue (#3b82f6) → Dark blue (#1e3a8a)
- Webkit background clip for text
- Creates premium, modern look
- Subtle glow effect behind text

## Global Header/Footer Compatibility

This landing page is **fully scoped** to prevent conflicts:

- All styles are prefixed with `.ait-landing-page`
- No global CSS resets that affect other elements
- JavaScript is contained and non-invasive
- Works alongside HubSpot's global header/footer modules

## Analytics & Tracking

The Footer HTML includes:

- **HubSpot Event Tracking**: Tracks CTA button clicks
- **Google Analytics Support**: Automatically logs events if GA is installed
- **Scroll Animations**: Stats counter animates on scroll into view (if using stats)

### Event Names
- Event ID: `heavyweight_belts_cta_click`
- Event Labels: Button text (e.g., "Get a Quote")

## Responsive Design

The page is fully responsive and looks great on all devices:

- **Desktop (1200px+)**: Full-size glow card, 5rem headline, horizontal logos
- **Tablet (768px-1024px)**: Scaled to 4rem headline, 400px card
- **Mobile (480px-768px)**: 3rem headline, 320px card, stacked CTAs
- **Small Mobile (<480px)**: 2.25rem headline, 280px card, full-width buttons

### Mobile Optimizations
- Brand logos reduce to 30px height
- Stats stack vertically with dividers
- CTAs become full-width buttons
- Reduced glow effects for performance

## Testing Checklist

- [ ] Preview page in HubSpot preview mode
- [ ] Replace glowing card image with actual product icon
- [ ] Update brand logos with real partner logos
- [ ] Customize headline and tagline
- [ ] Test CTA button links
- [ ] Test on desktop (1920px, 1366px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px, 414px)
- [ ] Verify brand logo scroll animation
- [ ] Check glow animation smoothness
- [ ] Confirm no conflicts with global header/footer

## Common Questions

**Q: The glow effect isn't showing**
A: Make sure your image is light-colored (white/light blue). Dark images won't show the blue glow well.

**Q: Brand logos aren't scrolling**
A: Check that you've duplicated the brand set exactly (both sets must be identical for seamless loop).

**Q: Can I use a different color scheme?**
A: Yes! Search and replace in `hubspot-head.html`:
- `#1e3a8a` (dark blue) → your primary color
- `#3b82f6` (blue) → your accent color

**Q: The headline is too big**
A: Edit line 118 in `hubspot-head.html`: Change `font-size: 5rem;` to `4rem` or `3.5rem`

## Optional Enhancements

### Add Particle Effects
Want floating particles in the background? Add this JavaScript library to Footer HTML:
- particles.js or tsparticles
- Subtle blue particles that complement the glow

### Add More Sections
Extend below the hero with additional sections:
- Feature grid (3 columns)
- Product specifications
- Customer testimonials
- FAQ accordion

---

**Version**: 4.0 - Tech/Crypto Style Edition
**Last Updated**: 2025-12-15
**Complete Redesign**:
- Modern tech/crypto landing page aesthetic
- Centered layout with glowing product showcase
- Pulsing glow animation on centerpiece card
- Large 5rem gradient headline
- Rotating brand logo marquee (infinite scroll)
- Dark blue gradient background
- Two prominent CTAs
- Alternative stats display option
- Fully responsive, mobile-optimized

**Design Inspiration**: Premium stablecoin/crypto marketing pages
**Best For**: Tech-forward B2B products, industrial innovation
**Compatible With**: HubSpot CMS, Marketing Hub Professional/Enterprise
