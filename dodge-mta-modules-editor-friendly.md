# Dodge Motorized Torque-Arm II - HubSpot Editor-Friendly Version

## ✅ VISIBLE IN HUBSPOT EDITOR + PREVIEW

This version includes inline styles so content is visible while editing in HubSpot, not just in preview mode.

---

## 1️⃣ HEAD HTML (Copy Once into HubSpot HEAD HTML)

```html
<style>
    /* Applied Industrial Technologies - Dodge MTA Landing Page */
    .aih-lp {
        --aih-primary: #00838F;
        --aih-primary-dark: #005662;
        --aih-secondary: #E84E0F;
        --aih-accent: #FDB71A;
        --aih-navy: #1A2332;
        --aih-gray-50: #FAFAFA;
        --aih-gray-100: #F5F5F5;
        --aih-gray-200: #EEEEEE;
        --aih-gray-700: #616161;
        --aih-gray-800: #424242;
        --aih-success: #4CAF50;
        --aih-white: #FFFFFF;
        --aih-border-radius: 4px;
        --aih-shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
        --aih-shadow-md: 0 4px 12px rgba(0,0,0,0.15);
        --aih-shadow-lg: 0 8px 24px rgba(0,0,0,0.2);
    }

    .aih-lp * { box-sizing: border-box; }

    .aih-lp {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 1.6;
        color: #424242;
    }

    .aih-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
    .aih-container-wide { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }
    .aih-container-narrow { max-width: 900px; margin: 0 auto; padding: 0 2rem; }

    .aih-section { padding: 4rem 0; }

    /* Buttons */
    .aih-btn {
        display: inline-block;
        padding: 0.875rem 2rem;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        border-radius: 4px;
        cursor: pointer;
        border: 2px solid transparent;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.3s ease;
    }

    .aih-btn-primary {
        background-color: #00838F;
        color: #FFFFFF;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .aih-btn-primary:hover {
        background-color: #005662;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .aih-btn-secondary {
        background-color: transparent;
        color: #00838F;
        border-color: #00838F;
    }

    .aih-btn-secondary:hover {
        background-color: #00838F;
        color: #FFFFFF;
        transform: translateY(-2px);
    }

    .aih-btn-white {
        background-color: #FFFFFF;
        color: #00838F;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .aih-btn-white:hover {
        background-color: #F5F5F5;
        transform: translateY(-2px);
    }

    .aih-btn-lg {
        padding: 1.125rem 2.5rem;
        font-size: 1.125rem;
    }

    /* Hero */
    .aih-hero {
        position: relative;
        background: linear-gradient(135deg, #1A2332 0%, #005662 100%);
        color: #FFFFFF;
        min-height: 600px;
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    .aih-hero-video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .aih-hero-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.25;
    }

    .aih-hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(26, 35, 50, 0.95) 0%, rgba(0, 86, 98, 0.85) 100%);
    }

    .aih-hero-content {
        position: relative;
        z-index: 2;
        padding: 4rem 0;
    }

    .aih-hero-badge {
        display: inline-block;
        background-color: #FDB71A;
        color: #1A2332;
        padding: 0.5rem 1.25rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 1.5rem;
    }

    .aih-hero h1 {
        color: #FFFFFF;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;
    }

    .aih-hero-subtitle {
        font-size: clamp(1.125rem, 2.5vw, 1.5rem);
        color: #F5F5F5;
        margin-bottom: 2rem;
        max-width: 800px;
    }

    .aih-hero-cta-group {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .aih-hero-features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 3rem;
    }

    .aih-hero-feature {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .aih-hero-feature-icon {
        width: 48px;
        height: 48px;
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .aih-hero-feature-text {
        font-size: 1rem;
        font-weight: 600;
    }

    /* Trust Bar */
    .aih-trust-bar {
        background-color: #FAFAFA;
        border-top: 3px solid #FDB71A;
        border-bottom: 3px solid #FDB71A;
    }

    .aih-trust-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        padding: 2rem 0;
    }

    .aih-trust-item {
        text-align: center;
    }

    .aih-trust-icon {
        width: 64px;
        height: 64px;
        background-color: #00838F;
        color: #FFFFFF;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        font-size: 1.75rem;
        font-weight: 700;
    }

    .aih-trust-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #00838F;
        margin-bottom: 0.5rem;
    }

    .aih-trust-text {
        font-size: 0.95rem;
        color: #616161;
    }

    /* Value Cards */
    .aih-value-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
    }

    .aih-value-card {
        background-color: #FFFFFF;
        border: 2px solid #EEEEEE;
        border-radius: 4px;
        padding: 2rem;
        transition: all 0.3s ease;
    }

    .aih-value-card:hover {
        border-color: #00838F;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateY(-4px);
    }

    .aih-value-icon {
        width: 72px;
        height: 72px;
        background: linear-gradient(135deg, #00838F 0%, #005662 100%);
        color: #FFFFFF;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        font-size: 1.75rem;
        font-weight: 700;
    }

    /* AGMA Section */
    .aih-agma-section {
        background: linear-gradient(135deg, #1A2332 0%, #00838F 100%);
        color: #FFFFFF;
    }

    .aih-agma-badge {
        display: inline-block;
        background-color: #FDB71A;
        color: #1A2332;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 2rem;
    }

    .aih-agma-highlights {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .aih-agma-highlight {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1.5rem;
        border-radius: 4px;
        border-left: 4px solid #FDB71A;
    }

    /* Chart */
    .aih-life-chart {
        background-color: #FFFFFF;
        border-radius: 4px;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        margin-top: 2rem;
    }

    .aih-chart-bars {
        display: flex;
        align-items: flex-end;
        gap: 2rem;
        margin: 2rem 0;
        height: 300px;
    }

    .aih-chart-bar {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    .aih-chart-bar-fill {
        width: 100%;
        background: linear-gradient(180deg, #00838F 0%, #005662 100%);
        border-radius: 4px 4px 0 0;
        position: relative;
    }

    .aih-chart-value {
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.5rem;
        font-weight: 700;
        color: #00838F;
        white-space: nowrap;
    }

    .aih-chart-label {
        margin-top: 1rem;
        text-align: center;
        font-weight: 600;
        color: #1A2332;
    }

    /* Tabs */
    .aih-tab-nav {
        display: flex;
        border-bottom: 2px solid #EEEEEE;
        gap: 0.5rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }

    .aih-tab-button {
        padding: 1rem 2rem;
        background-color: transparent;
        border: none;
        border-bottom: 3px solid transparent;
        color: #616161;
        font-size: 1.125rem;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: -2px;
    }

    .aih-tab-button:hover {
        color: #00838F;
        background-color: #FAFAFA;
    }

    .aih-tab-button.active {
        color: #00838F;
        border-bottom-color: #00838F;
    }

    .aih-tab-content {
        display: none;
    }

    .aih-tab-content.active {
        display: block;
    }

    .aih-feature-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1rem;
    }

    .aih-feature-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        background-color: #FAFAFA;
        border-radius: 4px;
    }

    .aih-feature-check {
        width: 24px;
        height: 24px;
        background-color: #4CAF50;
        color: #FFFFFF;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.75rem;
        flex-shrink: 0;
    }

    /* Bushing Section */
    .aih-bushing-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
    }

    .aih-bushing-image {
        width: 100%;
        border-radius: 4px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }

    .aih-bushing-benefits {
        list-style: none;
        padding: 0;
        margin: 2rem 0 0 0;
    }

    .aih-bushing-benefits li {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid #EEEEEE;
    }

    .aih-bushing-benefits li::before {
        content: '✓';
        width: 32px;
        height: 32px;
        background-color: #00838F;
        color: #FFFFFF;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-weight: 700;
    }

    /* Availability */
    .aih-availability-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
    }

    .aih-availability-comparison {
        background-color: #FFFFFF;
        border-radius: 4px;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .aih-comparison-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0;
        border-bottom: 1px solid #EEEEEE;
    }

    .aih-comparison-value {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .aih-comparison-value.highlight {
        color: #4CAF50;
    }

    /* Manufacturing */
    .aih-manufacturing-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
    }

    .aih-manufacturing-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 2rem 0;
    }

    .aih-badge {
        background-color: #00838F;
        color: #FFFFFF;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    /* FAQ */
    .aih-accordion {
        max-width: 900px;
        margin: 0 auto;
    }

    .aih-accordion-item {
        background-color: #FFFFFF;
        border-radius: 4px;
        margin-bottom: 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .aih-accordion-header {
        width: 100%;
        padding: 1.5rem;
        background-color: #FFFFFF;
        border: none;
        text-align: left;
        font-size: 1.125rem;
        font-weight: 600;
        color: #00838F;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .aih-accordion-header:hover {
        background-color: #FAFAFA;
    }

    .aih-accordion-icon {
        font-size: 1.5rem;
        font-weight: 700;
        color: #E84E0F;
        transition: transform 0.3s ease;
    }

    .aih-accordion-header.active .aih-accordion-icon {
        transform: rotate(45deg);
    }

    .aih-accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease;
    }

    .aih-accordion-content.active {
        max-height: 1000px;
        padding: 0 1.5rem 1.5rem;
    }

    /* Sticky CTA */
    .aih-sticky-cta {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #1A2332;
        color: #FFFFFF;
        padding: 1rem 0;
        box-shadow: 0 -4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    }

    .aih-sticky-cta.visible {
        transform: translateY(0);
    }

    .aih-sticky-cta-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .aih-sticky-cta-buttons {
        display: flex;
        gap: 1rem;
    }

    /* Final CTA */
    .aih-final-cta {
        background: linear-gradient(135deg, #00838F 0%, #1A2332 100%);
        color: #FFFFFF;
        text-align: center;
    }

    .aih-final-cta h2 {
        color: #FFFFFF;
    }

    .aih-final-cta-buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 2rem;
    }

    .aih-reassurance {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
        opacity: 0.9;
    }

    .aih-reassurance-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    /* Footnotes */
    .aih-footnotes {
        background-color: #FAFAFA;
        padding: 2rem 0;
        font-size: 0.875rem;
        color: #616161;
        border-top: 1px solid #EEEEEE;
    }

    .aih-footnote-ref {
        color: #E84E0F;
        font-weight: 600;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .aih-container, .aih-container-wide, .aih-container-narrow {
            padding: 0 1rem;
        }
        .aih-hero-cta-group {
            flex-direction: column;
        }
        .aih-btn {
            width: 100%;
        }
        .aih-bushing-content,
        .aih-availability-content,
        .aih-manufacturing-content {
            grid-template-columns: 1fr;
        }
        .aih-tab-button {
            width: 100%;
        }
    }
</style>
```

