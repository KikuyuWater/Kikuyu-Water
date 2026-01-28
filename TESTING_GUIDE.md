# Mobile & Desktop Parity Testing Guide

## Quick Test Summary

### What Was Fixed ✅
1. **Tariff Grids** - Now responsive on mobile (was grid-cols-2 only)
2. **Vision Section** - Core values now stack on mobile
3. **Service Section** - Mobile heading now visible
4. **Core Services** - Full mobile view now available
5. **Add Services** - Full mobile view now available
6. **Landing Stats** - Cleaned up redundant classes

---

## Testing on Different Devices

### Mobile Testing (iPhone/Android Size)

#### Quick Access Links
- **Home Page:** http://localhost:3001/
- **Service Page:** http://localhost:3001/services
- **About Page:** http://localhost:3001/about
- **Tariff Page:** http://localhost:3001/tariff

#### On 375px (iPhone SE)
```
✓ Check: All text readable without horizontal scroll
✓ Check: Buttons take full width and are easily tappable
✓ Check: Service cards stack vertically
✓ Check: Tariff information in single column
✓ Check: Vision section lists in single column
✓ Check: Navigation hamburger menu works
✓ Check: Footer responsive grid (single column)
```

#### On 390px (iPhone 12)
```
✓ Check: Same as 375px but with more breathing room
✓ Check: No layout shift or overflow
```

#### On 768px (iPad Portrait)
```
✓ Check: Two-column layouts appear
✓ Check: Service cards display 2 per row
✓ Check: Tariffs show 2 columns
✓ Check: Proper spacing between elements
```

---

## Browser DevTools Testing

### Chrome/Edge DevTools Steps

1. **Open DevTools:** F12 or Right-click → Inspect
2. **Toggle Device Toolbar:** Ctrl+Shift+M
3. **Test Sizes:**
   - iPhone SE (375 × 667)
   - iPhone 12 (390 × 844)
   - iPad (768 × 1024)
   - Desktop (1920 × 1080)

### Test Each Page

#### Landing Page (/
- [ ] Hero section displays correctly
- [ ] Stats grid responsive
- [ ] Quick actions visible
- [ ] "Apply for Connection" button works
- [ ] "Pay Bill" button works
- [ ] Service cards stack properly
- [ ] Announcements section responsive
- [ ] FAQ toggle works on mobile
- [ ] Footer menu responsive

#### Service Page (/services)
- [ ] Hero section responsive
- [ ] Service section title visible on mobile
- [ ] Service cards display in single column (mobile) / 3 columns (desktop)
- [ ] All buttons clickable
- [ ] "Apply Now" button for water connections
- [ ] Call buttons for sewerage and exhauster services
- [ ] Text readable on all sizes

#### About Page (/about)
- [ ] Hero section responsive
- [ ] Vision section single column on mobile
- [ ] Core values list readable (1 column mobile, 2 columns tablet+)
- [ ] Infrastructure section responsive
- [ ] Strategic plan section responsive
- [ ] Management team section responsive
- [ ] All content visible

#### Tariff Page (/tariff)
- [ ] Download button accessible
- [ ] Domestic tariff cards single column (mobile)
- [ ] Domestic tariff cards 2 columns (desktop)
- [ ] Industrial tariff cards responsive
- [ ] Payment methods visible
- [ ] Price information readable

---

## Specific Component Tests

### Tariff Grids
**Mobile (375px):**
- [ ] Each tariff card takes full width
- [ ] Text readable without zooming
- [ ] Gap between cards sufficient
- [ ] Price clearly visible

**Desktop (1920px):**
- [ ] Two columns side by side
- [ ] Proper spacing (gap-8)
- [ ] Hover effects working

### Service Cards (CoreService)
**Mobile Stack:**
- [ ] All three service types visible (water, sewer, exhauster)
- [ ] Cards stack vertically
- [ ] Full description visible
- [ ] Features list readable
- [ ] Buttons clickable (py-2 = 8px padding, adequate for touch)

**Desktop Grid:**
- [ ] Three columns (grid-cols-3)
- [ ] Cards aligned properly
- [ ] Hover shadow effect visible

### Button Consistency
Check these buttons work identically:
- [ ] "Apply for Connection" (home) → navigates to /new-connection
- [ ] "Apply for New Water Connection" (services) → navigates to /new-connection
- [ ] "Apply for Connection" (footer) → navigates to /new-connection
- [ ] "Pay Bill Online" (home) → navigates to /payment
- [ ] "Pay Online" (quick actions) → navigates to /payment
- [ ] "Call" buttons show confirmation dialog
- [ ] Download buttons work on mobile

