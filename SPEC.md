# FIGURE HAVEN - Anime Figure E-Commerce Website Specification

## 1. Project Overview

- **Project Name**: Figure Haven
- **Project Type**: E-commerce Website (Single Page Homepage)
- **Core Functionality**: Anime figure online store with product browsing, filtering, cart functionality
- **Target Users**: Anime fans, collectors, and figure enthusiasts in Bangladesh

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections (Top to Bottom):**
1. Navbar (fixed top, 70px height)
2. Hero Section (500px min-height)
3. Series Filter Strip (60px height)
4. Main Content (sidebar + product grid)
5. Mid-page Banner (180px height)
6. Why Choose Us Section (280px height)
7. Footer (300px height)

**Grid Layout:**
- Desktop: 190px sidebar + 3-column product grid
- Laptop: Sidebar collapses to icons, 2-column grid
- Tablet: Full-width sidebar drawer, 2-column grid
- Mobile: Single column, hamburger menu

**Responsive Breakpoints:**
- Desktop: 1280px+
- Laptop: 1024px - 1279px
- Tablet: 768px - 1023px
- Mobile: < 768px

### Visual Design

**Color Palette:**
- Primary Background: #1a1a1a (dark hero)
- Secondary Background: #f5f5f5 (light gray)
- Card Background: #ffffff (white)
- Accent Color: #e85d00 (orange)
- Text Primary: #ffffff (white)
- Text Secondary: #333333 (dark gray)
- Text Muted: #666666 (gray)
- Border Color: #e0e0e0
- Success: #4caf50
- Sale Badge: #e53935

**Typography:**
- Font Family: 'Poppins' (Google Fonts) - headings, 'Inter' (Google Fonts) - body
- Hero Headline: 56px, 800 weight
- Section Titles: 28px, 700 weight
- Card Titles: 16px, 600 weight
- Body Text: 14px, 400 weight
- Small Text: 12px, 400 weight

**Spacing System:**
- Section Padding: 60px vertical, 40px horizontal
- Card Padding: 20px
- Grid Gap: 24px
- Component Gap: 16px

**Visual Effects:**
- Card Hover: Orange border (2px), transform translateY(-4px), box-shadow
- Button Hover: Darken 10%, scale(1.02)
- Smooth transitions: 0.3s ease

### Components

**Navbar:**
- Logo: Text-based "FIGURE HAVEN" with orange accent on "FIGURE"
- Nav Links: Home, Shop, Series, New Arrivals, About
- Search Bar: Rounded input with search icon (280px width)
- Icons: Wishlist (heart), User (person), Cart (shopping-bag)
- Cart Button: Orange background, white text, badge for item count

**Hero Section:**
- Background: Dark (#1a1a1a) with faded "FIGURE" text overlay
- Left Content: 
  - Badge: "✨ New Collection" with orange background
  - Headline: "Premium Anime Figures & Collectibles"
  - Subtitle: "Authentic Japanese anime figures from top series"
  - Buttons: "Shop Now" (orange), "View Series" (outline white)
- Right Content:
  - 3 Stat counters with icons
  - Featured Product Card with image placeholder, details, price, add to cart

**Series Filter:**
- Horizontal scrollable pill buttons
- States: Default (dark bg), Active (orange bg)
- Series: All, One Piece, Naruto, Demon Slayer, Dragon Ball Z, Jujutsu Kaisen, Attack on Titan, My Hero Academia

**Sidebar Filters:**
- Category (radio buttons with counts)
- Price Range (dual slider, ৳500 - ৳10,000)
- Scale (checkboxes)
- Availability (checkboxes)

**Product Card:**
- Image container (200px height) with badge overlay
- Series name (orange, 12px)
- Product name (bold, 16px)
- Details: size, material, scale (gray, 12px)
- Price with optional old price (strikethrough)
- Buttons: "Add to Cart" (gray), "Buy" (orange)
- Hover: Orange border, lift effect

**Mid-Page Banner:**
- Dark background (#1a1a1a)
- Left: Pre-order announcement with series name, release date
- Right: "Pre-Order Now" CTA button

**Why Choose Us:**
- 4 feature cards in row
- Each: Icon, Title, Description
- Features: Authentic figures, BD-wide delivery, Easy payment, 7-day return

**Footer:**
- Dark background (#1a1a1a)
- 4 columns: Brand info, Shop links, Series links, Support links
- Bottom: Copyright text

---

## 3. Functionality Specification

### Core Features

1. **Navbar Navigation**
   - Logo click returns to home
   - Nav links scroll to sections
   - Search bar (visual only, no backend)
   - Cart icon shows count badge
   - User icon shows dropdown (visual)

2. **Hero Section**
   - Stat counters animate on load (count up animation)
   - Featured product card with add to cart
   - CTA buttons link to shop

3. **Series Filter**
   - Click to filter products (visual only, no actual filtering)
   - Active state persists
   - Smooth scroll on mobile

4. **Product Grid**
   - Display 9+ product cards
   - Hover effects on cards
   - Add to cart buttons (visual feedback)
   - Pagination or infinite scroll indicator

5. **Sidebar Filters**
   - Category selection (visual)
   - Price slider (visual range)
   - Scale checkboxes (visual)
   - Availability toggles (visual)

6. **Mid-Page Banner**
   - Featured pre-order content
   - CTA button

7. **Why Choose Us**
   - Static information cards
   - Icons for each feature

8. **Footer**
   - Link sections (visual)
   - Social media icons placeholder

### User Interactions

- Hover states on all clickable elements
- Smooth transitions on interactions
- Mobile menu toggle
- Scroll to top button (optional)
- Cart count update on add

### Data Handling

- Static product data in JavaScript
- No backend required
- Cart state in localStorage (optional enhancement)

### Edge Cases

- Long product names truncate with ellipsis
- Missing images show placeholder
- Responsive layout handles all screen sizes

---

## 4. Acceptance Criteria

### Visual Checkpoints

- [ ] Navbar displays correctly with all elements
- [ ] Hero section has dark background with faded "FIGURE" text
- [ ] Hero stats animate on page load
- [ ] Featured product card displays properly
- [ ] Series filter pills scroll horizontally
- [ ] Active pill is orange
- [ ] Sidebar filters align properly
- [ ] Product grid shows 3 columns on desktop
- [ ] Product cards have hover effects
- [ ] Mid-page banner spans full width
- [ ] Why Choose Us shows 4 cards
- [ ] Footer has 4 columns

### Functional Checkpoints

- [ ] All hover states work
- [ ] Mobile menu toggles
- [ ] Scroll behavior is smooth
- [ ] Page is responsive at all breakpoints
- [ ] No horizontal overflow on any screen size

### Technical Checkpoints

- [ ] Valid HTML5 structure
- [ ] Tailwind CSS via CDN
- [ ] Google Fonts loaded
- [ ] No console errors
- [ ] Images use placeholder URLs