---

## 2️⃣ FOOTER HTML (Copy Once)

```html
<script>
(function() {
    'use strict';
    const pageContainer = document.querySelector('.aih-lp');
    if (!pageContainer) return;

    // Tabs
    const tabButtons = pageContainer.querySelectorAll('.aih-tab-button');
    const tabContents = pageContainer.querySelectorAll('.aih-tab-content');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            this.classList.add('active');
            const targetContent = pageContainer.querySelector(`#tab-${targetTab}`);
            if (targetContent) targetContent.classList.add('active');
        });
    });

    // Accordion
    const accordionHeaders = pageContainer.querySelectorAll('.aih-accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                if (h.nextElementSibling) h.nextElementSibling.classList.remove('active');
            });
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });

    // Sticky CTA
    const stickyCta = pageContainer.querySelector('#stickyCta');
    const hero = pageContainer.querySelector('.aih-hero');
    if (stickyCta && hero) {
        let heroHeight = hero.offsetHeight;
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > heroHeight) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }
})();
</script>
```

---

## 3️⃣ MODULES (Copy Each Separately)

### Module 1: Hero Section

```html
<div class="aih-lp">
    <section class="aih-hero">
        <div class="aih-hero-video-container">
            <video class="aih-hero-video" autoplay muted loop playsinline poster="image-placeholder-hero.jpg">
                <source src="video-placeholder-mta.mp4" type="video/mp4">
            </video>
        </div>
        <div class="aih-hero-overlay"></div>
        <div class="aih-hero-content">
            <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                <div class="aih-hero-badge" style="display: inline-block; background-color: #FDB71A; color: #1A2332; padding: 0.5rem 1.25rem; border-radius: 50px; font-weight: 700; font-size: 0.875rem; text-transform: uppercase; margin-bottom: 1.5rem;">Only AGMA-Rated Direct-Drive Reducer</div>

                <h1 style="color: #FFFFFF; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; line-height: 1.2; margin-bottom: 1.5rem;">Motorized Torque-Arm II:<br>The Ultimate Shaft-Mounted Reducer</h1>

                <p class="aih-hero-subtitle" style="font-size: clamp(1.125rem, 2.5vw, 1.5rem); color: #F5F5F5; margin-bottom: 2rem; max-width: 800px;">Direct-drive solution delivering premium performance with the highest torque ratings per case size on the market. Engineered to AGMA standards for 2x-2.78x longer life than DIN-rated competitors.</p>

                <div class="aih-hero-cta-group" style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
                    <a href="#shop-now" class="aih-btn aih-btn-primary aih-btn-lg" style="display: inline-block; padding: 1.125rem 2.5rem; font-size: 1.125rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: #00838F; color: #FFFFFF; text-transform: uppercase;">Shop Now</a>
                    <a href="#find-your-size" class="aih-btn aih-btn-white aih-btn-lg" style="display: inline-block; padding: 1.125rem 2.5rem; font-size: 1.125rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: #FFFFFF; color: #00838F; text-transform: uppercase;">Find Your Size</a>
                    <a href="#talk-to-expert" class="aih-btn aih-btn-secondary aih-btn-lg" style="display: inline-block; padding: 1.125rem 2.5rem; font-size: 1.125rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: transparent; color: #00838F; border: 2px solid #00838F; text-transform: uppercase;">Talk to an Expert</a>
                </div>

                <div class="aih-hero-features" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 3rem;">
                    <div class="aih-hero-feature" style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 48px; height: 48px; background-color: rgba(255, 255, 255, 0.15); border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem;">⚡</span>
                        </div>
                        <div style="font-size: 1rem; font-weight: 600; color: #FFFFFF;">Up to 329,000 in-lbs torque</div>
                    </div>
                    <div class="aih-hero-feature" style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 48px; height: 48px; background-color: rgba(255, 255, 255, 0.15); border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem;">✓</span>
                        </div>
                        <div style="font-size: 1rem; font-weight: 600; color: #FFFFFF;">5000-hour L10 bearing life</div>
                    </div>
                    <div class="aih-hero-feature" style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 48px; height: 48px; background-color: rgba(255, 255, 255, 0.15); border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem;">🚀</span>
                        </div>
                        <div style="font-size: 1rem; font-weight: 600; color: #FFFFFF;">Available in days, not weeks</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 2: Trust Bar

