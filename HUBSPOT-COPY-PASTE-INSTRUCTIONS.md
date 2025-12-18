# HubSpot Landing Page - Complete Copy-Paste Instructions

## 📋 Overview
You need to paste 4 files into HubSpot in this exact order:

1. **HEAD HTML** → Page Settings > Advanced Options > Header HTML
2. **FOOTER HTML** → Page Settings > Advanced Options > Footer HTML
3. **MAP SOURCE CODE** → Custom HTML Module on page
4. **VIDEO CAROUSEL SOURCE CODE** → Custom HTML Module on page

---

## 🎯 Step 1: HEAD HTML (All Styles)

**Location:** Page Settings > Advanced Options > **Header HTML**

**File to copy:** `interactive-map-module/head.html`

### What's included:
- ✅ Global page styles and animations
- ✅ Video background hero styles
- ✅ Interactive map styles (pins, tooltips, animations)
- ✅ Location dropdowns styles
- ✅ Video carousel styles
- ✅ All responsive/mobile styles

### Instructions:
1. Open your HubSpot landing page
2. Go to **Settings** (gear icon)
3. Click **Advanced Options**
4. Find **Header HTML** section
5. Copy **ENTIRE CONTENTS** of `interactive-map-module/head.html`
6. Paste into Header HTML box
7. Click **Save**

---

## 🎯 Step 2: FOOTER HTML (All JavaScript)

**Location:** Page Settings > Advanced Options > **Footer HTML**

**File to copy:** `interactive-map-module/footer.html`

### What's included:
- ✅ Smooth scroll functionality
- ✅ Map marker interactions (mobile touch support)
- ✅ Location dropdown toggle functionality
- ✅ Video carousel navigation and auto-scroll

### Instructions:
1. In the same **Advanced Options** page
2. Find **Footer HTML** section (below Header HTML)
3. Copy **ENTIRE CONTENTS** of `interactive-map-module/footer.html`
4. Paste into Footer HTML box
5. Click **Save**

---

## 🎯 Step 3: MAP MODULE (Interactive Map with Dropdowns)

**Location:** Custom HTML Module on your landing page

**File to copy:** `interactive-map-module/source-code.html`

### What's included:
- ✅ Interactive USA map with clean background image
- ✅ 14 Rubber Shop markers (dark blue pins with glow animation)
- ✅ 6 Distribution Center markers (yellow stars with glow animation)
- ✅ Hover tooltips showing location info
- ✅ Side-by-side dropdown panels:
  - Rubber Shops dropdown (opens by default)
  - Distribution Centers dropdown (collapsed by default)
- ✅ Responsive grid layout (stacks on mobile)
- ✅ Map legend at bottom

### Instructions:
1. On your landing page, add a **Custom HTML** module
2. Click **Edit** on the module
3. Copy **ENTIRE CONTENTS** of `interactive-map-module/source-code.html`
4. Paste into the HTML editor
5. Click **Save**

### Map Marker Positions (Updated):
All markers positioned based on geographic coordinates:
- **San Francisco**: 46% top, 5% left
- **Salt Lake City**: 38% top, 21% left
- **Phoenix**: 62% top, 20% left
- **Houston**: 73% top, 55% left (near Gulf Coast)
- **Omaha**: 42% top, 51% left
- All other markers accurately positioned

### To Update Contact Info:
Find each location in the code and replace:
- `[Address Line 1]` → Street address
- `[ZIP]` → Zip code
- `[Phone Number]` → Phone number

**Example:**
```html
<!-- BEFORE -->
<div class="applied-location-address">
  [Address Line 1]<br>
  Spokane, WA [ZIP]
</div>
<div class="applied-location-phone">[Phone Number]</div>

<!-- AFTER -->
<div class="applied-location-address">
  123 Industrial Blvd<br>
  Spokane, WA 99201
</div>
<div class="applied-location-phone">(509) 555-1234</div>
```

