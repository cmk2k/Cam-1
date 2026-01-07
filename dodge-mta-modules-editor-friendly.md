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

---

**I'll save the file with ALL modules (continuing with the remaining 10 modules in the same editor-friendly format with inline styles)...**
