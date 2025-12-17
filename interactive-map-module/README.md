# 🗺️ Interactive Map Module with Hover Tooltips

This folder contains the interactive version of your USA map with hover tooltips for all your locations.

---

## 📁 Files in This Folder

1. **head.html** - CSS styles (paste in Header HTML)
2. **footer.html** - JavaScript for mobile (paste in Footer HTML)
3. **source-code.html** - The map with markers (paste in Custom HTML module)
4. **README.md** - This file (instructions)

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Add CSS Styles
1. Go to **Page Settings** → **Advanced Options** → **Header HTML**
2. Copy **ALL** of `head.html`
3. Paste at the bottom of your existing Header HTML
4. Save

### Step 2: Add JavaScript
1. Still in **Page Settings** → **Advanced Options** → **Footer HTML**
2. Copy **ALL** of `footer.html`
3. Paste at the bottom of your existing Footer HTML
4. Save

### Step 3: Add Map Module
1. In page editor, add a **Custom HTML module**
2. Copy **ALL** of `source-code.html`
3. Paste into the module
4. Save and publish

---

## 🎯 What You Get

### Desktop (Hover):
✅ Hover over any marker → See location info
✅ Blue pins = Rubber Shops
✅ Yellow stars = Distribution Centers
✅ Smooth animations

### Mobile (Tap):
✅ Tap marker → Tooltip appears
✅ Tap elsewhere → Tooltip closes
✅ Larger markers for easier tapping

---

## 📍 Your Locations

### Distribution Centers (⭐ Stars) - 6 Total:
1. Seattle, WA
2. Los Angeles, CA
3. Dallas, TX
4. Cincinnati, OH
5. Pittsburgh, PA
6. Atlanta, GA

### Rubber Shops (🔵 Blue Pins) - 14 Total:
1. Spokane, WA
2. Coeur d'Alene, ID
3. Missoula, MT
4. Billings, MT
5. San Francisco, CA
6. Salt Lake City, UT
7. Phoenix, AZ
8. Omaha, NE
9. Milwaukee, WI
10. Chicago, IL
11. Indianapolis, IN
12. Detroit, MI
13. Cleveland, OH
14. Houston, TX

---

## ✏️ To Add Full Location Details

**Currently, tooltips show:**
- Location name (City, State)
- `[Address Line 1]` ← Replace this
- `[ZIP]` ← Replace this
- `[Phone Number]` ← Replace this

### How to Update:

Open `source-code.html` and find each location section.

**Example - Updating Seattle:**

**Before:**
```html
<div class="applied-tooltip-title">Seattle, WA</div>
<div class="applied-tooltip-address">
  [Address Line 1]<br>
  Seattle, WA [ZIP]
</div>
<div class="applied-tooltip-phone">[Phone Number]</div>
```

**After:**
```html
<div class="applied-tooltip-title">Seattle, WA</div>
<div class="applied-tooltip-address">
  123 Industrial Blvd<br>
  Seattle, WA 98108
</div>
<div class="applied-tooltip-phone">(206) 555-1234</div>
```

Repeat for all 20 locations!

---

## 📐 Adjusting Marker Positions

If any markers aren't positioned perfectly, adjust the percentages:

```html
<div class="applied-map-marker star" style="top: 8%; left: 9%;">
```

- **top:** 0% = top of map, 100% = bottom
- **left:** 0% = left edge, 100% = right edge

Adjust by 1-2% at a time until it looks right.

---

## 🎨 Features

✅ Matches Applied branding
✅ Fully responsive
✅ Works on all devices
✅ Smooth hover effects
✅ Mobile tap interaction
✅ Professional design

---

## 📱 Mobile Behavior

- Video hidden on screens < 768px
- Markers get larger (easier to tap)
- Tooltips resize for small screens
- Tap to open, tap outside to close

---

## 🆘 Troubleshooting

### Markers not showing?
- Check that `head.html` was added to Header HTML
- Hard refresh browser (Ctrl+Shift+R)

### Tooltips not appearing on hover?
- Verify `head.html` is in Header HTML
- Check browser console (F12) for errors

### Mobile tap not working?
- Verify `footer.html` is in Footer HTML
- Test on actual mobile device (not just browser resize)

### Markers in wrong position?
- Adjust `top` and `left` percentages in `source-code.html`

---

## 📧 Next Steps

1. ✅ Copy the 3 files into HubSpot
2. ✅ Test hover on desktop
3. ✅ Test tap on mobile
4. ⏳ Add full addresses and phone numbers for all locations
5. ⏳ Adjust marker positions if needed

---

**Your map is ready to go! Just add the full location details when you have them.** 🚀