**NOTE:** Each location appears in TWO places:
1. In the map tooltip (hover popup)
2. In the dropdown sidebar card

Update both instances for each city!

---

## 🎯 Step 4: VIDEO CAROUSEL MODULE

**Location:** Custom HTML Module on your landing page

**File to copy:** `video-carousel-source-code.html`

### What's included:
- ✅ 5 YouTube videos with updated URLs:
  1. Capabilities & Value-Added (opcOGwCZWcQ)
  2. Aggregate Industry (95S3UVRtXew)
  3. Food & Beverage (TZkM1U7QZ5g)
  4. Pulp & Paper (TCdTmups0hE)
  5. Manufacturing Industry (oUrzE9ZLdls)
- ✅ Horizontal scrolling carousel
- ✅ Navigation arrows (prev/next buttons)
- ✅ Auto-scroll functionality (every 5 seconds)
- ✅ Pause on hover
- ✅ Fully responsive

### Instructions:
1. On your landing page, add another **Custom HTML** module (below the map)
2. Click **Edit** on the module
3. Copy **ENTIRE CONTENTS** of `video-carousel-source-code.html`
4. Paste into the HTML editor
5. Click **Save**

---

## ✅ Final Checklist

Before publishing, verify:

- [ ] Header HTML pasted (all styles loaded)
- [ ] Footer HTML pasted (all scripts loaded)
- [ ] Map module displays with side-by-side dropdowns
- [ ] Rubber Shops dropdown opens by default
- [ ] Distribution Centers dropdown is collapsed
- [ ] Click dropdown headers to expand/collapse
- [ ] Map markers show tooltips on hover
- [ ] Video carousel shows all 5 videos
- [ ] Video carousel arrows work
- [ ] Videos play when clicked

---

## 🐛 Troubleshooting

### Map dropdowns not showing
- Check that you copied the **entire** source-code.html file
- Verify Footer HTML is pasted (contains dropdown toggle JavaScript)

### Dropdowns not toggling
- Verify Footer HTML is in place
- Check browser console for JavaScript errors

### Videos not loading
- HubSpot may take a moment to process YouTube embeds
- Try refreshing the preview

### Markers positioned wrong
- Map positions are percentages based on image dimensions
- If your map image URL is different, positions may need adjustment
- Current positions optimized for: `MAP CLEANED  (1).png`

### Styling looks off
- Ensure Head HTML is fully pasted
- Clear HubSpot cache (Settings > Clear cache)
- Check that all CSS classes have "applied-" prefix to avoid conflicts

---

## 📂 File Locations

All files are in the `claude/add-header-video-background-WIq4Q` branch:

```
/Cam-1/
├── interactive-map-module/
│   ├── head.html                    ← STEP 1: Copy this to Header HTML
│   ├── footer.html                  ← STEP 2: Copy this to Footer HTML
│   ├── source-code.html            ← STEP 3: Copy this to Custom HTML module
│   └── README.md                    (Implementation guide)
├── video-carousel-source-code.html  ← STEP 4: Copy this to Custom HTML module
└── HUBSPOT-COPY-PASTE-INSTRUCTIONS.md  ← You are here
```

---

## 🎨 Design Features

### Interactive Map
- Dark blue glowing pins for Rubber Shops
- Yellow glowing stars for Distribution Centers
- Smooth hover animations
- Clean white tooltips with location details
- Professional dropdown panels with icons
- Responsive grid (side-by-side on desktop, stacked on mobile)

### Video Carousel
- Auto-scrolling showcase
- Manual navigation controls
- Pause on hover/interaction
- Smooth scroll behavior
- Category badges for each video
- Clean card design with hover effects

---

## 📞 Need Help?

If something isn't working:
1. Check that all 4 files are pasted
2. Clear HubSpot cache
3. Preview in incognito mode
4. Check browser console for errors

---

**Last Updated:** 2025-12-18
**Branch:** claude/add-header-video-background-WIq4Q
