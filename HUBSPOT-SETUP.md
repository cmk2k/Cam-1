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

### Color Scheme (Applied Industrial Technologies)
- Primary Blue: #1e3a8a
- Accent Red: #ef4444
- Dark Gradient: Brown to Navy (#3d2817 → #1e3a8a → #0f172a)

### Key Sections

1. **Hero Section**
   - Large title on the left
   - Animated belt pulley graphic on the right
   - Two CTA buttons (customizable)
   - Dark gradient background

2. **Stats Section**
   - Three key metrics with animated counters
   - Decorative border design
   - Positioned at bottom of hero

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

## Customization Guide

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

### Replace Belt Image

The current design uses an SVG graphic. To use a real product image:

1. Upload your belt image to HubSpot File Manager
2. Replace the `<div class="ait-belt-image">` content (lines 41-75) with:

```html
<div class="ait-belt-image">
  <img src="YOUR-IMAGE-URL" alt="Heavyweight Industrial Belt"
       style="width: 100%; height: 100%; object-fit: cover; padding: 20px;">
</div>
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

## Responsive Design

The page is fully responsive with breakpoints at:

- **1024px**: Switches to single column, centers content
- **768px**: Adjusts typography and spacing
- **480px**: Mobile-optimized layout

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

**Version**: 1.0
**Last Updated**: 2025-12-15
**Compatible With**: HubSpot CMS, Marketing Hub Professional/Enterprise
