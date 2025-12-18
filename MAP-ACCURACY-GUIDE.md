# 🎯 Map Marker Positioning Accuracy Guide

## Problem
Your map markers need to be precisely positioned to match their actual geographic locations on the USA map image.

---

## ✅ BEST METHOD: Browser DevTools with Visual Grid

### Step 1: Add Temporary Grid Overlay

Add this to your HEAD HTML temporarily (remove after positioning):

```css
/* TEMPORARY - Remove after positioning markers */
.applied-map-image {
  background:
    repeating-linear-gradient(0deg, transparent, transparent 9%, rgba(255,0,0,0.1) 9%, rgba(255,0,0,0.1) 10%),
    repeating-linear-gradient(90deg, transparent, transparent 9%, rgba(255,0,0,0.1) 9%, rgba(255,0,0,0.1) 10%);
  background-size: 10% 10%;
}
```

This creates a 10x10 grid overlay on your map (0%, 10%, 20%, ... 100%).

### Step 2: Use Browser Inspect Element

1. Open your HubSpot preview page
2. Right-click on a map marker → **Inspect Element**
3. In DevTools, you'll see the marker's HTML:
   ```html
   <div class="applied-map-marker pin" style="top: 46%; left: 5%;">
   ```
4. **Click on the `style` attribute** in DevTools
5. **Edit the percentages live** - the marker moves in real-time!
6. Use the grid to align perfectly with the city's location
7. Write down the final percentages

### Step 3: Visual Reference Points

Use these state borders and geographic features as guides:

**West Coast:**
- **San Francisco**: Bay Area, west coast, ~38% latitude → `top: 46%`
- **Los Angeles**: Southern CA coast → `top: 56%`
- **Seattle**: Top NW corner, Puget Sound → `top: 10%`

**Mountain West:**
- **Salt Lake City**: Center of Utah, between NV and CO → `top: 38%; left: 21%`
- **Phoenix**: Southern AZ, near Mexico border → `top: 62%; left: 20%`
- **Billings**: Southern MT, near WY border → `top: 15%; left: 23%`

**Midwest:**
- **Omaha**: Eastern NE, near IA border on Missouri River → `top: 42%; left: 51%`
- **Chicago**: Lake Michigan shore, NE Illinois → `top: 40%; left: 65%`
- **Milwaukee**: Lake Michigan shore, just north of Chicago → `top: 34%; left: 64%`

**Great Lakes:**
- **Detroit**: East side of Michigan, on Detroit River → `top: 38%; left: 71%`
- **Cleveland**: Lake Erie shore, northern Ohio → `top: 40%; left: 74%`

**South:**
- **Houston**: SE Texas, near Gulf Coast → `top: 73%; left: 55%`
- **Dallas**: North-central Texas → `top: 58%; left: 48%`
- **Atlanta**: Northern Georgia → `top: 58%; left: 73%`

**East:**
- **Pittsburgh**: Western PA, where 3 rivers meet → `top: 40%; left: 76%`
- **Cincinnati**: Southern Ohio, on Ohio River → `top: 44%; left: 72%`

---

## 🔧 ALTERNATE METHOD: Image Coordinates Calculator

If you want mathematical precision:

### Option A: Use Image Dimensions
1. Right-click your map image → **Open image in new tab**
2. Note the image dimensions (e.g., 1200px × 800px)
3. Use this formula:
   ```
   top% = (pixel_from_top / image_height) × 100
   left% = (pixel_from_left / image_width) × 100
   ```

### Option B: Use Real Lat/Long
Your markers already have lat/long in comments. Use this formula (approximate):

```javascript
// USA bounding box (approximate)
const minLat = 24.5;  // Southern tip
const maxLat = 49.4;  // Northern border
const minLon = -125;  // West coast
const maxLon = -66;   // East coast

function latLonToPercent(lat, lon) {
  const top = 100 - ((lat - minLat) / (maxLat - minLat) * 100);
  const left = ((lon - minLon) / (maxLon - minLon) * 100);
  return { top, left };
}

// Example: San Francisco (37.8°N, 122.4°W)
const sf = latLonToPercent(37.8, -122.4);
console.log(sf); // { top: ~47%, left: ~4% }
```

**⚠️ NOTE:** This gives you a starting point, but USA maps aren't perfect rectangles due to:
- Mercator projection distortion
- Alaska/Hawaii cropping
- Map padding/margins

You'll still need to fine-tune visually.

---

## 📐 CURRENT MARKER POSITIONS

Here are your current positions (updated):

