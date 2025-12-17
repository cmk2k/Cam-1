# HubSpot Implementation Guide
## Heavyweight Conveyor Belts Landing Page with Video Background

---

## 📁 Files You'll Need

You have **3 files** to copy/paste into HubSpot:

1. **hubspot-head.html** → Goes in Header HTML
2. **hubspot-footer.html** → Goes in Footer HTML
3. **hubspot-source-code.html** → Goes in Custom HTML Module

---

## 🚀 Step-by-Step Implementation

### STEP 1: Add the Head HTML (Styles & Animations)

1. Open your HubSpot landing page
2. Click **Settings** (gear icon in top right)
3. Go to **Advanced Options** tab
4. Find **Header HTML** section
5. Copy **ALL the code** from `hubspot-head.html`
6. Paste it into the Header HTML box
7. Click **Save** or **Update**

✅ This adds all the CSS styles and animations needed for the page.

---

### STEP 2: Add the Footer HTML (JavaScript)

1. Still in **Settings** → **Advanced Options**
2. Find **Footer HTML** section
3. Copy **ALL the code** from `hubspot-footer.html`
4. Paste it into the Footer HTML box
5. Click **Save** or **Update**

✅ This adds smooth scrolling and scroll animations.

---

### STEP 3: Add the Hero Section (Main Content)

1. Go back to your page editor
2. Click **+ Add** to add a new module
3. Choose **Custom HTML** module
4. Copy **ALL the code** from `hubspot-source-code.html`
5. Paste it into the HTML editor
6. Click **Save** or **Publish**

✅ This is your video background hero section!

---

## 🎥 Adding Your Video

Before your page looks perfect, you need to upload your video and images.

### What You Need:
- [ ] Background video file (MP4 format, under 5MB)
- [ ] Optional: WebM version for better browser support
- [ ] Poster image (a still frame from your video, JPG/PNG)
- [ ] Mobile fallback image (JPG/PNG, 1920x1080px recommended)

### How to Upload to HubSpot:

1. Go to **Marketing** → **Files and Templates** → **Files**
2. Click **Upload Files**
3. Create a new folder called **"conveyor-belts"**
4. Upload all your files:
   - Your video file(s)
   - Poster image
   - Mobile fallback image
5. Click on each uploaded file
6. **Copy the File URL** from the right sidebar

### Where to Paste the URLs:

Open `hubspot-source-code.html` (or the Custom HTML module in HubSpot) and find these lines:

**Line 21** - Poster image (shows while video loads):
```html
poster="PASTE_YOUR_POSTER_IMAGE_URL_HERE"
```

**Line 23** - Main video file:
```html
<source src="PASTE_YOUR_VIDEO_URL_HERE.mp4" type="video/mp4">
```

**Line 24** - Optional WebM video:
```html
<source src="PASTE_YOUR_VIDEO_URL_HERE.webm" type="video/webm">
```

**Line 30** - Mobile fallback image:
```html
background-image: url('PASTE_YOUR_MOBILE_IMAGE_URL_HERE');
```

---

## 📝 Customizing Your Content

### Change the Text:

In `hubspot-source-code.html`, find and edit:

- **Line 67**: Eyebrow text ("We Are Applied®")
- **Line 73**: Main headline ("HEAVYWEIGHT CONVEYOR BELTS")
- **Line 78**: Subheadline description
- **Line 102**: Primary button text ("Talk to an Expert")
- **Line 116**: Secondary button text ("View Product Catalog")

### Change the Links:

- **Line 88**: Primary CTA link (currently points to contact page)
- **Line 107**: Secondary CTA link (currently points to conveyor belts catalog)

---

## ✅ Testing Checklist

After implementation, test these:

- [ ] Video plays automatically on desktop
- [ ] Video loops continuously
- [ ] Text is readable over the video
- [ ] Both CTA buttons work and link correctly
- [ ] Page looks good on mobile (video should hide, fallback image shows)
- [ ] Page looks good on tablet
- [ ] Animations play when page loads
- [ ] No console errors (press F12 and check Console tab)

---

## 📱 Mobile Behavior

**Automatic Optimizations:**
- Video automatically **hides on screens under 768px** wide
- Mobile users see a **static background image** instead (saves data)
- Text and buttons **automatically adjust** for smaller screens
- Buttons **stack vertically** on phones for easier tapping

This ensures fast loading and a good user experience on all devices!

---

## 🎨 Design Notes

**Brand Colors Used:**
- Teal: `#007680` (Primary CTA button)
- Yellow: `#FDB81E` (Accent color)
- Navy: `#1B0F3A` (Available for use)

**Fonts:**
- Uses system fonts for fast loading
- Automatically adjusts for different devices

---

## ⚠️ Troubleshooting

### Video Not Playing?
1. Make sure video is **muted** (autoplay requires muted)
2. Check that file URL is correct (no typos)
3. Try using just MP4 format first
4. File size should be under 5-10MB
5. Clear your browser cache (Ctrl+Shift+R)

### Styles Not Working?
1. Verify `hubspot-head.html` is in **Header HTML**
2. Check for any error messages in browser console (F12)
3. Make sure there are no syntax errors in the code

### Video Looks Stretched or Pixelated?
1. Use a video with 16:9 aspect ratio
2. Minimum resolution should be 1920x1080px
3. Compress video using HandBrake or similar tool

### Mobile Issues?
1. Test on actual device, not just browser resize
2. Check that mobile fallback image URL is correct
3. Verify responsive styles are loading from head HTML

---

## 🔗 Need More Help?

- **HubSpot Video Guide**: https://knowledge.hubspot.com/files/add-video-to-hubspot-pages
- **Video Compression Tool**: https://handbrake.fr/
- **Image Optimization**: https://tinypng.com/

---

## 📞 Quick Reference

**File Locations:**
- Header HTML: Settings → Advanced Options → Header HTML
- Footer HTML: Settings → Advanced Options → Footer HTML
- Source Code: Custom HTML Module in page editor

**Important URLs to Update:**
- Line 21: Poster image
- Line 23: Video MP4
- Line 24: Video WebM (optional)
- Line 30: Mobile background
- Line 88: Primary CTA link
- Line 107: Secondary CTA link

---

**Last Updated**: 2025
**Version**: 1.0
**Page**: Heavyweight Conveyor Belts Landing Page
