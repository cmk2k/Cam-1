# Heavyweight Conveyor Belts Landing Page - HubSpot Implementation Guide

## 📋 Overview

This landing page is designed for Applied Industrial Technologies to promote heavyweight conveyor belt solutions. The page consists of **5 independent modules** that can be added to HubSpot via Rich Text blocks.

---

## 🎯 Page Structure

```
┌─────────────────────────────────────────────┐
│  MODULE 1: HERO SECTION                     │
│  - Dark gradient background                 │
│  - Large headline + subheadline             │
│  - Dual CTAs (Contact / Download)           │
│  - Highlight ribbon with key capabilities   │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  MODULE 2: INFO SECTION - CAPABILITIES      │
│  - 4 capability cards in responsive grid    │
│  - Two-column feature with image + text     │
│  - "Request Service" CTA                    │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  MODULE 3: INTERACTIVE MAP                  │
│  - USA map with 15 clickable locations      │
│  - Blue pins = Rubber Shops                 │
│  - Yellow stars = Distribution Centers      │
│  - Tooltips with contact info               │
│  - Mobile fallback list                     │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  MODULE 4: VIDEO HUB & SUPPLIER SCROLLER    │
│  - Embedded video with caption              │
│  - Horizontal scrolling supplier carousel   │
│  - 6 supplier partner cards                 │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│  MODULE 5: CONTACT & FOOTER CTA             │
│  - Navy background with toll-free number    │
│  - Dual CTAs (Get Started / Find Shop)      │
│  - 24/7 emergency service messaging         │
└─────────────────────────────────────────────┘
```

---

## 🚀 Implementation Steps

### Step 1: Create a New HubSpot Page

1. Navigate to **Marketing → Website → Website Pages**
2. Click **Create → Website page**
3. Choose a template (or start from scratch)
4. Name the page: **"Heavyweight Conveyor Belts"**

### Step 2: Add Rich Text Modules

For **each module** (1–5), follow these steps:

1. **Add a Rich Text module** to the page
2. In the module settings, locate the **HEAD HTML** section (usually under Advanced Options)
3. Copy the contents of `module-X-NAME-HEAD.html` and paste into **HEAD HTML**
4. Switch the Rich Text editor to **Source Code** view (usually a `<>` icon)
5. Copy the contents of `module-X-NAME-BODY.html` and paste into the **source code editor**
6. Switch back to the **Visual editor** to verify the module appears correctly
7. In the module settings, locate the **FOOTER HTML** section
8. Copy the contents of `module-X-NAME-FOOTER.html` and paste into **FOOTER HTML**
9. Save the module

### Step 3: Upload Required Assets

You'll need to upload the following assets to HubSpot's File Manager:

#### Images:
- `heavy-belt-hero.jpg` – Hero background image (conveyor belt in industrial setting)
- `image-belt-factory.jpg` – Service technician vulcanizing belt on-site
- `map-usa.svg` or `map-usa.png` – USA map for interactive location pins

#### Supplier Logos:
- `logo-continental.png`
- `logo-goldspec.png`
- `logo-fenner-dunlop.png`
- `logo-gates.png`
- `logo-goodyear.png`
- `logo-phoenix.png`

#### Video:
- `heavy-belt-overview.mp4` – Product/service overview video
- `video-thumbnail-heavy-belt.jpg` – Video poster image

#### Optional:
- `heavyweight-belt-spec-sheet.pdf` – Downloadable spec sheet

### Step 4: Update Asset URLs

After uploading, replace placeholder URLs in the source code:

**Module 1 (Hero):**
- Replace `heavy-belt-hero.jpg` with HubSpot file URL
- Replace `heavyweight-belt-spec-sheet.pdf` with HubSpot file URL
- Replace `https://applied.com/heavybelt-form` with actual form page URL

**Module 2 (Info):**
- Replace `image-belt-factory.jpg` with HubSpot file URL
- Replace `https://applied.com/heavybelt-form` with actual form page URL

**Module 3 (Map):**
- Replace `map-usa.svg` with HubSpot file URL

**Module 4 (Media):**
- Replace `heavy-belt-overview.mp4` with HubSpot file URL
- Replace `video-thumbnail-heavy-belt.jpg` with HubSpot file URL
- Replace all `logo-*.png` files with HubSpot file URLs

**Module 5 (Contact):**
- Replace `https://applied.com/heavybelt-form` with actual form page URL

### Step 5: Customize Content

All text is wrapped in `<span class="editable-text">` tags, which means you can edit it directly in HubSpot's **WYSIWYG editor** without touching code:

1. Switch to Visual editor
2. Click any text to edit
3. Update as needed
4. Publish changes

---

## 🎨 Brand Colors

The page uses CSS variables defined in Module 1's HEAD. To change colors globally:

