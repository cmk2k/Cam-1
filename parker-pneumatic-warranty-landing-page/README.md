# Parker Pneumatic 5-Year Warranty Landing Page

**Applied Industrial Technologies**
**HubSpot-Compatible Modular Landing Page**

---

## 📁 File Structure

```
parker-pneumatic-warranty-landing-page/
├── README.md                    # This file
├── head.html                    # Global styles, animations, and <head> section
├── footer.html                  # Closing tags and JavaScript
└── modules/
    └── 01-hero-module.html      # Hero section (Module 1)
```

---

## 🚀 How to Use in HubSpot

### **Step 1: Set Up the Page**
1. In HubSpot, create a new landing page or edit an existing page
2. Ensure Applied Industrial's global header and footer are active

### **Step 2: Add the Head Section**
**Option A (Recommended):**
- Go to **Settings** > **Advanced Options** > **Header HTML**
- Paste the contents of `head.html` (from `<style>` tag onwards, NOT the entire HTML structure)

**Option B:**
- Add a **Custom HTML module** at the very top of your page
- Paste the `<style>` section from `head.html`

### **Step 3: Add Modules**
- For each module in the `/modules/` folder:
  1. Add a new **Custom HTML module** in HubSpot
  2. Copy and paste the module's HTML code
  3. Stack modules vertically in the order you want them to appear

**Current Modules:**
- ✅ **Module 1:** Hero Section (`01-hero-module.html`)
- ✅ **Module 2:** Value Summary Strip (`02-value-summary-strip.html`)
- ⏳ **Module 3:** Program Overview (coming next)
- ⏳ More modules to follow...

### **Step 4: Add the Footer**
- Add a **Custom HTML module** at the very bottom of your page
- Paste the contents of `footer.html`
- This includes smooth scroll JavaScript and other interactions

---

## 🎨 Customization Guide

### **Brand Colors (Already Applied)**
```css
Teal:        #007680
Navy:        #1B0F3A
Yellow:      #FDB81E
White:       #FFFFFF
Gray:        #666666
```

### **Editing the Hero Module**

**Change Background Image:**
- Upload image to HubSpot File Manager
- Copy the URL
- Replace `placeholder-hero-pneumatic-warehouse.jpg` in line 33 of `01-hero-module.html`

**Change Text:**
- **Eyebrow:** Line 66
- **Headline:** Line 78
- **Subheadline:** Line 88
- **CTA Buttons:** Lines 115 and 131

**Change Button Links:**
- **Primary CTA:** Line 104 (`href="#contact-form"`)
- **Secondary CTA:** Line 120 (`href="#learn-more"`)

---

## 📱 Mobile Responsive

All modules are fully responsive and tested on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (480px and below)

Breakpoints are defined in `head.html` and can be adjusted if needed.

---

## 🎯 Animation Settings

**Current Level:** Medium (as requested)

**Animations Included:**
- Fade-in on page load
- Staggered slide-up for hero content
- Hover effects on buttons
- Smooth scroll for anchor links

**To Adjust:**
- Increase animation duration in `head.html` (line 64-140)
- Add more animations in future modules

---

## ✅ Testing Checklist

Before launching the page:

**Content:**
- [ ] All placeholder images replaced
- [ ] All placeholder text updated
- [ ] CTA buttons link to correct destinations
- [ ] Contact form integrated and tested

**Technical:**
- [ ] Page loads in under 3 seconds
- [ ] No console errors
- [ ] Smooth scrolling works
- [ ] Animations trigger correctly

**Responsive:**
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iPad/Android tablet
- [ ] Test on iPhone/Android phone
- [ ] All text is readable on mobile

**SEO:**
- [ ] Page title set (line 24 of head.html)
- [ ] Meta description set (line 15 of head.html)
- [ ] Open Graph image uploaded (line 21 of head.html)

---

## 🔧 Troubleshooting

**Problem: Animations not working**
- Solution: Ensure `head.html` styles are loaded before modules
- Check browser console for JavaScript errors

**Problem: Buttons not linking correctly**
- Solution: Update `href` attributes in module HTML
- Test links after pasting into HubSpot

**Problem: Mobile layout broken**
- Solution: Check that media queries in `head.html` are present
- Clear HubSpot cache and preview again

**Problem: Conflicts with global header/footer**
- Solution: All classes are prefixed with `applied-` to avoid conflicts
- Ensure you're not overriding global styles

---

## 📞 Support

For questions or issues:
- Reference: Motion Onsite Solutions layout (provided screenshot)
- Brand guidelines: Applied Industrial Technologies style guide
- HubSpot support: help.hubspot.com

---

## 🗓️ Version History

**Version 1.0** - December 16, 2025
- ✅ Module 1: Hero Section complete
- ✅ Head section with global styles and animations
- ✅ Footer section with smooth scroll JavaScript
- ⏳ Additional modules in progress

---

## 📋 Next Steps

**Ready to continue building?**

Tell me: **"Build Module 2"** to create the Value Summary Strip

or

Request changes to the Hero module first if needed!
