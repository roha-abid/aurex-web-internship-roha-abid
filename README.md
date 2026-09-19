# Roha Abid — AUREX Full-Stack Engineering Internship

**Domain:** Information Technology / Full-Stack Web Development
**Week:** Week 3 — Advanced CSS, CSS Grid & Flexbox Masterclass, CSS Animations, Transitions & UI Polish

## Live Deployment

🔗 **Live URL:** _https://roha-abid.github.io/aurex-web-internship-roha-abid/_

## About This Project

This is my personal profile/portfolio page, built in Week 1 as static HTML and upgraded in Week 2 with a full CSS styling layer, modern layout techniques, and responsive design. In Week 3, the project was further enhanced with advanced CSS Grid, keyframe animations, hover micro-interactions, and fluid typography to create a more polished, interactive experience across desktop, tablet, and mobile screens.

## CSS Grid Layouts & Keyframe Animations Implemented

- **CSS Architecture** — restructured from a single `style.css` into `styles/main.css` (base styles) and `styles/animations.css` (keyframes and transitions) for cleaner organization
- **Advanced CSS Grid** — the Projects section now uses `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, letting project cards automatically reflow from 1 to 3+ columns based on available width, with no extra media query needed for that section
- **Card Hover Elevation** — project cards lift up (`translateY(-6px)`) with a soft box-shadow on hover, using a smooth `transition`
- **Button Micro-Interaction** — the contact form's submit button scales up slightly on hover and scales down on click for tactile feedback
- **Page Load Fade-In** — each section fades and slides in on load using a custom `@keyframes fadeIn` animation
- **Fluid Typography** — headings use `clamp(1.5rem, 4vw, 1.9rem)` so text scales smoothly across screen sizes instead of jumping at fixed breakpoints
- **Flexbox** — retained from Week 2 for the sticky header/nav bar, skill tag lists, education timeline, and contact form fields
- **CSS Custom Properties** — consistent color and type system carried through and extended for the new animation values
- **Responsive Design** — mobile-first `@media` queries at `900px` (tablet) and `600px` (mobile), including a collapsible hamburger nav on small screens

## Folder Structure

aurex-web-internship-roha-abid/
├── index.html
├── styles/
│ ├── main.css
│ └── animations.css
├── script.js
└── README.md

## Performance & Responsive Testing Outcomes

- Tested at Desktop, Tablet (768px), and Mobile (375px) widths using Chrome DevTools — no horizontal scrollbars appeared at any width
- The project grid reflows smoothly with no visual breaks as the browser window is resized
- Hover and click animations run smoothly with no visible jank on both desktop and simulated mobile views
- Confirmed all animations and the grid layout render correctly on the live GitHub Pages deployment, not just locally

## Key Learnings & Challenges

- Learned how `auto-fit` and `minmax()` let a CSS Grid layout adapt to any screen width automatically, without needing a dedicated media query just for column count.
- Practiced writing keyframe animations and transitions for hover states and page load, and learned how subtle timing/easing changes affect how "smooth" an interaction feels.
- Splitting CSS into `main.css` and `animations.css` made the codebase easier to navigate as it grew, reinforcing the value of clean file organization.
- Learned that fluid typography with `clamp()` avoids the abrupt text-size jumps that fixed breakpoints can cause.
- Reinforced from Week 2: real deployment workflows involve real troubleshooting — Git, file paths, and live verification all matter as much as the CSS itself.

## Submission Checklist

- [x] Updated GitHub repository link containing Week 3 code
- [x] Live deployment link (GitHub Pages / Vercel) updated and verified
- [x] Demonstration GIF showing hover interactions, animated states, and responsive views
- [x] Weekly progress reflection and completed features checklist