### Text Sizing
Check responsive typography:
- [ ] Headings: `text-2xl sm:text-3xl md:text-4xl` (scales up)
- [ ] Body text: `text-sm sm:text-base md:text-lg` (scales up)
- [ ] Small text: `text-xs sm:text-sm` (readable on mobile)

---

## Common Mobile Issues to Watch For

❌ **Should NOT Happen:**
1. Horizontal scroll required (content overflow)
2. Text too small to read (less than 12px)
3. Buttons too small to tap (less than 44×44px)
4. Content cut off or hidden
5. Images broken or not loading
6. Animations/transitions laggy
7. Links/buttons not responding to touch
8. Form inputs not accessible

✅ **Should All Work:**
1. All pages load quickly
2. All buttons responsive to touch
3. All images load and display
4. All text readable
5. All links navigable
6. Hamburger menu functional
7. Footer navigation accessible
8. Back buttons work

---

## Checklist for Sign-Off

### Mobile Devices
- [ ] iPhone (375px)
- [ ] iPhone Plus (390px)
- [ ] iPad Portrait (768px)
- [ ] iPad Landscape (1024px)
- [ ] Android Phone (375px)
- [ ] Android Phone (480px)

### Desktop
- [ ] Laptop (1366px)
- [ ] Desktop (1920px)
- [ ] Ultra-wide (2560px)

### Browsers
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Pages
- [ ] Home / Landing
- [ ] About
- [ ] Services
- [ ] Tariff
- [ ] Careers
- [ ] Tenders
- [ ] Gallery
- [ ] New Connection
- [ ] Payment
- [ ] Customer Service Charter
- [ ] World Wetlands Day

### Critical Paths
- [ ] New Connection (Apply flow)
- [ ] Pay Bill (Payment flow)
- [ ] Contact Supervisor (Quick actions)
- [ ] Gallery (Image viewing)

---

## Performance Notes

### Mobile Performance
- All pages should load in < 3 seconds on 4G
- No jank or stuttering during scroll
- Touch interactions instant (< 100ms response)
- Images lazy-loaded where applicable

### Lighthouse Audit (Chrome DevTools)
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

## Known Responsive Breakpoints

| Screen | min-width | Classes |
|--------|-----------|---------|
| Mobile | 0px | base (no prefix) |
| Small | 640px | sm: |
| Medium | 768px | md: |
| Large | 1024px | lg: |

### How to Test
```
DevTools → Device Toolbar → Edit custom device
- 375 (mobile)
- 640 (sm breakpoint)
- 768 (md breakpoint - tablet)
- 1024 (lg breakpoint - desktop)
- 1920 (full desktop)
```

---

## Debugging Tips

### If Something Looks Wrong

1. **Check Screen Size:**
   - DevTools → Device Toolbar
   - Verify correct breakpoint (sm:, md:, lg:)

2. **Inspect Element:**
   - DevTools → Elements tab
   - Check applied classes
   - Look for `hidden` or `display: none`

3. **Check Console:**
   - DevTools → Console
   - Look for JavaScript errors
   - Check network requests

4. **Clear Cache:**
   - Hard refresh: Ctrl+Shift+R
   - Or clear browser cache

### Example Issues & Solutions

**Issue:** Content hidden on mobile
- Solution: Check for `hidden md:` - should have mobile alternative
- Files affected: CoreService, AddService, ServiceSection

**Issue:** Grid too cramped
- Solution: Check for `grid-cols-2` without breakpoint
- Should be `grid-cols-1 md:grid-cols-2`
- Files affected: Tariff, Vision sections

**Issue:** Text too small
- Solution: Check for fixed `text-xs` on all sizes
- Should be `text-xs sm:text-sm md:text-base`

---

## Sign-Off Template

```
✅ MOBILE & DESKTOP PARITY TESTING COMPLETE

Tested Devices:
- [x] iPhone (375px)
- [x] iPad (768px)
- [x] Desktop (1920px)

Tested Browsers:
- [x] Chrome
- [x] Firefox
- [x] Safari

All Pages Verified:
- [x] Home page
- [x] Service page
- [x] About page
- [x] Tariff page
- [x] New Connection page
- [x] Payment page
- [x] Gallery page

Critical Functions:
- [x] Apply for connection button
- [x] Pay bill button
- [x] Contact supervisors
- [x] Download documents
- [x] Form submission

No Issues Found: YES / NO

Notes:
[Add any observations or issues found]

Signed Off By: _____________
Date: _____________
```

---

## Questions or Issues?

If you find any bugs or inconsistencies:

1. **Document:** Note the page, device, browser, and exact issue
2. **Screenshot:** Take a screenshot showing the problem
3. **Report:** File a bug with reproduction steps
4. **Fix:** Code will be updated and re-tested

---

**Testing Date:** January 2025
**Status:** Ready for QA Testing
**Last Updated:** After mobile responsive fixes
