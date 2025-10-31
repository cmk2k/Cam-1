# Industrial Distributor Website

A minimalist, professional website for an industrial distributor, built with HTML, CSS, and JavaScript.

## Overview

This website is designed specifically for industrial distribution businesses, featuring a clean, professional design that resonates with B2B clients in manufacturing, construction, and other industrial sectors.

## Features

- **Minimalist Professional Design**: Clean, corporate aesthetic tailored for industrial clients
- **Product Categories**: Showcase 6 major product lines with clear organization
- **Services Section**: Highlight technical support, inventory management, and custom solutions
- **Industries Served**: Display 12 industry sectors with interactive hover effects
- **Contact Form**: B2B-focused inquiry form with company information fields
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Interactions**: Subtle animations that maintain professional appearance

## Structure

- `index.html` - Main website structure with all sections
- `style.css` - Professional styling with industrial color scheme
- `script.js` - Smooth scrolling and form handling
- `README.md` - This documentation file

## Sections

1. **Hero Section**: Impactful header with industrial-themed background and clear call-to-action
2. **Product Categories**: 6 product categories including Power Transmission, Pneumatics & Hydraulics, Material Handling, Industrial Tools, Safety Equipment, and Electrical Components
3. **Services**: Technical support, inventory management, same-day delivery, and custom solutions
4. **Industries Served**: 12 industry sectors displayed in an interactive grid
5. **Contact**: Two-column layout with company information and inquiry form
6. **Footer**: Multi-column footer with quick links and company information

## Customization

### Colors

Customize the color scheme by modifying CSS variables in `style.css`:

```css
:root {
    --primary-color: #1e3a8a;    /* Dark blue */
    --secondary-color: #3b82f6;  /* Medium blue */
    --accent-color: #ef4444;     /* Red accent */
    --text-color: #1f2937;       /* Dark gray text */
    --text-light: #6b7280;       /* Light gray text */
}
```

### Content

Update company-specific information in `index.html`:
- Company name in navigation (line 12)
- Hero section title and description (lines 27-28)
- Product categories and descriptions (lines 37-72)
- Contact information (lines 127-139)
- Footer content (lines 153-181)

### Product Categories

Modify the product offerings by editing the product cards (starting at line 37 in `index.html`). Each card includes a number, title, and description.

### Industries

Update the industries served by editing the industry items (lines 104-117 in `index.html`).

## How to Deploy

1. Upload all files to your web server
2. Ensure `index.html` is set as the default page
3. Test all links and form functionality
4. Connect the contact form to your backend email service

## Browser Support

Compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Integration Notes

The contact form currently displays an alert on submission. To integrate with your backend:

1. Update the form submission handler in `script.js` (line 25)
2. Send data to your server endpoint using fetch or AJAX
3. Implement server-side email handling or CRM integration

## License

This website template is provided as-is for commercial use.
