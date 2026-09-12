# Roha Abid — AUREX Full-Stack Engineering Internship

**Domain:** Information Technology / Full-Stack Web Development
**Week:** Week 2 — CSS3 Fundamentals, Modern Layouts (Flexbox & Grid), Basic UI/UX, Responsive Web Design

## Live Deployment

🔗 **Live URL:** _https://roha-abid.github.io/aurex-web-internship-roha-abid/_

## About This Project

This is my personal profile/portfolio page, built in Week 1 as static HTML and upgraded in Week 2 with a full CSS styling layer, modern layout techniques, and responsive design so it works cleanly across desktop, tablet, and mobile screens.

## CSS Features & Layout Techniques Implemented

- **CSS Custom Properties (variables)** for a consistent color and type system
- **Flexbox** — sticky header/nav bar, skill tag lists, education timeline, contact form fields
- **CSS Grid** — About section (photo + bio), Skills section (category columns), Projects section (card grid), Contact section (details + form)
- **The Box Model** — consistent padding/margin scale across sections, border-based card and timeline treatments
- **Typography** — paired serif (Fraunces) for headings with a sans-serif (IBM Plex Sans) for body text, plus a monospace accent for a small metadata tag
- **Responsive Design** — mobile-first overrides via `@media` queries at `900px` (tablet) and `600px` (mobile), including a collapsible hamburger nav on small screens
- **Basic UI/UX** — single accent color (teal) used sparingly, consistent spacing rhythm, visible focus states for accessibility, rounded pill tags vs. sharp-edged cards for visual variety

## Folder Structure

```
aurex-web-internship-roha-abid/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Key Learnings & Challenges

- Learned how Flexbox and Grid solve different layout problems — Flexbox for one-dimensional alignment (nav, form fields, tag lists) and Grid for two-dimensional page structure (skills columns, project cards).
- The biggest challenge in responsive design was reworking the About section and skills grid so they degrade gracefully from 3 columns → 2 columns → 1 column without breaking spacing.
- Adding a mobile hamburger menu required a small amount of JavaScript in addition to CSS, which was a good reminder that responsive design isn't purely CSS — interaction patterns change too.
- Used CSS custom properties early on, which made it much faster to keep the color palette and spacing consistent across every section.

## Submission Checklist

- [ ] Push this repo to GitHub
- [ ] Deploy live via GitHub Pages or Vercel
- [ ] Add the live URL to this README
- [ ] Take 3 screenshots: Desktop, Tablet, Mobile
- [ ] Submit repo link + live link + screenshots + reflection by Saturday midnight
