/* =====================================================
   ALPHA MEDIA DESIGNS — site settings
   Everything that is a one-line swap lives here.
   Edit this file only; the pages read from it.
   ===================================================== */
window.AMD_CONFIG = {

  /* Booking link (Calendly or similar). Leave empty ("") until Angelina
     supplies it. While empty, every "Book a 15-minute call" button sends
     visitors to the contact form instead. */
  BOOKING_URL: "",

  /* Email shown on the homepage, contact section, and footer. */
  CONTACT_EMAIL: "connect@alphamediadesigns.com",

  /* Set to true once real client quotes replace the placeholders in the
     testimonials template inside index.html. */
  SHOW_TESTIMONIALS: false,

  /* Real work samples for the "Work" section on the homepage.
     Put the files in /images/work/ and add one entry per sample.
     The section (and its menu link) stays hidden while this list is empty.

     Fields:
       type     "image" or "video"  (video = mp4 Reel; add "poster" for the still frame)
       src      "/images/work/filename.jpg"
       poster   "/images/work/filename-poster.jpg"   (video only, optional)
       title    short label, e.g. "Listing Reel"
       caption  one line, e.g. "For a local agent: 4,200 views in a week."
       alt      what is in the picture, for screen readers (image only)

     Example entry (remove once real samples are in):
       { type: "image", src: "/images/work/sample-01.jpg", title: "Listing Reel",
         caption: "For a local agent: 4,200 views in a week.", alt: "Instagram Reel cover for a home listing" }
  */
  WORK_SAMPLES: [
  ]

};
