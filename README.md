# Alpha Media Designs
**Website for alphamediadesigns.com**

Monthly social media management for Colorado Springs real estate pros and small businesses, by Angelina N. Tesen, plus client care extras (mailings, packaging, graphic design, and space organization).

---

## How the site is built

A static site, no build step. Vercel deploys every push to `main` to alphamediadesigns.com automatically; any other branch gets a preview URL.

```
index.html             ← Homepage
extras/index.html      ← Client Care Extras page (/extras/)
css/site.css           ← One stylesheet shared by both pages
js/config.js           ← Site settings: booking link, email, work samples, testimonials switch
js/site.js             ← Page behaviour (menu, booking buttons, work gallery, form tracking)
images/                ← Logo, headshot, favicon, sunflower
images/work/           ← Work samples for the homepage gallery (add files here)
preview.png            ← Link preview card (shown when sharing on text/social)
sitemap.xml, robots.txt, google4071ae8b9b43a3c2.html  ← search engine files (leave as is)
```

---

## The one-line changes (js/config.js)

Open `js/config.js`. Everything below is a single edit in that file.

| What | Setting | Notes |
|---|---|---|
| Booking link | `BOOKING_URL` | Paste the Calendly (or similar) link between the quotes. Until then, every "Book a 15-minute call" button sends visitors to the contact form. |
| Email address | `CONTACT_EMAIL` | Shown in the hero, contact section, and footer. |
| Work samples | `WORK_SAMPLES` | Add one entry per sample (see the example in the file). Put the image or video in `images/work/`. The Work section and its menu link appear automatically once the list has entries. |
| Testimonials | `SHOW_TESTIMONIALS` | Set to `true` only after the placeholder quotes in `index.html` (inside `<template id="testimonials-template">`) are replaced with real ones. |

---

## Making a text change on GitHub

1. Open the file on GitHub (`index.html` for the homepage, `extras/index.html` for the extras page, `js/config.js` for the settings above)
2. Click the **pencil icon** (✏️) to edit
3. Use **Ctrl+F** (or Cmd+F on Mac) to find the text you want to change
4. Make your edit
5. Scroll down and click **Commit changes**
6. The live site updates automatically within about a minute

---

## Common updates

### Update the "About Angelina" text
In `index.html`, search for `About Angelina`. The three paragraphs follow.

### Change plan prices or inclusions
In `index.html`, search for `tier-card`. Each plan is one block.

### Add or change a Client Care Extra
In `extras/index.html`, search for `service-card`. Each extra is one block. The same four extras are listed in the footer "Services" column of both pages and in the contact form dropdown in `index.html`.

### Social media links
In the footer of both `index.html` and `extras/index.html`, search for `social-link`. The Instagram and Facebook links are also listed under `sameAs` in the schema block near the top of `index.html`.

### Update the link preview card
Replace `preview.png` with a new file of the same name.

---

## Contact form

The contact form posts to [Formspree](https://formspree.io) (form `mwvwzpyv`). Submissions go to the notification email set in the Formspree dashboard. Hidden UTM fields record where a visitor came from.

---

## Who helps with this site

Built and maintained by Digital Navigation Solutions (Yvonne Padilla) with Claude. For changes, contact Yvonne.

---

*Last updated: October 2026*