```html
<div class="aih-lp">
    <section class="aih-trust-bar" style="background-color: #FAFAFA; border-top: 3px solid #FDB71A; border-bottom: 3px solid #FDB71A;">
        <div class="aih-container-wide" style="max-width: 1400px; margin: 0 auto; padding: 0 2rem;">
            <div class="aih-trust-items" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; padding: 2rem 0;">
                <div class="aih-trust-item" style="text-align: center;">
                    <div style="width: 64px; height: 64px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.75rem; font-weight: 700;">1st</div>
                    <div style="font-size: 1.25rem; font-weight: 700; color: #00838F; margin-bottom: 0.5rem;">Only AGMA-Rated*</div>
                    <p style="font-size: 0.95rem; color: #616161; margin: 0;">First and only AGMA-rated direct-drive reducer on the market</p>
                </div>
                <div class="aih-trust-item" style="text-align: center;">
                    <div style="width: 64px; height: 64px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.75rem; font-weight: 700;">20+</div>
                    <div style="font-size: 1.25rem; font-weight: 700; color: #00838F; margin-bottom: 0.5rem;">Proven Performance</div>
                    <p style="font-size: 0.95rem; color: #616161; margin: 0;">Over 20 years of field-tested reliability in toughest applications</p>
                </div>
                <div class="aih-trust-item" style="text-align: center;">
                    <div style="width: 64px; height: 64px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.75rem; font-weight: 700;">🇺🇸</div>
                    <div style="font-size: 1.25rem; font-weight: 700; color: #00838F; margin-bottom: 0.5rem;">Made in USA</div>
                    <p style="font-size: 0.95rem; color: #616161; margin: 0;">Manufactured in ISO 9001-certified facility in Greenville, SC</p>
                </div>
                <div class="aih-trust-item" style="text-align: center;">
                    <div style="width: 64px; height: 64px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.75rem; font-weight: 700;">✓</div>
                    <div style="font-size: 1.25rem; font-weight: 700; color: #00838F; margin-bottom: 0.5rem;">100% Tested</div>
                    <p style="font-size: 0.95rem; color: #616161; margin: 0;">Every gearbox spin-tested and leak-tested before shipping</p>
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 3: Value Props Grid

```html
<div class="aih-lp">
    <section class="aih-value-props aih-section" style="padding: 4rem 0; background-color: #FFFFFF;">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
                <h2 style="color: #00838F; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 1rem;">Why Motorized Torque-Arm II Outperforms the Competition</h2>
                <p style="font-size: 1.25rem; color: #616161;">Packed with industry-leading features for maximum reliability, minimal maintenance, and lower total cost of ownership.</p>
            </div>
            <div class="aih-value-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                <div class="aih-value-card" style="background-color: #FFFFFF; border: 2px solid #EEEEEE; border-radius: 4px; padding: 2rem;">
                    <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #00838F 0%, #005662 100%); color: #FFFFFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; font-size: 1.75rem; font-weight: 700;">2.78x</div>
                    <h3 style="color: #00838F; font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 700; margin-bottom: 1rem;">Longer Average Life*</h3>
                    <p style="color: #616161; margin-bottom: 0;">Designed to AGMA standards for 5000-hour L10 bearing life—2.78x longer than DIN 1800-hour designs and 2x longer than DIN 2500-hour designs. Less downtime, fewer replacements.</p>
                </div>
                <div class="aih-value-card" style="background-color: #FFFFFF; border: 2px solid #EEEEEE; border-radius: 4px; padding: 2rem;">
                    <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #00838F 0%, #005662 100%); color: #FFFFFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; font-size: 1.75rem; font-weight: 700;">⚡</div>
                    <h3 style="color: #00838F; font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 700; margin-bottom: 1rem;">Highest Torque Per Size</h3>
                    <p style="color: #616161; margin-bottom: 0;">Up to 329,000 inch-pounds of torque across 10 sizes—the highest torque ratings per case size on the market. Smaller, lighter, and more compact than competitive options.</p>
                </div>
                <div class="aih-value-card" style="background-color: #FFFFFF; border: 2px solid #EEEEEE; border-radius: 4px; padding: 2rem;">
                    <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #00838F 0%, #005662 100%); color: #FFFFFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; font-size: 1.75rem; font-weight: 700;">📦</div>
                    <h3 style="color: #00838F; font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 700; margin-bottom: 1rem;">Unmatched Availability*</h3>
                    <p style="color: #616161; margin-bottom: 0;">Assembled with stock components and available in days versus weeks or months. Broadest off-the-shelf offering with every input option and most common sizes in stock.</p>
                </div>
                <div class="aih-value-card" style="background-color: #FFFFFF; border: 2px solid #EEEEEE; border-radius: 4px; padding: 2rem;">
                    <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #00838F 0%, #005662 100%); color: #FFFFFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; font-size: 1.75rem; font-weight: 700;">💰</div>
                    <h3 style="color: #00838F; font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 700; margin-bottom: 1rem;">Lower Total Cost</h3>
                    <p style="color: #616161; margin-bottom: 0;">Compact footprint minimizes overhung load, potentially reducing supporting equipment size and component costs. Twin-tapered bushing system lowers installation and maintenance costs.</p>
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 4: AGMA-Rated Design Section

