# 🐛 Video Background Troubleshooting Guide

Your video URL: `https://6847819.fs1.hubspotusercontent-na1.net/hubfs/6847819/Heavy%20belts%20banner%20(2).mp4`

---

## ⚡ QUICK FIX CHECKLIST (Try these first!)

### 1. ✅ Did you paste the HEAD HTML?
**This is the #1 reason videos don't work!**

- [ ] Go to **Settings** (gear icon) → **Advanced Options**
- [ ] Find **Header HTML** section
- [ ] Paste **ALL** of `hubspot-head.html` there
- [ ] Click **Save** or **Update**

**Without the head HTML, the video CSS won't load and it will be invisible!**

---

### 2. 🔄 Hard Refresh Your Browser
Clear the cache:

- **Windows:** Press `Ctrl + Shift + R`
- **Mac:** Press `Cmd + Shift + R`

---

### 3. 🌐 Test the Video URL Directly
Click this link to see if your video loads:
[Test Video Link](https://6847819.fs1.hubspotusercontent-na1.net/hubfs/6847819/Heavy%20belts%20banner%20(2).mp4)

- ✅ **Video plays?** → Video file is good, problem is in the code
- ❌ **404 error?** → Video file isn't accessible or URL is wrong
- ⏳ **Loading forever?** → File might be too large

---

### 4. 🔍 Check Browser Console for Errors

1. Press **F12** on your keyboard
2. Click **Console** tab
3. Look for red error messages
4. Common errors mean:
   - `Failed to load resource` = Wrong URL
   - `net::ERR_BLOCKED_BY_CLIENT` = Ad blocker blocking it
   - `autoplay policy` = Browser blocking autoplay (rare)

---

### 5. 📱 Are You on Desktop?
**The video is hidden on mobile devices!**

- Video only shows on screens **wider than 768px**
- On mobile, you see a solid dark background instead
- Test on a desktop computer or laptop
- If on phone/tablet, that's why you don't see it!

---

### 6. 📄 Is Your Page Published?
- Video might not work in **HubSpot preview mode**
- Click **Publish** (not just Save)
- View the actual live page URL
- HubSpot's editor can block autoplay

---

### 7. 🧪 Test in Incognito Mode
Opens a clean browser without cache or extensions:

- **Chrome:** `Ctrl + Shift + N` (Windows) or `Cmd + Shift + N` (Mac)
- **Firefox:** `Ctrl + Shift + P`
- **Edge:** `Ctrl + Shift + N`

---

## 🔧 DEEPER TROUBLESHOOTING

### Issue: Black Screen (No Video)

**Possible causes:**
1. ❌ Head HTML not pasted → Video exists but is invisible
2. ❌ Wrong z-index → Video is behind the overlay
3. ❌ Video file corrupted or wrong format

**Fix:**
- Make sure `hubspot-head.html` is in Header HTML
- Check that video URL works when pasted in browser
- Try removing the dark overlay temporarily (line 40 in source code)

---

### Issue: Video Doesn't Autoplay

**Possible causes:**
1. ❌ Browser autoplay policy (unlikely since video is muted)
2. ❌ Missing `muted` attribute
3. ❌ JavaScript disabled

**Fix:**
- Verify `muted` is on line 18 of source code
- Check if JavaScript is enabled in browser settings
- Try a different browser (Chrome works best)

---

### Issue: Video Flickers or Stutters

**Possible causes:**
1. ❌ File size too large (loading slowly)
2. ❌ Poor internet connection
3. ❌ Too high resolution

**Fix:**
- Compress video to under 5MB
- Use 1080p max resolution
- Use H.264 codec for best compatibility
- Tools: HandBrake, CloudConvert, or Adobe Media Encoder

---

### Issue: Video Shows on Mobile (Should Hide)

**Fix:**
Check that this CSS is in `hubspot-head.html`:
```css
@media (max-width: 768px) {
  .applied-hero-video-bg {
    display: none;
  }
}
```

---

### Issue: Animations Not Working

**This means head HTML is missing!**

**Fix:**
1. Go to **Page Settings** → **Advanced Options** → **Header HTML**
2. Paste the entire `hubspot-head.html` file
3. Save and refresh

---

### Issue: Text Not Readable Over Video

**Fix:**
Adjust the overlay darkness on **line 40** of source code:

**Darker overlay:**
```css
background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%);
```

**Lighter overlay:**
```css
background: linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
```

---

## 🎯 WHAT IT SHOULD LOOK LIKE WHEN WORKING

✅ **Desktop (>768px width):**
- Video plays automatically on page load
- Video loops continuously
- No sound (muted)
- Text fades up with animation
- Dark gradient over video (text readable)
- Buttons have hover effects

✅ **Mobile (<768px width):**
- Solid dark background (#1a1a1a)
- No video (saves bandwidth)
- Text still readable and animated
- Buttons stack vertically

---

## 📋 FINAL CHECKLIST

Before asking for help, verify:

- [ ] `hubspot-head.html` is in **Header HTML** section
- [ ] `hubspot-footer.html` is in **Footer HTML** section
- [ ] `hubspot-source-code-UPDATED.html` is in a **Custom HTML module**
- [ ] Page is **published** (not just saved)
- [ ] Testing on **desktop** (not mobile)
- [ ] Video URL works when clicked directly
- [ ] Browser cache cleared (hard refresh)
- [ ] No ad blockers running
- [ ] Tested in **Incognito/Private mode**
- [ ] Checked **browser console** for errors (F12)

---

## 🆘 Still Not Working?

### Share This Info:
1. What do you see? (black screen, nothing, error message?)
2. What browser? (Chrome, Firefox, Safari, Edge?)
3. Desktop or mobile?
4. Any error messages in console? (F12 → Console tab)
5. Does the video URL work when you click it directly?
6. Did you paste the head HTML? (Settings → Header HTML)
7. Is the page published or in draft mode?

---

## 💡 Quick Test

Paste this in a **new Custom HTML module** to test if video works at all:

```html
<video width="100%" autoplay loop muted playsinline>
  <source src="https://6847819.fs1.hubspotusercontent-na1.net/hubfs/6847819/Heavy%20belts%20banner%20(2).mp4" type="video/mp4">
</video>
```

- ✅ **Video plays?** → Your video works, problem is in the styling
- ❌ **Nothing shows?** → Video file issue or browser blocking it

---

**Last Updated:** 2025
**Your Video:** Heavy belts banner (2).mp4