```css
:root {
  --aih-primary: #002855;      /* Navy blue - main headings, buttons */
  --aih-accent: #FF6B35;       /* Orange - CTAs, highlights */
  --aih-highlight: #FFD23F;    /* Safety yellow - ribbon, accents */
  --aih-text-light: #FFFFFF;
  --aih-text-dark: #1A1A1A;
  --aih-grey-light: #F5F5F5;
  --aih-grey-mid: #CCCCCC;
}
```

**To update colors:**
1. Edit Module 1's HEAD HTML
2. Change the hex values in `:root`
3. Save and republish

---

## 📍 Module 3: Map Locations

The interactive map includes **15 pre-configured locations** (10 rubber shops, 5 distribution centers). To add/edit locations:

### To Add a New Location:

1. Find a new location in `module-3-map-BODY.html`
2. Copy an existing `<button class="aih-map__pin">` block
3. Update:
   - `style="top: X%; left: Y%;"` – Position on map (adjust by trial)
   - `aria-label` – Location name and state
   - `data-location` – Unique ID
   - Tooltip content (city, description, phone)
   - Icon: `●` for shops, `★` for distribution centers
   - Class: `aih-map__pin--shop` (blue) or `aih-map__pin--distribution` (yellow)
4. Add corresponding entry to the mobile fallback list at the bottom

### Current Locations:

**Rubber Shops (Blue ●):**
- Cleveland, OH
- Houston, TX
- Portland, OR
- Atlanta, GA
- Boston, MA
- Minneapolis, MN
- Pittsburgh, PA
- Dallas, TX
- San Diego, CA

**Distribution Centers (Yellow ★):**
- Chicago, IL
- Phoenix, AZ
- Denver, CO
- Las Vegas, NV
- Charlotte, NC
- Salt Lake City, UT

---

## 📱 Responsive Design

All modules are fully responsive with breakpoints at:

- **360px** – Small mobile phones
- **768px** – Tablets (map switches to list view)
- **1024px** – Small desktops
- **1280px** – Large desktops

**No additional mobile configuration needed.**

---

## ♿ Accessibility Features

- **Semantic HTML** – Proper heading hierarchy (H1 → H2 → H3)
- **ARIA labels** – All interactive elements labeled
- **Keyboard navigation** – Map pins, CTAs, and carousel navigable via keyboard
- **Focus indicators** – Visible outlines on focus (yellow highlight)
- **Reduced motion** – Animations disabled if user prefers reduced motion
- **Alt text** – All images have descriptive alt attributes
- **Color contrast** – WCAG AA compliant (navy on white, white on navy)

---

## 🔧 Customization Tips

### Change CTA Links

Search for `https://applied.com/heavybelt-form` in all modules and replace with your HubSpot form page URL.

### Edit Phone Number

Search for `1-877-279-2799` in Module 3 (map) and Module 5 (contact) and replace with your toll-free number. Also update `tel:18772792799` in `href` attributes.

### Add More Supplier Cards

In Module 4, duplicate a `<li class="aih-media__supplier-card">` block and update:
- Logo image URL
- Supplier name
- Description text

### Change Hero Background to Video

In Module 1, uncomment the `<video>` tag and comment out the `<img>` tag:

```html
<!-- Uncomment this: -->
<video class="aih-hero__background" autoplay loop muted playsinline>
  <source src="video-hero-heavy-belt.mp4" type="video/mp4">
</video>

<!-- Comment out this: -->
<!-- <img src="heavy-belt-hero.jpg" ... /> -->
```

### Adjust Ribbon Items

In Module 1, edit the ribbon items inside `.aih-hero__ribbon-content`:

```html
<div class="aih-hero__ribbon-item">
  <span class="aih-hero__ribbon-star" aria-hidden="true">★</span>
  <span class="editable-text">Your Custom Text</span>
</div>
```

---

## 🐛 Troubleshooting

### Issue: Modules Not Displaying

**Solution:** Ensure Module 1's HEAD HTML is added first (it contains CSS variables used by all modules).

### Issue: Map Pins Not Clickable

**Solution:** Check that Module 3's FOOTER HTML contains the JavaScript. Verify no other scripts are conflicting.

### Issue: Video Not Playing

**Solution:** Ensure video URL is correct and the file is hosted on HubSpot's CDN. Check browser console for errors.

### Issue: Supplier Carousel Not Scrolling

**Solution:** This uses CSS scroll-snap. Ensure the browser supports it (all modern browsers do). On mobile, try swiping horizontally.

### Issue: Text Not Editable

**Solution:** Make sure text is wrapped in `<span class="editable-text">`. Switch to Visual editor (not source code) to edit.

### Issue: Styles Conflict with Site Global CSS

**Solution:** All classes are prefixed with `aih-` to avoid conflicts. If issues persist, increase specificity or add `!important` (last resort).

---

## 📊 Performance Optimization