```html
<div class="aih-lp">
    <section class="aih-agma-section aih-section" style="background: linear-gradient(135deg, #1A2332 0%, #00838F 100%); color: #FFFFFF; padding: 4rem 0;">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div class="aih-agma-badge" style="display: inline-block; background-color: #FDB71A; color: #1A2332; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 700; font-size: 0.875rem; text-transform: uppercase; margin-bottom: 2rem;">INDUSTRY-LEADING DESIGN</div>

            <h2 style="color: #FFFFFF; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 1.5rem;">AGMA-Rated Design: Engineered to Higher Standards*</h2>

            <p style="font-size: 1.125rem; margin-bottom: 2rem; max-width: 800px;">As the <strong>only AGMA-rated direct-drive reducer on the market</strong>, Motorized Torque-Arm II is engineered to higher standards and longer life than competitors built to lesser DIN specifications. Proven through extensive testing and over 20 years in the field, MTA's heavy-duty design maximizes uptime in the toughest applications where others fail.</p>

            <div class="aih-agma-highlights" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                <div style="background-color: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: 4px; border-left: 4px solid #FDB71A;">
                    <h4 style="color: #FFFFFF; font-size: clamp(1.1rem, 2.5vw, 1.35rem); font-weight: 700; margin-bottom: 0.5rem;">Superior Engineering Standards</h4>
                    <p style="margin: 0; font-size: 1rem;">AGMA (American Gear Manufacturers Association) standards exceed DIN specifications for gear design, bearing life, and durability testing.</p>
                </div>
                <div style="background-color: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: 4px; border-left: 4px solid #FDB71A;">
                    <h4 style="color: #FFFFFF; font-size: clamp(1.1rem, 2.5vw, 1.35rem); font-weight: 700; margin-bottom: 0.5rem;">Extended Service Life</h4>
                    <p style="margin: 0; font-size: 1rem;">5000-hour unadjusted L10 bearing life provides 2x to 2.78x longer service life than DIN-rated reducers, reducing replacement frequency and costs.</p>
                </div>
                <div style="background-color: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: 4px; border-left: 4px solid #FDB71A;">
                    <h4 style="color: #FFFFFF; font-size: clamp(1.1rem, 2.5vw, 1.35rem); font-weight: 700; margin-bottom: 0.5rem;">Proven in the Field</h4>
                    <p style="margin: 0; font-size: 1rem;">Over 20 years of field testing and real-world performance in harsh industrial environments validates superior reliability.</p>
                </div>
            </div>

            <div style="margin-top: 2rem;">
                <a href="#shop-now" class="aih-btn aih-btn-white aih-btn-lg" style="display: inline-block; padding: 1.125rem 2.5rem; font-size: 1.125rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: #FFFFFF; color: #00838F; text-transform: uppercase;">Shop AGMA-Rated Reducers</a>
            </div>
        </div>
    </section>
</div>
```

### Module 5: Average Reducer Life Comparison

