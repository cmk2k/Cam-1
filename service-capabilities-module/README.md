# Service Capabilities Module

A professional, two-column layout showcasing Industrial Rubber Service and Field Service capabilities for Applied Industrial Technologies.

## Preview

```
┌─────────────────────────────────────────────────────┐
│      Comprehensive Service Capabilities              │
│   (Dark purple gradient background with pattern)     │
└─────────────────────────────────────────────────────┘

Desktop Layout:
┌──────────────────────────┬──────────────────────────┐
│ 🔧 Industrial Rubber     │ ⚙️ Field Service         │
│    Service Capabilities  │    Capabilities          │
├──────────────────────────┼──────────────────────────┤
│ ✓ Pulley Lagging        │ ✓ On-site Vulcanization  │
│ ✓ Sand Blasting         │ ✓ Fabric Vulcanization   │
│                          │ ✓ Steel Cable Vulc.      │
│                          │ ✓ Pipe Belt Vulc.        │
│                          │ ✓ Mechanical Fastening   │
│                          │ ✓ On-Site Lagging        │
│                          │ ✓ OSHA/MSHA Compliant    │
│                          │ ⚡ 24/7 Emergency Service │
└──────────────────────────┴──────────────────────────┘
```

Mobile Layout: Stacks vertically

## Features

✅ **Professional Design**
- Dark purple gradient background with subtle pattern
- White cards with rounded corners and shadows
- Hover effects (cards lift on hover)

✅ **Visual Elements**
- Icon badges for each category (🔧 and ⚙️)
- Checkmark bullets (✓) for all capabilities
- Highlighted 24/7 service with lightning bolt (⚡)
- Yellow accent borders

✅ **Fully Responsive**
- 2 columns on desktop (side-by-side)
- 1 column on mobile (stacked)
- Breakpoint at 968px

✅ **Applied Industrial Branding**
- Colors: Navy (#1B0F3A), Teal (#007680), Yellow (#FDB81E)
- Matches existing site design
- Professional B2B aesthetic

## Installation

### In HubSpot:

1. **Add CSS to Page Header:**
   - Go to Page Settings > Advanced Options > Header HTML
   - Paste contents of `head.html`

2. **Add HTML Module:**
   - Add Custom HTML module to page
   - Paste contents of `source-code.html`
   - Place between "Heavyweight Belt Capabilities" and "Nationwide Service Network"

## Customization

### Change Section Title:
```html
<h2>Comprehensive Service Capabilities</h2>
<p>Your description here...</p>
```

### Add More Capabilities:
```html
<li class="applied-capability-item">Your New Capability</li>
```

### Change Icons:
```html
<div class="applied-capability-icon">🔧</div>  <!-- Change emoji -->
```

### Adjust Colors (in head.html):
```css
background: linear-gradient(135deg, #1B0F3A 0%, #2d1a5a 100%); /* Background */
border-bottom: 3px solid #FDB81E; /* Accent line */
background: #007680; /* Checkmark color */
```

## Structure

```
service-capabilities-module/
├── head.html           # CSS styles for the module
├── source-code.html    # HTML content
└── README.md          # This file
```

## Mobile Responsive

- **Desktop (> 968px):** 2-column grid
- **Tablet/Mobile (< 968px):** Single column stack
- Cards maintain full width
- Padding adjusts for smaller screens

## Browser Support

Compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Design Specifications

- **Background:** Dark purple gradient (#1B0F3A to #2d1a5a)
- **Cards:** White (#ffffff) with 16px border radius
- **Icons:** 56px × 56px teal gradient circles
- **Checkmarks:** 24px teal circles with white ✓
- **Accent:** Yellow (#FDB81E) borders
- **Spacing:** 32px gap between columns
- **Padding:** 80px vertical, 20px horizontal

## Notes

- Module is fully self-contained
- No external dependencies
- Uses inline styles for HubSpot compatibility
- Scoped with `.applied-` class prefix to avoid conflicts
