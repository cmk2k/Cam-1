# HubSpot Heavyweight Belts Landing Page Setup

This landing page is designed to mimic the NFT Dungeon-Crawling design but adapted for Applied Industrial Technologies' heavyweight belts product line.

## Files Included

1. **hubspot-head.html** - Styles and CSS (goes in HEAD HTML section)
2. **hubspot-footer.html** - JavaScript functionality (goes in FOOTER HTML section)
3. **hubspot-source.html** - Main page content (goes in SOURCE CODE section)

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
2. **Meta Description**: "Premium heavyweight belts for industrial power transmission. Maximum durability and proven performance."
3. **URL Path**: /heavyweight-belts or your preferred slug

## Design Features

This is a **premium, modern landing page** designed to look professional and impressive for industrial audiences.

### Visual Design
- **Glassmorphism effect**: Frosted glass aesthetic with blur effects
- **Gradient overlays**: Subtle radial gradients for depth
- **Modern typography**: Bold, impactful headings with clean hierarchy
- **Professional animations**: Smooth hover effects and transitions

### Color Scheme (Applied Industrial Technologies)
- Primary Blue: #1e3a8a
- Accent Red: #ef4444
- Glass containers with 88-92% opacity backgrounds (allows video to show through)
- White text with gradient effects for premium look

### Key Sections

1. **Hero Section** (85vh full-screen impact)
   - Large, bold headline (4rem, single line for impact)
   - Premium subtitle with professional copy
   - Two modern CTA buttons with shadows and hover effects
   - **Semi-transparent background** works beautifully with videos
   - Product showcase card with glassmorphism and gradient border
   - High-quality placeholder image (easily replaceable)

2. **Stats Section** (Positioned at bottom, overlaying hero)
   - Three key metrics with gradient text effects
   - Frosted glass container with blur backdrop
   - Elegant dividers between stats
   - Large, impressive numbers (3.5rem)
   - Animated counter effects on scroll

### CTA Buttons

The landing page includes two call-to-action buttons:

1. **Get a Quote** (Primary CTA)
   - Currently links to `#contact`
   - Update href to your HubSpot form or contact page

2. **Explore Catalog** (Secondary CTA)
   - Currently links to `#catalog`
   - Update href to your product catalog page

**To customize CTAs:**
Edit in `hubspot-source.html` lines 26-34

## Adding a Background Video

The page is designed with transparent backgrounds to showcase a video. Here's how to add one:

### Option 1: HubSpot Video Module (Recommended)

1. In HubSpot page editor, go to the section containing the landing page
2. Click **Settings** on the section
3. Under **Background**, select **Video**
4. Upload your video or paste a video URL (YouTube, Vimeo, or direct MP4)
5. Set video to **Autoplay** and **Loop**
6. Set **Fallback Image** for mobile devices

### Option 2: Custom Background Video (Advanced)

Add this code to your **Source Code** section, BEFORE the `<div class="ait-landing-page">` line:

```html
<style>
.ait-hero-section {
  position: relative;
}
.ait-hero-section video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
</style>

<div class="ait-landing-page">
  <section class="ait-hero-section">
    <video autoplay muted loop playsinline>
      <source src="YOUR-VIDEO-URL.mp4" type="video/mp4">
    </video>
    <!-- Rest of content continues below -->
```

**Video Recommendations:**
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 (Full HD)
- Length: 10-30 seconds (looping)
- File size: Under 5MB for fast loading
- Content: Industrial manufacturing, belt systems, production lines

## Customization Guide

### Replace the Product Image

The placeholder image makes it very easy to swap in your own:

1. Upload your belt product image to **HubSpot File Manager**
2. Copy the image URL
3. In `hubspot-source.html`, find line 40
4. Replace the placeholder URL with your image:

```html
<!-- BEFORE -->
<img src="https://via.placeholder.com/450x450/1e3a8a/ffffff?text=Your+Belt+Image+Here" alt="Heavyweight Industrial Belt Placeholder">

<!-- AFTER -->
<img src="https://your-hubspot-url.com/your-belt-image.jpg" alt="Heavyweight Industrial Belt">
```

**Image Recommendations:**
- Format: JPG or PNG
- Size: 800x800px minimum (square aspect ratio)
- File size: Under 200KB (optimized)
- Content: Clear product shot, white or transparent background

