# Alpha Media Designs
**Website for alphamediadesigns.com**

Custom visual design by Angelina N. Tesen — invitations, event styling, floral arrangements, gift design, social media content, and branding.

---

## How to Update Your Website

You don't need to know how to code to make changes. Everything on your site lives in the single file `index.html`. You can edit it directly in your browser on GitHub. Any change you save here will automatically update your live website within about 30 seconds.

---

## Making a Change (Step-by-Step)

1. Go to your repository on GitHub and click on **`index.html`**
2. Click the **pencil icon** (✏️) in the top-right corner of the file to edit
3. Use **Ctrl+F** (or Cmd+F on Mac) to search for the text you want to change
4. Make your edit
5. Scroll to the bottom and click the green **"Commit changes"** button
6. Your live site will update automatically — no other steps needed

---

## Current Site Structure

```
index.html       ← The entire website (one file)
README.md        ← This guide
preview.png      ← Link preview card (shown when sharing on text/social)
images/          ← Folder for portfolio work photos (ready and waiting)
```

> **Note:** Angelina's headshot is embedded directly inside `index.html` as code — it does not appear as a separate file in this repository. This is intentional and works perfectly fine.

---

## Sections Currently Hidden

The following sections are built into the site but hidden until real content is ready:

- **Portfolio** — waiting on work sample photos
- **Testimonials** — waiting on client quotes

When you're ready to bring these back, contact Claude at claude.ai with your `index.html` and ask to unhide the portfolio or testimonials section.

---

## Common Updates

### Update the "About Me" text
Search for `Starting with an idea` — the bio paragraph begins there. Edit the text between the `<p>` and `</p>` tags.

### Add portfolio photos and bring that section back
1. Upload work photos to the `images/` folder in this repository (click the folder, then **Add file → Upload files**)
2. Name them something simple like `portfolio-1.jpg`, `portfolio-2.jpg`, etc.
3. Then contact Claude at claude.ai with your `index.html` to unhide the portfolio section and wire in the photos

### Add real client testimonials
When you have quotes from clients, contact Claude at claude.ai with your `index.html` and provide the quotes, names, and event types. Claude will update the testimonials section and unhide it.

### Update social media links
Search for `social-link` — you'll find three links (Instagram, Facebook, Pinterest). Replace each `href="#"` with your real profile URL, for example:
```
href="https://www.instagram.com/alphamediadesigns"
```

### Update the link preview card
The file `preview.png` in the root of this repository controls what appears when someone shares `alphamediadesigns.com` in a text message or on social media. To update it, replace this file with a new version of the same name.

---

## Who Helps With This Site

This site was built and is maintained with the help of Claude (claude.ai). If something breaks or you want to add a new section, bring this `README.md` file and your `index.html` to a new Claude conversation and describe what you want changed.

---

## Contact Form

The contact form is powered by [Formspree](https://formspree.io). Form submissions go directly to your email. Log in at formspree.io to view past submissions or change your notification email.

---

*Last updated: April 2026*
