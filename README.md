# Alpha Media Designs
**Website for alphamediadesigns.com**

Custom visual design by Angelina N. Tesen — invitations, event styling, floral arrangements, gift design, and branding.

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

## Common Updates

### Change your phone number or email
Search for `hello@alphamediadesigns.com` and replace it with your real email address.

### Update the "About Me" text
Search for `Starting with an idea` — your bio paragraph begins there. Edit the text between the `<p>` and `</p>` tags.

### Add a real photo of yourself
1. Upload your photo to this GitHub repository (click **Add file → Upload files**)
2. Name the file something simple like `angelina.jpg`
3. In `index.html`, search for `about-photo-placeholder`
4. Replace this entire block:
   ```html
   <div class="about-photo-placeholder"></div>
   ```
   With this:
   ```html
   <img src="angelina.jpg" alt="Angelina N. Tesen, Founder of Alpha Media Designs" style="width:100%;height:100%;object-fit:cover;border-radius:16px;" />
   ```

### Swap in portfolio images
1. Upload your project photos to this repository
2. Search for `p-placeholder` — there are 5 portfolio items
3. Replace each `<div class="p-placeholder">` block with:
   ```html
   <img src="YOUR-IMAGE-FILENAME.jpg" alt="Brief description of the project" style="width:100%;height:100%;object-fit:cover;" />
   ```

### Update testimonials
Search for `testimonial-quote` to find each quote. Edit the text inside those sections with real client words. Update the initials in the `author-avatar` div and the name/event below it.

### Update social media links
Search for `social-link` — you'll find three links (Instagram, Facebook, Pinterest). Replace each `href="#"` with your real profile URL, for example:
```
href="https://www.instagram.com/alphamediadesigns"
```

---

## Site Structure

```
index.html     ← The entire website (one file)
README.md      ← This guide
angelina.jpg   ← Add your photo here (once uploaded)
portfolio/     ← Optional: create this folder for portfolio images
```

---

## Who Helps With This Site

This site was built and is maintained with the help of Claude (claude.ai). If something breaks or you want to add a new section, bring this file and your `index.html` to a new Claude conversation and describe what you want changed.

---

## Contact Form

The contact form is powered by [Formspree](https://formspree.io). Form submissions go directly to your email. Log in at formspree.io to view past submissions or change your notification email.

---

*Last updated: April 2026*