```html
<div class="aih-lp">
    <section class="aih-life-section aih-section" style="background-color: #FAFAFA; padding: 4rem 0;">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
                <h2 style="color: #00838F; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 1rem;">Average Reducer Life: MTA vs. DIN-Rated Competitors*</h2>
                <p style="font-size: 1.25rem; color: #616161;">Designed to AGMA standards for significantly longer average reducer life than DIN-rated alternatives.</p>
            </div>

            <div class="aih-life-chart" style="background-color: #FFFFFF; border-radius: 4px; padding: 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin-top: 2rem;">
                <div class="aih-chart-bars" style="display: flex; align-items: flex-end; gap: 2rem; margin: 2rem 0; height: 300px;">
                    <div class="aih-chart-bar" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end;">
                        <div style="width: 100%; background: linear-gradient(180deg, #00838F 0%, #005662 100%); border-radius: 4px 4px 0 0; height: 36%; position: relative;">
                            <span style="position: absolute; top: -40px; left: 50%; transform: translateX(-50%); font-size: 1.5rem; font-weight: 700; color: #00838F;">1800</span>
                        </div>
                        <div style="margin-top: 1rem; text-align: center; font-weight: 600; color: #1A2332;">
                            <div>DIN 1800</div>
                            <div style="font-size: 0.875rem; color: #616161;">Typical Competitor</div>
                        </div>
                    </div>
                    <div class="aih-chart-bar" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end;">
                        <div style="width: 100%; background: linear-gradient(180deg, #00838F 0%, #005662 100%); border-radius: 4px 4px 0 0; height: 50%; position: relative;">
                            <span style="position: absolute; top: -40px; left: 50%; transform: translateX(-50%); font-size: 1.5rem; font-weight: 700; color: #00838F;">2500</span>
                        </div>
                        <div style="margin-top: 1rem; text-align: center; font-weight: 600; color: #1A2332;">
                            <div>DIN 2500</div>
                            <div style="font-size: 0.875rem; color: #616161;">Premium Competitor</div>
                        </div>
                    </div>
                    <div class="aih-chart-bar" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end;">
                        <div style="width: 100%; background: linear-gradient(180deg, #FDB71A 0%, #00838F 100%); border-radius: 4px 4px 0 0; height: 100%; position: relative;">
                            <span style="position: absolute; top: -40px; left: 50%; transform: translateX(-50%); font-size: 1.5rem; font-weight: 700; color: #00838F;">5000</span>
                        </div>
                        <div style="margin-top: 1rem; text-align: center; font-weight: 600;">
                            <div style="color: #00838F; font-weight: 700;">MTA AGMA-Rated</div>
                            <div style="font-size: 0.875rem; color: #616161;">Industry Leader</div>
                        </div>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 1rem;">
                    <p style="font-size: 0.95rem; color: #616161;"><strong>L10 Bearing Life (Hours)</strong> - Unadjusted bearing life rating based on manufacturer design standards.</p>
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 6: Tabbed Content (Features/Benefits/Applications)

```html
<div class="aih-lp">
    <section class="aih-tabs aih-section" style="background-color: #FFFFFF; padding: 4rem 0;">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
                <h2 style="color: #00838F; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700;">Engineered for Maximum Durability</h2>
            </div>

            <div class="aih-tab-nav" style="display: flex; border-bottom: 2px solid #EEEEEE; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap;">
                <button class="aih-tab-button active" data-tab="features" style="padding: 1rem 2rem; background-color: transparent; border: none; border-bottom: 3px solid #00838F; color: #00838F; font-size: 1.125rem; font-weight: 600; cursor: pointer; margin-bottom: -2px;">Features</button>
                <button class="aih-tab-button" data-tab="benefits" style="padding: 1rem 2rem; background-color: transparent; border: none; border-bottom: 3px solid transparent; color: #616161; font-size: 1.125rem; font-weight: 600; cursor: pointer; margin-bottom: -2px;">Key Benefits</button>
                <button class="aih-tab-button" data-tab="applications" style="padding: 1rem 2rem; background-color: transparent; border: none; border-bottom: 3px solid transparent; color: #616161; font-size: 1.125rem; font-weight: 600; cursor: pointer; margin-bottom: -2px;">Applications</button>
            </div>

            <div class="aih-tab-content active" id="tab-features">
                <div class="aih-feature-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Multiple breather options for harsh environments</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Bushing cover and shaft guard ready</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Straddle-mount pinion</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Multiple input options</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Safety input adapter for NEMA flanged motors</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Enclosed input adapter for IEC and NEMA flanged motors</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Heavy-duty cast iron housing</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Extreme pressure lubricant-compatible backstop</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Harsh-duty sealing system</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Twin-tapered bushings</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Sensor-ready for remote condition monitoring</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">Tapered roller bearings</p>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background-color: #FAFAFA; border-radius: 4px;">
                        <div style="width: 24px; height: 24px; background-color: #4CAF50; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.75rem;">✓</div>
                        <p style="font-size: 1rem; color: #424242; margin: 0;">AGMA-rated gearing</p>
                    </div>
                </div>
            </div>

            <div class="aih-tab-content" id="tab-benefits" style="display: none;">
                <h3 style="color: #00838F; font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 700; margin-bottom: 1rem;">Key Benefits</h3>
                <ul style="font-size: 1.125rem; line-height: 1.8; color: #616161;">
                    <li><strong>Maximize Uptime:</strong> AGMA-rated design and 5000-hour L10 bearing life reduce maintenance frequency and unplanned downtime</li>
                    <li><strong>Reduce Installation Costs:</strong> Twin-tapered bushing system simplifies installation and removal, shaft-ready out of the box</li>
                    <li><strong>Minimize Footprint:</strong> Smaller and lighter than competitive options with equivalent torque capabilities</li>
                    <li><strong>Lower Total Cost of Ownership:</strong> Longer life, faster availability, and reduced maintenance equal significant cost savings</li>
                    <li><strong>Faster Lead Times:</strong> Assembled with stock components, available in days versus weeks or months</li>
                    <li><strong>Application Flexibility:</strong> 10 sizes, multiple input options, supports drive packages up to 329,000 inch-pounds of torque</li>
                </ul>
            </div>

            <div class="aih-tab-content" id="tab-applications" style="display: none;">
                <h3 style="color: #00838F; font-size: clamp(1.25rem, 3vw, 1.75rem); font-weight: 700; margin-bottom: 1rem;">Ideal Applications</h3>
                <p style="font-size: 1.125rem; margin-bottom: 1.5rem; color: #616161;">Motorized Torque-Arm II excels in demanding industrial applications where reliability, compact design, and high torque are critical:</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                    <div style="padding: 1.5rem; background-color: #FAFAFA; border-radius: 4px;">
                        <h4 style="color: #00838F; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Conveyor Systems</h4>
                        <p style="color: #616161; margin: 0;">Heavy-duty conveyor drives in mining, aggregate, and bulk material handling</p>
                    </div>
                    <div style="padding: 1.5rem; background-color: #FAFAFA; border-radius: 4px;">
                        <h4 style="color: #00838F; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Mixing & Agitation</h4>
                        <p style="color: #616161; margin: 0;">Chemical processing, wastewater treatment, and industrial mixing applications</p>
                    </div>
                    <div style="padding: 1.5rem; background-color: #FAFAFA; border-radius: 4px;">
                        <h4 style="color: #00838F; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Packaging Equipment</h4>
                        <p style="color: #616161; margin: 0;">Food & beverage, pharmaceutical, and consumer goods packaging lines</p>
                    </div>
                    <div style="padding: 1.5rem; background-color: #FAFAFA; border-radius: 4px;">
                        <h4 style="color: #00838F; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">OEM Equipment</h4>
                        <p style="color: #616161; margin: 0;">Custom machinery requiring compact, reliable, high-torque shaft mount solutions</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 7: Twin-Tapered Bushing System

