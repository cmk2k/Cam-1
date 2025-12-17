# 🗺️ Interactive Map Module - Implementation Guide

An interactive USA map with hover tooltips for your rubber shops and distribution centers.

---

## 📁 Files You Need

You have **3 files** to paste into HubSpot:

1. **map-module-head.html** → Header HTML (CSS styles)
2. **map-module-footer.html** → Footer HTML (JavaScript)
3. **map-module-source-code.html** → Custom HTML Module (the map itself)

---

## 🚀 Quick Start (3 Steps)

### STEP 1: Add the CSS Styles

1. Go to **Page Settings** → **Advanced Options** → **Header HTML**
2. Copy **ALL** of `map-module-head.html`
3. Paste it at the **bottom** of your existing Header HTML (below the video background styles)
4. Save

### STEP 2: Add the JavaScript

1. Still in **Page Settings** → **Advanced Options** → **Footer HTML**
2. Copy **ALL** of `map-module-footer.html`
3. Paste it at the **bottom** of your existing Footer HTML
4. Save

### STEP 3: Add the Map Module

1. In HubSpot page editor, add a **Custom HTML module** where you want the map
2. Copy **ALL** of `map-module-source-code.html`
3. Paste it into the module
4. Save

---

## 📸 Upload Your Map Image

You showed me a map image. You need to upload it to HubSpot:

1. Go to **Marketing** → **Files and Templates** → **Files**
2. Upload your USA map image
3. Click the uploaded file and copy the **File URL**
4. In `map-module-source-code.html`, find line 24:
   ```html
   <img src="PASTE_YOUR_MAP_URL_HERE"
   ```
5. Replace with your actual map URL

---

## 📍 How to Add/Edit Locations

You'll need to send me your location data, but here's how to customize:

### For Rubber Shops (Blue Pins 📍):

Copy and paste this template:

```html
<div class="applied-map-marker pin" style="top: XX%; left: XX%;">
  <div class="applied-map-tooltip">
    <div class="applied-tooltip-type rubber-shop">Rubber Shop</div>
    <div class="applied-tooltip-title">City, State</div>
    <div class="applied-tooltip-address">
      123 Street Address<br>
      City, ST 12345
    </div>
    <div class="applied-tooltip-phone">(123) 456-7890</div>
  </div>
</div>
```

### For Distribution Centers (Yellow Stars ⭐):

Copy and paste this template:

```html
<div class="applied-map-marker star" style="top: XX%; left: XX%;">
  <span>⭐</span>
  <div class="applied-map-tooltip">
    <div class="applied-tooltip-type distribution">Distribution Center</div>
    <div class="applied-tooltip-title">City, State</div>
    <div class="applied-tooltip-address">
      123 Street Address<br>
      City, ST 12345
    </div>
    <div class="applied-tooltip-phone">(123) 456-7890</div>
  </div>
</div>
```

---

## 📐 How to Position Markers

The `top` and `left` percentages control position:

- **top:** `0%` = top of map, `100%` = bottom of map
- **left:** `0%` = left edge, `100%` = right edge

### Example Positions (Approximate):

| City | top | left |
|------|-----|------|
| Seattle, WA | 8% | 10% |
| Portland, OR | 14% | 8% |
| Los Angeles, CA | 58% | 6% |
| San Diego, CA | 66% | 8% |
| Phoenix, AZ | 62% | 20% |
| Denver, CO | 38% | 32% |
| Dallas, TX | 68% | 48% |
| Houston, TX | 74% | 52% |
| Chicago, IL | 36% | 64% |
| Minneapolis, MN | 22% | 54% |
| Detroit, MI | 32% | 72% |
| Atlanta, GA | 62% | 75% |
| Indianapolis, IN | 42% | 66% |
| New York, NY | 28% | 85% |

💡 **Tip:** Use trial and error! Adjust by 1-2% at a time until it looks perfect.

---

## 🎯 Features

