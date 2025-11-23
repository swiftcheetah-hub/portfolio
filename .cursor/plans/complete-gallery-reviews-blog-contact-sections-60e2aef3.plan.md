<!-- 60e2aef3-3c61-47cc-93e6-3a295499f963 ad3d3a27-97b9-4584-aba7-5a93824d1b3c -->
# Fix Home Hero Section to Match Figma Design

## Current Issues to Fix:

Based on the Figma design, the Hero section needs adjustments to match the exact layout and styling.

## Implementation Tasks:

### 1. Hero Section Layout (`src/components/Hero.jsx`)

- **Left Panel Structure:**
- Award badge: "Award-Winning Real Estate Team" (golden badge with star icon)
- Headline: "Find Your" (white) + "Dream Property" (golden/yellow)
- Description paragraph (white text)
- Two CTA buttons:
- "Explore Properties" (golden/yellow button with arrow icon)
- "Watch Video Tour" (dark button with yellow border and play icon)
- Statistics cards positioned BELOW the buttons (not above)
- Stats: $250M+ Total Sales, 380+ Properties Sold, 350+ Happy Clients, 98% Satisfaction

- **Right Panel Structure:**
- Large property image (Modern Luxury Villa with pool)
- **Top-Right Overlay:** "Expert Agents" badge (golden/yellow) with profile images and "25+ Years Experience"
- **Mid-Left Overlay:** "380+ Properties Sold" badge (dark with golden house icon)
- **Bottom Overlay:** Property details card showing:
- Location pin + "Beverly Hills, CA"
- "Modern Luxury Villa" (white, bold)
- "$4.5M" (large, golden/yellow)
- "5 Beds • 6 Baths • 6,500 sqft" (white text)
- **Secondary Property Card:** Partially visible below main property showing "$3.4M" and "Penthouse Suite"

- **Scroll Indicator:**
- "Scroll to explore" text with scroll icon at bottom center

### 2. Styling Adjustments:

- Ensure proper dark background with blurred image
- Golden/yellow (#fbbf24) for accents, buttons, and highlights
- White text for content
- Proper spacing and positioning of all elements
- Stats cards should be dark with golden numbers and white labels

## Files to Modify:

1. `src/components/Hero.jsx` - Complete update to match Figma layout exactly

### To-dos

- [ ] Restructure Hero layout: move stats below CTAs, fix positioning of all elements
- [ ] Update property image overlays: Expert Agents badge (top-right), 380+ badge (mid-left), property details (bottom)
- [ ] Add secondary property card below main property with correct styling
- [ ] Fix scroll indicator positioning and styling at bottom center
- [ ] Ensure all colors, fonts, and spacing match Figma design exactly