| Location | Current Position | Accuracy Status |
|----------|-----------------|-----------------|
| **San Francisco, CA** | `top: 46%; left: 5%` | ✅ Updated |
| **Salt Lake City, UT** | `top: 38%; left: 21%` | ✅ Updated |
| **Phoenix, AZ** | `top: 62%; left: 20%` | ✅ Updated |
| **Houston, TX** | `top: 73%; left: 55%` | ✅ Updated |
| **Omaha, NE** | `top: 42%; left: 51%` | ✅ Updated |
| **Seattle, WA** | `top: 10%; left: 8%` | ⚠️ Check |
| **Los Angeles, CA** | `top: 56%; left: 7%` | ⚠️ Check |
| **Dallas, TX** | `top: 58%; left: 48%` | ⚠️ Check |
| **Cincinnati, OH** | `top: 44%; left: 72%` | ⚠️ Check |
| **Pittsburgh, PA** | `top: 40%; left: 76%` | ✅ Updated |
| **Atlanta, GA** | `top: 58%; left: 73%` | ⚠️ Check |
| **Spokane, WA** | `top: 10%; left: 13%` | ⚠️ Check |
| **Coeur d'Alene, ID** | `top: 10%; left: 14%` | ⚠️ Check |
| **Missoula, MT** | `top: 12%; left: 16%` | ⚠️ Check |
| **Billings, MT** | `top: 15%; left: 23%` | ⚠️ Check |
| **Milwaukee, WI** | `top: 34%; left: 64%` | ⚠️ Check |
| **Chicago, IL** | `top: 40%; left: 65%` | ⚠️ Check |
| **Indianapolis, IN** | `top: 44%; left: 68%` | ⚠️ Check |
| **Detroit, MI** | `top: 38%; left: 71%` | ⚠️ Check |
| **Cleveland, OH** | `top: 40%; left: 74%` | ⚠️ Check |

---

## 🎨 STEP-BY-STEP WORKFLOW

### 1. Preview in HubSpot
Paste your code and open the preview page.

### 2. Open DevTools
Press **F12** or **Ctrl+Shift+I** (Windows) / **Cmd+Option+I** (Mac)

### 3. Inspect Each Marker
For each city:
1. Right-click the marker → Inspect
2. Find the `style="top: X%; left: Y%"` in the HTML
3. Click to edit the percentages
4. Watch the marker move in real-time
5. Align with the city's actual location using:
   - State borders
   - Coastlines
   - Rivers
   - The grid overlay (if added)

### 4. Record Positions
Keep a notepad with final positions:
```
San Francisco: top: 46%; left: 5%
Salt Lake City: top: 38%; left: 21%
Phoenix: top: 62%; left: 20%
...
```

### 5. Update Source Code
Open `interactive-map-module/source-code.html` and update each marker's `style` attribute with your final positions.

### 6. Test Again
Preview, verify all positions look correct.

---

## ⚡ QUICK FIXES FOR COMMON ISSUES

### Marker too far north
**Increase `top%`** (e.g., `top: 46%` → `top: 50%`)

### Marker too far south
**Decrease `top%`** (e.g., `top: 46%` → `top: 42%`)

### Marker too far east
**Increase `left%`** (e.g., `left: 5%` → `left: 8%`)

### Marker too far west
**Decrease `left%`** (e.g., `left: 5%` → `left: 2%`)

### Small adjustments
Move by **1-2%** at a time for precision.

### Large adjustments
Move by **5-10%** to quickly reposition.

---

## 🔍 VISUAL CHECKLIST

After positioning, verify:
- [ ] West coast cities (SF, LA, Seattle) are on the Pacific coast
- [ ] Texas cities (Houston, Dallas) are in correct regions (SE vs N)
- [ ] Great Lakes cities (Chicago, Milwaukee, Detroit, Cleveland) are on lake shores
- [ ] Mountain states (SLC, Phoenix) are in correct position relative to each other
- [ ] No markers overlap (unless same city)
- [ ] Markers don't sit on state borders (unless that's accurate)
- [ ] Gulf Coast cities (Houston) are near the water
- [ ] East coast cities aren't too far inland

---

## 💡 PRO TIPS

1. **Start with obvious landmarks**: Corners (Seattle), coasts (SF, LA), and distinctive shapes (Texas, Florida)
2. **Use relative positioning**: "Chicago is directly east of Omaha" helps position both
3. **Check against Google Maps**: Open Google Maps with all your cities to see their relative positions
4. **Zoom out**: Sometimes stepping back helps you see if the overall pattern looks right
5. **Test on different screens**: What looks good on your monitor might be off on mobile

---

## 🚀 FASTEST METHOD (RECOMMENDED)

1. Add the grid overlay CSS (copy from Step 1 above)
2. Preview your page in HubSpot
3. Open DevTools (F12)
4. Inspect first marker
5. Edit `top` and `left` values live while watching the marker move
6. Use the grid + state borders as guides
7. Record final values
8. Repeat for all 20 markers
9. Update source code with final values
10. Remove grid overlay CSS
11. Done!

**Estimated time:** 15-20 minutes for all 20 markers

---

## 📸 VISUAL COMPARISON

After positioning, take a screenshot and compare to:
- Google Maps (same zoom level)
- Your reference image
- Real USA map

If something looks "off" to your eye, it probably is. Trust your instinct and adjust.

---

**Need help?** Share a screenshot of the current positions and I can suggest specific adjustments!