### Desktop (Hover):
✅ Hover over any marker to see location details
✅ Smooth animations
✅ Blue pins for rubber shops
✅ Yellow stars for distribution centers

### Mobile (Tap):
✅ Tap a marker to show tooltip
✅ Tap elsewhere to close
✅ Larger markers for easy tapping
✅ Tooltips adjust for small screens

### Included:
✅ Legend at the bottom
✅ Section title and description (customizable)
✅ Fully responsive
✅ Matches Applied branding
✅ Optional analytics tracking

---

## 🎨 Customization

### Change Section Title:
In `map-module-source-code.html`, line 17:
```html
<h2>Nationwide Service Network</h2>
```

### Change Description:
Line 18:
```html
<p>Your custom description here...</p>
```

### Change Colors:
Already set to match your branding:
- Rubber Shop Pins: `#007680` (Applied Teal)
- Distribution Stars: `#FDB81E` (Applied Yellow)
- Navy: `#1B0F3A`

To change colors, edit `map-module-head.html` CSS.

---

## 📱 Mobile Responsive

**Automatic Adjustments:**
- Markers become larger on mobile (easier to tap)
- Tooltips resize for small screens
- Map scales to fit any device
- Legend adjusts for mobile layout

**No extra work needed!** It just works.

---

## 📊 Optional: Analytics Tracking

The footer JavaScript includes optional tracking to see which locations users click.

### To Enable:
1. Open `map-module-footer.html`
2. Find line 73-83
3. Uncomment the tracking code
4. Choose your platform:
   - Google Analytics
   - HubSpot Analytics
   - Custom tracking

### What Gets Tracked:
- Location name clicked
- Location type (Rubber Shop or Distribution Center)
- Helps you understand user interest

---

## ✅ Testing Checklist

After implementation:

- [ ] Map image shows correctly
- [ ] All markers are positioned correctly
- [ ] Hover shows tooltips on desktop
- [ ] Tap shows tooltips on mobile
- [ ] Tooltips have correct information
- [ ] Legend appears at bottom
- [ ] Section title/description look good
- [ ] Responsive on tablet
- [ ] Responsive on mobile phone
- [ ] No console errors (F12 → Console)

---

## 🆘 Troubleshooting

### Map image not showing?
- Verify image URL is correct
- Check file is uploaded to HubSpot
- Make sure it's a public URL

### Markers not appearing?
- Check that head HTML was added
- Hard refresh browser (Ctrl+Shift+R)
- Verify page is published

### Tooltips not showing on hover?
- Check that head HTML includes tooltip CSS
- Try hard refresh
- Test in different browser

### Markers in wrong position?
- Adjust `top` and `left` percentages
- Use increments of 1-2%
- Test after each adjustment

### Mobile tap not working?
- Check that footer HTML was added
- Make sure JavaScript is enabled
- Test on actual mobile device (not just browser resize)

---

## 📝 What You Need to Send Me

To customize with your actual locations, please provide:

**For each location:**
1. City, State
2. Street address
3. City, State, ZIP
4. Phone number
5. Type (Rubber Shop or Distribution Center)

**Example format:**
```
Seattle, WA - Rubber Shop
789 Industrial Ave
Seattle, WA 98108
(206) 555-1000

Portland, OR - Distribution Center
1234 Industrial Blvd
Portland, OR 97220
(503) 555-0100
```

I'll add all your locations with approximate positions based on your map!

---

## 🎯 Summary

**What You Get:**
- Interactive USA map with tooltips
- Matches your Applied branding
- Fully responsive (desktop, tablet, mobile)
- Easy to add/edit locations
- Optional analytics tracking
- Professional hover effects

**Files to Use:**
1. `map-module-head.html` → Header HTML
2. `map-module-footer.html` → Footer HTML
3. `map-module-source-code.html` → Custom HTML Module

---

**Ready to customize with your locations? Just send me the list!** 🚀