```html
<div class="aih-lp">
    <section class="aih-bushing-section aih-section" style="background-color: #FFFFFF; padding: 4rem 0;">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div class="aih-bushing-content" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
                <div>
                    <img src="image-placeholder-bushing-system.jpg" alt="Twin-Tapered Bushing System" style="width: 100%; border-radius: 4px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);">
                </div>
                <div>
                    <h2 style="color: #00838F; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 1rem;">Premier Performance: Twin-Tapered Bushing System</h2>
                    <p style="color: #616161; margin-bottom: 1rem;">The twin-tapered bushing system is a key differentiator that simplifies installation, reduces maintenance costs, and extends equipment life. This innovative design eliminates common problems like shaft-to-reducer fretting, eccentricity, and wobble.</p>
                    <ul class="aih-bushing-benefits" style="list-style: none; padding: 0; margin: 2rem 0 0 0;">
                        <li style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #EEEEEE;">
                            <span style="width: 32px; height: 32px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700;">✓</span>
                            <span style="color: #424242;">Simplifies installation and removal</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #EEEEEE;">
                            <span style="width: 32px; height: 32px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700;">✓</span>
                            <span style="color: #424242;">Mitigates shaft-to-reducer fretting</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #EEEEEE;">
                            <span style="width: 32px; height: 32px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700;">✓</span>
                            <span style="color: #424242;">Eliminates eccentricity and wobble</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #EEEEEE;">
                            <span style="width: 32px; height: 32px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700;">✓</span>
                            <span style="color: #424242;">Available in standard and short-shaft versions</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #EEEEEE;">
                            <span style="width: 32px; height: 32px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700;">✓</span>
                            <span style="color: #424242;">Available in inch and metric bores</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #EEEEEE;">
                            <span style="width: 32px; height: 32px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700;">✓</span>
                            <span style="color: #424242;">Increased bore capability in many sizes</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #EEEEEE;">
                            <span style="width: 32px; height: 32px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700;">✓</span>
                            <span style="color: #424242;">Shaft-ready out of the box</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem 0;">
                            <span style="width: 32px; height: 32px; background-color: #00838F; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700;">✓</span>
                            <span style="color: #424242;">Lowers total cost of ownership</span>
                        </li>
                    </ul>
                    <div style="margin-top: 2rem;">
                        <a href="#shop-now" class="aih-btn aih-btn-primary" style="display: inline-block; padding: 0.875rem 2rem; font-size: 1rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: #00838F; color: #FFFFFF; text-transform: uppercase;">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 8: Availability Section

```html
<div class="aih-lp">
    <section class="aih-availability-section aih-section" style="background: linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%); padding: 4rem 0;">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div class="aih-availability-content" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
                <div>
                    <h2 style="color: #00838F; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 1.5rem;">Unmatched Availability: Days, Not Weeks*</h2>
                    <p style="color: #616161; margin-bottom: 1rem;">Whether you design new equipment or rely on gear reducers for critical applications, Motorized Torque-Arm II is assembled with <strong>stock components to be available in days</strong>, offering significantly faster lead times than competitive options that take weeks or months to be assembled and shipped.</p>
                    <p style="color: #616161; margin-bottom: 1rem;">In addition to unparalleled lead times, MTA has the <strong>largest offering on the market</strong> with every input option and the most common reducer case sizes and ratios available off the shelf to support virtually any application from stock.</p>
                    <div style="margin-top: 2rem;">
                        <a href="#find-your-size" class="aih-btn aih-btn-primary" style="display: inline-block; padding: 0.875rem 2rem; font-size: 1rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: #00838F; color: #FFFFFF; text-transform: uppercase; margin-right: 1rem;">Find Your Size</a>
                        <a href="#talk-to-expert" class="aih-btn aih-btn-secondary" style="display: inline-block; padding: 0.875rem 2rem; font-size: 1rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: transparent; color: #00838F; border: 2px solid #00838F; text-transform: uppercase;">Talk to an Expert</a>
                    </div>
                </div>
                <div>
                    <div class="aih-availability-comparison" style="background-color: #FFFFFF; border-radius: 4px; padding: 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                        <h3 style="text-align: center; margin-bottom: 1.5rem; color: #00838F; font-size: 1.5rem; font-weight: 700;">Lead Time Comparison</h3>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 0; border-bottom: 1px solid #EEEEEE;">
                            <span style="font-weight: 600; color: #1A2332;">Typical Competitors</span>
                            <span style="font-size: 1.5rem; font-weight: 700; color: #616161;">6-12 weeks</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 0; border-bottom: 1px solid #EEEEEE;">
                            <span style="font-weight: 600; color: #1A2332;">Premium Competitors</span>
                            <span style="font-size: 1.5rem; font-weight: 700; color: #616161;">4-8 weeks</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 0; background-color: rgba(0, 131, 143, 0.05);">
                            <span style="font-weight: 600; color: #1A2332; font-size: 1.25rem;">Motorized Torque-Arm II</span>
                            <span style="font-size: 1.5rem; font-weight: 700; color: #4CAF50;">Days</span>
                        </div>
                    </div>
                    <img src="image-placeholder-availability.jpg" alt="Stock Components Ready to Ship" style="width: 100%; border-radius: 4px; margin-top: 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 9: Manufacturing Quality

