# Aggregate Industry Form - Changes Summary

## Overview
This document outlines all changes made to convert the Rust-Oleum floor coating form to an Aggregate Industry form.

---

## Files Created

1. **aggregate-form-section.html** - Main HTML structure
2. **aggregate-form-styles.css** - Complete CSS styling
3. **aggregate-form-footer.html** - Footer scripts for HubSpot form
4. **AGGREGATE-FORM-CHANGES.md** - This documentation file

---

## Key Changes Made

### 1. All Rust-Oleum References Removed ✓

**Changed from:**
- "Rust-Oleum floor coating solution"
- "Trusted Rust-Oleum products"
- Link to "/rust-oleum-floor-painting"
- CSS class `.rustoleum-logo`

**Changed to:**
- "aggregate operations with industry-leading equipment"
- "Trusted aggregate industry solutions"
- Link to "/aggregate-solutions"
- CSS class `.aggregate-logo`

---

### 2. Content Tailored for Aggregate Industry ✓

**Title:**
- Changed from: "Get Your **Free Quote** Today"
- To: "Get Your **Free Consultation** Today"

**Description:**
- Changed from: "Transform your industrial facility during your holiday shutdown. Our experts will help you choose the perfect Rust-Oleum floor coating solution for your needs."
- To: "Optimize your aggregate operations with industry-leading equipment and solutions. Our experts will help you find the perfect products and services for your specific needs."

**Benefits List Updated:**
- ✓ Fast Response: Applied® **aggregate specialists** reach out quickly (was "Applied® and Rust-Oleum reps")
- ✓ Expert Guidance: **Customized equipment and product** recommendations (was "Personalized product")
- ✓ **Safety Compliant**: Solutions that meet **industry safety standards** (was "OSHA Compliant")
- ✓ Nationwide Support: 430+ locations across North America (unchanged)
- ✓ Industrial Grade Reliability: Trusted **aggregate industry solutions** (was "Trusted Rust-Oleum products")

**Badge:**
- Changed from: "🎯 Limited Time Offer"
- To: "🎯 Industry Leading Solutions"

---

### 3. Aggregate Logo Box Expanded ✓

**CSS Changes for Square Logo:**

```css
/* Original sizing (rectangular logo) */
.rustoleum-logo {
    min-height: 80px;
    padding: 1.25rem 2rem;
}
.rustoleum-logo img {
    max-width: 180px;
    max-height: 60px;
}

/* New sizing (square logo) */
.aggregate-logo {
    min-height: 140px;
    min-width: 220px;
    padding: 1.5rem 2.5rem;
}
.aggregate-logo img {
    max-width: 180px;
    max-height: 180px;
    width: auto;
}
```

**Key improvements:**
- ✓ Increased min-height from 80px to 140px
- ✓ Added min-width: 220px for better square logo containment
- ✓ Increased max-height from 60px to 180px
- ✓ Added width: auto to maintain aspect ratio
- ✓ Increased padding for better visual balance

---

## What You Need to Do Next

### 1. Add Your Aggregate Logo
In the HTML file (`aggregate-form-section.html`), find this section:

```html
<div class="aggregate-logo">
<!-- ADD YOUR AGGREGATE INDUSTRY LOGO IMAGE URL HERE -->
<img src="YOUR-AGGREGATE-LOGO-URL-HERE.png"
     width="180" height="180"
     loading="lazy"
     alt="Aggregate Industry Solutions"
     style="height: auto; max-width: 100%; width: 180px;">
</div>
```

**Replace:** `YOUR-AGGREGATE-LOGO-URL-HERE.png` with your actual aggregate logo URL.

### 2. Add Your Specific Aggregate Content
You mentioned you have aggregate info to add. Here are the sections you can customize:

**Title & Description** (Lines 13-15):
```html
<h2 class="form-content-title">
    <span>Get Your <span class="highlight">Free Consultation</span> Today</span>
</h2>
<p class="form-content-description">
    [YOUR CUSTOM DESCRIPTION HERE]
</p>
```

**Benefits List** (Lines 16-22):
```html
<ul class="form-benefits-list">
    <li><strong>Fast Response:</strong> [YOUR BENEFIT]</li>
    <li><strong>Expert Guidance:</strong> [YOUR BENEFIT]</li>
    <li><strong>Safety Compliant:</strong> [YOUR BENEFIT]</li>
    <li><strong>Nationwide Support:</strong> [YOUR BENEFIT]</li>
    <li><strong>Industrial Grade Reliability:</strong> [YOUR BENEFIT]</li>
</ul>
```

**CTA Button Link** (Line 23):
```html
<a href="/aggregate-solutions" class="form-cta-button">
```
Update the `href` to your desired landing page.

### 3. Update Background Image (Optional)
If you want to change the industrial background image, update this in the CSS:

```css
.two-column-form-section {
    background: linear-gradient(135deg, rgba(20, 40, 60, 0.75) 0%, rgba(30, 50, 70, 0.70) 100%),
                url('YOUR-NEW-BACKGROUND-IMAGE-URL.jpg');
}
```

---

## Responsive Behavior

The logo box will automatically adjust for different screen sizes:

- **Desktop (>968px):** Full square logo display (180x180px max)
- **Tablet (768px-968px):** Centered layout, logo scales proportionally
- **Mobile (<480px):** Logo scales down to 120x120px max

---

## Installation Instructions

### In HubSpot Page:

1. **Add CSS to HEAD:**
   - Copy contents of `aggregate-form-styles.css`
   - Paste into `<style>` tag in page HEAD section

2. **Add HTML to BODY:**
   - Copy contents of `aggregate-form-section.html`
   - Paste into desired location in page BODY

3. **Add Scripts to FOOTER:**
   - Copy contents of `aggregate-form-footer.html`
   - Paste before closing `</body>` tag

---

## Testing Checklist

- [ ] Aggregate logo displays correctly (square format)
- [ ] Applied logo displays correctly
- [ ] All Rust-Oleum mentions are removed
- [ ] Content reads naturally for aggregate industry
- [ ] Form submits correctly to HubSpot
- [ ] Responsive design works on mobile/tablet
- [ ] CTA button links to correct page
- [ ] All benefit points are relevant to aggregate industry

---

## Questions or Issues?

If you need any adjustments to:
- Logo sizing
- Content positioning
- Color scheme
- Additional aggregate-specific features

Just let me know and I'll help you customize it further!

---

**Ready for your aggregate content!**
Share your specific aggregate industry information and I'll help you integrate it into the appropriate sections.