### Update Statistics

Edit the stats in `hubspot-source.html` around lines 78-92:

```html
<div class="ait-stat-value">125,000</div>  <!-- Belt Systems Installed -->
<div class="ait-stat-value">2,500</div>    <!-- Industries Served -->
<div class="ait-stat-value">99.7%</div>    <!-- Operational Uptime -->
```

### Update Copy

Main heading (lines 18-22):
```html
<h1 class="ait-hero-title">
  Heavyweight<br>
  Industrial<br>
  Belts
</h1>
```

Subtitle (lines 23-26):
```html
<p class="ait-hero-subtitle">
  Premium power transmission solutions...
</p>
```

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
- **Scroll Animations**: Stats counter animates on scroll into view

### Event Names
- Event ID: `heavyweight_belts_cta_click`
- Event Labels: Button text (e.g., "Get a Quote")

## What Makes This Landing Page Stand Out

This is a **professional, modern landing page** that looks like it was designed by a top agency:

### Premium Glassmorphism Design
- **Frosted glass effects** with backdrop blur (modern, trendy aesthetic)
- **Gradient borders** on product showcase card
- **Semi-transparent containers** that work beautifully over video backgrounds
- **Smooth animations** throughout (hover effects, transitions)

### Large, Impactful Layout
- **Full-screen hero** (85vh) for maximum visual impact
- **Bold 4rem headline** - professional and commanding
- **3.5rem stats** with gradient text effects - impressive and eye-catching
- **Modern glassmorphic card** for product showcase

### Professional Typography & Spacing
- Clean font hierarchy with proper weight (800 for headings)
- Generous spacing and padding for breathing room
- Single-line headline for impact (not broken up awkwardly)
- Professional copy that speaks to decision-makers

### Video Background Support
- 88-92% opacity backgrounds let your video shine through
- All text remains perfectly readable
- Gradient overlays add depth without obscuring video
- Stats positioned to overlay hero for dynamic composition

### Modern Button Design
- Large, prominent CTAs with proper padding
- Elegant shadows and hover animations
- Primary button: Bold red with glow effect
- Secondary button: Frosted glass with backdrop blur

### Premium Product Showcase
- Large, impressive product card (550px max)
- Glassmorphic container with gradient border
- Smooth hover animation (lifts up on hover)
- High-quality industrial image placeholder
- Easy one-line image replacement

## Responsive Design

The page is fully responsive and looks great on all devices:

- **1200px and below**: Stats move below hero content (no longer overlapping)
- **1024px**: Single column layout, centered content, 3.5rem headline
- **768px**: Adjusted spacing (70vh height), stacked stats with dividers
- **480px**: Mobile-optimized (65vh), full-width buttons, 2.25rem headline

## Testing Checklist

- [ ] Preview page in HubSpot preview mode
- [ ] Test on desktop (1920px, 1366px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px, 414px)
- [ ] Verify CTA buttons link to correct pages
- [ ] Check that stats animate on scroll
- [ ] Confirm no conflicts with global header/footer
- [ ] Test form submissions (if integrated)
- [ ] Verify analytics tracking in HubSpot

## Support

For questions or issues:
1. Check that all three files are properly inserted in their respective sections
2. Clear browser cache if styles don't appear
3. Verify no JavaScript errors in browser console
4. Ensure HubSpot page is published (not just saved as draft)

## Optional Enhancements

Uncomment the additional content section in `hubspot-source.html` (lines 99-129) to add:
- "Why Choose Our Heavyweight Belts?" feature section
- Three benefit cards with icons
- Easy to extend with more sections

---

**Version**: 3.0 - Premium Edition
**Last Updated**: 2025-12-15
**Major Redesign**:
- Complete visual overhaul with modern glassmorphism design
- Full-screen impact hero (85vh) with premium typography
- Gradient text effects and frosted glass containers
- Professional animations and hover effects
- Large, bold 4rem headline for maximum impact
- Stats overlay with gradient dividers
- High-quality industrial image placeholder
- Optimized for video backgrounds (88-92% opacity)

**Design Style**: Modern, premium, agency-quality
**Compatible With**: HubSpot CMS, Marketing Hub Professional/Enterprise