```html
<div class="aih-lp">
    <section class="aih-manufacturing-section aih-section" style="background-color: #FFFFFF; padding: 4rem 0;">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div class="aih-manufacturing-content" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
                <div>
                    <img src="image-placeholder-manufacturing.jpg" alt="ISO 9001 Manufacturing Facility" style="width: 100%; border-radius: 4px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);">
                </div>
                <div>
                    <h2 style="color: #00838F; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 1rem;">Manufactured in the USA with World-Class Quality</h2>
                    <p style="color: #616161; margin-bottom: 1rem;">Every Motorized Torque-Arm II reducer is manufactured in our <strong>ISO 9001-certified facility in Greenville, South Carolina</strong>. Our commitment to quality means that every single MTA gearbox is <strong>spin-tested and leak-tested</strong> before it goes out the door to ensure long-lasting performance and provide you with peace of mind.</p>
                    <div class="aih-manufacturing-badges" style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0;">
                        <div style="background-color: #00838F; color: #FFFFFF; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.25rem;">🇺🇸</span>
                            <span>Made in USA</span>
                        </div>
                        <div style="background-color: #00838F; color: #FFFFFF; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.25rem;">✓</span>
                            <span>ISO 9001 Certified</span>
                        </div>
                        <div style="background-color: #00838F; color: #FFFFFF; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.25rem;">⚙️</span>
                            <span>100% Spin-Tested</span>
                        </div>
                        <div style="background-color: #00838F; color: #FFFFFF; padding: 0.75rem 1.5rem; border-radius: 50px; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.25rem;">🔍</span>
                            <span>100% Leak-Tested</span>
                        </div>
                    </div>
                    <div style="margin-top: 2rem;">
                        <a href="#shop-now" class="aih-btn aih-btn-primary" style="display: inline-block; padding: 0.875rem 2rem; font-size: 1rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: #00838F; color: #FFFFFF; text-transform: uppercase;">Shop USA-Made Reducers</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 10: FAQ Accordion

```html
<div class="aih-lp">
    <section class="aih-faq-section aih-section" style="background-color: #FAFAFA; padding: 4rem 0;">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
                <h2 style="color: #00838F; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700;">Frequently Asked Questions</h2>
            </div>
            <div class="aih-accordion" style="max-width: 900px; margin: 0 auto;">
                <div class="aih-accordion-item" style="background-color: #FFFFFF; border-radius: 4px; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <button class="aih-accordion-header" style="width: 100%; padding: 1.5rem; background-color: #FFFFFF; border: none; text-align: left; font-size: 1.125rem; font-weight: 600; color: #00838F; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>What makes AGMA-rated design superior to DIN specifications?</span>
                        <span class="aih-accordion-icon" style="font-size: 1.5rem; font-weight: 700; color: #E84E0F;">+</span>
                    </button>
                    <div class="aih-accordion-content" style="max-height: 0; overflow: hidden;">
                        <p style="color: #616161; padding: 0 1.5rem 1.5rem;">AGMA (American Gear Manufacturers Association) standards are more rigorous than DIN specifications for gear design, bearing life calculations, and durability testing. AGMA-rated designs are engineered for 5000-hour unadjusted L10 bearing life, compared to DIN standards of 1800-2500 hours. This translates to 2x to 2.78x longer average reducer life, fewer replacements, and lower total cost of ownership.</p>
                    </div>
                </div>
                <div class="aih-accordion-item" style="background-color: #FFFFFF; border-radius: 4px; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <button class="aih-accordion-header" style="width: 100%; padding: 1.5rem; background-color: #FFFFFF; border: none; text-align: left; font-size: 1.125rem; font-weight: 600; color: #00838F; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>How quickly can I get a Motorized Torque-Arm II reducer?</span>
                        <span class="aih-accordion-icon" style="font-size: 1.5rem; font-weight: 700; color: #E84E0F;">+</span>
                    </button>
                    <div class="aih-accordion-content" style="max-height: 0; overflow: hidden;">
                        <p style="color: #616161; padding: 0 1.5rem 1.5rem;">Motorized Torque-Arm II reducers are assembled with stock components and are typically available in days, compared to competitive options that can take 4-12 weeks. We maintain the broadest off-the-shelf offering with every input option and the most common case sizes and ratios in stock to support virtually any application.</p>
                    </div>
                </div>
                <div class="aih-accordion-item" style="background-color: #FFFFFF; border-radius: 4px; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <button class="aih-accordion-header" style="width: 100%; padding: 1.5rem; background-color: #FFFFFF; border: none; text-align: left; font-size: 1.125rem; font-weight: 600; color: #00838F; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>What are the benefits of the twin-tapered bushing system?</span>
                        <span class="aih-accordion-icon" style="font-size: 1.5rem; font-weight: 700; color: #E84E0F;">+</span>
                    </button>
                    <div class="aih-accordion-content" style="max-height: 0; overflow: hidden;">
                        <p style="color: #616161; padding: 0 1.5rem 1.5rem;">The twin-tapered bushing system simplifies installation and removal, mitigates shaft-to-reducer fretting, and eliminates eccentricity and wobble. It's available in standard and short-shaft versions, inch and metric bores, with increased bore capability in many sizes. The system is shaft-ready out of the box and significantly lowers total cost of ownership by reducing installation time and maintenance requirements.</p>
                    </div>
                </div>
                <div class="aih-accordion-item" style="background-color: #FFFFFF; border-radius: 4px; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <button class="aih-accordion-header" style="width: 100%; padding: 1.5rem; background-color: #FFFFFF; border: none; text-align: left; font-size: 1.125rem; font-weight: 600; color: #00838F; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>What torque range and sizes are available?</span>
                        <span class="aih-accordion-icon" style="font-size: 1.5rem; font-weight: 700; color: #E84E0F;">+</span>
                    </button>
                    <div class="aih-accordion-content" style="max-height: 0; overflow: hidden;">
                        <p style="color: #616161; padding: 0 1.5rem 1.5rem;">Motorized Torque-Arm II is available in 10 case sizes with multiple input options to support drive packages up to 329,000 inch-pounds of torque. This represents the highest torque ratings per case size on the market, and the units are both smaller and lighter than competitive options with equivalent torque capabilities.</p>
                    </div>
                </div>
                <div class="aih-accordion-item" style="background-color: #FFFFFF; border-radius: 4px; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <button class="aih-accordion-header" style="width: 100%; padding: 1.5rem; background-color: #FFFFFF; border: none; text-align: left; font-size: 1.125rem; font-weight: 600; color: #00838F; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>Is the Motorized Torque-Arm II suitable for harsh environments?</span>
                        <span class="aih-accordion-icon" style="font-size: 1.5rem; font-weight: 700; color: #E84E0F;">+</span>
                    </button>
                    <div class="aih-accordion-content" style="max-height: 0; overflow: hidden;">
                        <p style="color: #616161; padding: 0 1.5rem 1.5rem;">Yes, MTA is engineered for harsh industrial applications with multiple breather options for contaminated environments, harsh-duty sealing system, heavy-duty cast iron housing, and extreme pressure lubricant-compatible backstop. It's proven through over 20 years in the field and extensive testing in the toughest applications.</p>
                    </div>
                </div>
                <div class="aih-accordion-item" style="background-color: #FFFFFF; border-radius: 4px; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <button class="aih-accordion-header" style="width: 100%; padding: 1.5rem; background-color: #FFFFFF; border: none; text-align: left; font-size: 1.125rem; font-weight: 600; color: #00838F; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>What motor input options are compatible?</span>
                        <span class="aih-accordion-icon" style="font-size: 1.5rem; font-weight: 700; color: #E84E0F;">+</span>
                    </button>
                    <div class="aih-accordion-content" style="max-height: 0; overflow: hidden;">
                        <p style="color: #616161; padding: 0 1.5rem 1.5rem;">Motorized Torque-Arm II offers multiple input options including safety input adapter for NEMA flanged motors and enclosed input adapter for both IEC and NEMA flanged motors. This flexibility ensures compatibility with virtually any motor configuration in your application.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 11: Final CTA Section