- **Lazy load images** – Add `loading="lazy"` to `<img>` tags for images below the fold
- **Optimize images** – Compress JPGs/PNGs to under 200KB each
- **Video compression** – Use H.264 codec at 1080p, under 5MB for autoplay videos
- **Minify CSS** – HubSpot automatically minifies CSS on publish
- **CDN hosting** – Ensure all assets are hosted on HubSpot's CDN for fast delivery

---

## 🔗 Form Integration

The page drives traffic to a **separate HubSpot form page**. Ensure your form includes:

1. **Name** (First & Last)
2. **Company**
3. **Email**
4. **Phone**
5. **Location / Nearest Shop** (dropdown)
6. **Service Type** (checkboxes):
   - Belt Fabrication
   - Vulcanization
   - Emergency Repair
   - Consultation
7. **Message / Special Requirements** (textarea)

After form submission, redirect to a **Thank You page** with:
- Confirmation message
- Expected response time (24 hours)
- Toll-free number for urgent requests
- Link to download spec sheet

---

## 📝 Content Editing Best Practices

### Do:
✅ Edit text directly in WYSIWYG editor
✅ Replace placeholder images with actual product photos
✅ Test on mobile devices after changes
✅ Keep CTA language action-oriented ("Get Started," "Contact an Expert")
✅ Update phone numbers and email addresses as needed

### Don't:
❌ Remove CSS classes from HTML elements
❌ Delete `aria-*` attributes (breaks accessibility)
❌ Change the module structure without testing
❌ Use inline styles (use CSS variables instead)
❌ Remove `editable-text` spans (makes editing harder later)

---

## 🎓 Training Your Team

### For Marketing Editors:

1. **Text changes:** Use WYSIWYG editor (no coding needed)
2. **Image swaps:** Click image → Replace → Upload new file
3. **CTA updates:** Click button → Edit link → Update URL
4. **Color tweaks:** Ask developer to update CSS variables

### For Developers:

1. **Layout changes:** Edit source code in modules
2. **New sections:** Duplicate existing modules and customize
3. **Animations:** Adjust `@keyframes` in HEAD HTML
4. **Responsive tweaks:** Update media queries in HEAD HTML

---

## 📞 Support & Maintenance

### Monthly Checklist:
- [ ] Verify all CTA links are working
- [ ] Check form submissions are routing correctly
- [ ] Test map pins on desktop and mobile
- [ ] Ensure phone numbers are current
- [ ] Verify video plays correctly
- [ ] Check supplier logos and descriptions are up-to-date

### Quarterly Updates:
- [ ] Refresh hero image with new product photos
- [ ] Update stats or capabilities if services expand
- [ ] Review and update location list
- [ ] A/B test CTA button copy

---

## 📁 File Structure Reference

```
/
├── module-1-hero-HEAD.html           # Hero CSS
├── module-1-hero-BODY.html           # Hero HTML
├── module-1-hero-FOOTER.html         # Hero scripts (none)
├── module-2-info-HEAD.html           # Info section CSS
├── module-2-info-BODY.html           # Info section HTML
├── module-2-info-FOOTER.html         # Info scripts (none)
├── module-3-map-HEAD.html            # Map CSS
├── module-3-map-BODY.html            # Map HTML with 15 pins
├── module-3-map-FOOTER.html          # Map JavaScript
├── module-4-media-HEAD.html          # Video & carousel CSS
├── module-4-media-BODY.html          # Video & carousel HTML
├── module-4-media-FOOTER.html        # Media scripts (none)
├── module-5-contact-HEAD.html        # Contact CTA CSS
├── module-5-contact-BODY.html        # Contact CTA HTML
├── module-5-contact-FOOTER.html      # Contact scripts (none)
├── heavyweight-belts-landing-page.html  # Full page reference
└── HUBSPOT-IMPLEMENTATION-GUIDE.md   # This file
```

---

## 🎉 Launch Checklist

Before publishing the page:

- [ ] All modules added to HubSpot page
- [ ] All placeholder images replaced with actual photos
- [ ] All CTA links updated with real URLs
- [ ] Phone numbers verified (Module 3 & 5)
- [ ] Form page tested and working
- [ ] Video uploaded and playing correctly
- [ ] Map locations accurate and clickable
- [ ] Mobile view tested on real devices
- [ ] Accessibility tested (keyboard navigation, screen reader)
- [ ] Page speed tested (aim for <3s load time)
- [ ] SEO metadata added (title, description, keywords)
- [ ] Analytics tracking code installed
- [ ] SSL certificate active (HTTPS)

---

## 🚦 Go Live!

Once the checklist is complete:

1. **Preview** the page one final time
2. Click **Publish**
3. Share the URL with your team
4. Monitor form submissions and CTA clicks
5. Iterate based on user feedback

---

## 📧 Questions?

For technical support or customization requests, contact your development team or HubSpot support.

**Good luck with your launch! 🎊**