```html
<div class="aih-lp">
    <section class="aih-final-cta aih-section" style="background: linear-gradient(135deg, #00838F 0%, #1A2332 100%); color: #FFFFFF; text-align: center; padding: 4rem 0;">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <h2 style="color: #FFFFFF; font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 1rem;">Ready to Experience Superior Performance?</h2>
            <p style="font-size: 1.25rem; margin-bottom: 2rem; max-width: 700px; margin-left: auto; margin-right: auto;">Get the only AGMA-rated direct-drive reducer on the market with 2x-2.78x longer life, unmatched availability, and industry-leading performance.</p>
            <div class="aih-final-cta-buttons" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
                <a href="#shop-now" class="aih-btn aih-btn-white aih-btn-lg" style="display: inline-block; padding: 1.125rem 2.5rem; font-size: 1.125rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: #FFFFFF; color: #00838F; text-transform: uppercase;">Shop Now</a>
                <a href="#find-your-size" class="aih-btn aih-btn-secondary aih-btn-lg" style="display: inline-block; padding: 1.125rem 2.5rem; font-size: 1.125rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: transparent; color: #FFFFFF; border: 2px solid #FFFFFF; text-transform: uppercase;">Find Your Size</a>
                <a href="#talk-to-expert" class="aih-btn aih-btn-secondary aih-btn-lg" style="display: inline-block; padding: 1.125rem 2.5rem; font-size: 1.125rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: transparent; color: #FFFFFF; border: 2px solid #FFFFFF; text-transform: uppercase;">Talk to an Expert</a>
            </div>
            <div class="aih-reassurance" style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; opacity: 0.9;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span>✓</span>
                    <span>Available in Days</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span>✓</span>
                    <span>Made in USA</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span>✓</span>
                    <span>100% Tested</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span>✓</span>
                    <span>20+ Years Proven</span>
                </div>
            </div>
        </div>
    </section>
</div>
```

### Module 12: Footnotes

```html
<div class="aih-lp">
    <section class="aih-footnotes" style="background-color: #FAFAFA; padding: 2rem 0; font-size: 0.875rem; color: #616161; border-top: 1px solid #EEEEEE;">
        <div class="aih-container-narrow" style="max-width: 900px; margin: 0 auto; padding: 0 2rem;">
            <p style="margin: 0.5rem 0; font-size: 0.875rem;"><span style="color: #E84E0F; font-weight: 600;">*AGMA-Rated Claim:</span> Based on manufacturer research, Motorized Torque-Arm II is the only direct-drive shaft mount reducer designed and rated to AGMA (American Gear Manufacturers Association) standards currently available on the market. Competitive products are typically designed to DIN specifications.</p>
            <p style="margin: 0.5rem 0; font-size: 0.875rem;"><span style="color: #E84E0F; font-weight: 600;">*Average Reducer Life:</span> Life calculations based on unadjusted L10 bearing life ratings. MTA designed for 5000-hour L10 bearing life per AGMA standards. Comparison to typical DIN-rated designs at 2500 hours (2x longer) and 1800 hours (2.78x longer). Actual service life varies based on application conditions, maintenance practices, and operating parameters.</p>
            <p style="margin: 0.5rem 0; font-size: 0.875rem;"><span style="color: #E84E0F; font-weight: 600;">*Availability Claims:</span> Lead times of "days versus weeks or months" based on stock component assembly for common configurations. Actual lead times may vary based on specific size, ratio, input option, and current inventory levels. Custom configurations may require extended lead times. Contact Applied Industrial Technologies for specific availability.</p>
        </div>
    </section>
</div>
```

### Module 13: Sticky CTA Bar

```html
<div class="aih-lp">
    <div class="aih-sticky-cta" id="stickyCta" style="position: fixed; bottom: 0; left: 0; width: 100%; background-color: #1A2332; color: #FFFFFF; padding: 1rem 0; box-shadow: 0 -4px 12px rgba(0,0,0,0.2); z-index: 1000; transform: translateY(100%);">
        <div class="aih-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div class="aih-sticky-cta-content" style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
                <p style="font-size: 1.125rem; font-weight: 600; margin: 0;">Motorized Torque-Arm II: AGMA-Rated Performance You Can Trust</p>
                <div class="aih-sticky-cta-buttons" style="display: flex; gap: 1rem;">
                    <a href="#shop-now" class="aih-btn aih-btn-primary" style="display: inline-block; padding: 0.875rem 2rem; font-size: 1rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: #00838F; color: #FFFFFF; text-transform: uppercase;">Shop Now</a>
                    <a href="#talk-to-expert" class="aih-btn aih-btn-white" style="display: inline-block; padding: 0.875rem 2rem; font-size: 1rem; font-weight: 700; text-align: center; text-decoration: none; border-radius: 4px; background-color: #FFFFFF; color: #00838F; text-transform: uppercase;">Talk to an Expert</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

---

## ✅ ALL 13 MODULES COMPLETE!

Now you have all modules with inline styles - everything will show up properly in the HubSpot editor! 🎉
