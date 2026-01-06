# Personal Portfolio — Starter

This is a small, responsive portfolio starter site you can customize and deploy.

Files
- `index.html` — main page
- `styles.css` — styling
- `script.js` — small client-side interactions
- `README.md` — this file

How to customize
1. Replace the hero text and about section with your own bio.
2. Replace project placeholders:
   - Update images and titles in the `#projects` section.
   - Link to live demos and GitHub repos.
3. Replace contact email in the contact section (and the `mailto:` link).
4. Replace social links in the footer.

Contact form options
- Option A — Formspree (no server):
  1. Sign up at https://formspree.io
  2. Replace the `<form>` `action="#"` with `action="https://formspree.io/f/<your-id>"` and keep `method="POST"`.
- Option B — Netlify Forms:
  1. If you deploy to Netlify, add `netlify` attributes to the form: `<form name="contact" method="POST" data-netlify="true">`.
  2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`.
- Option C — Custom backend:
  - Send POST to your own endpoint using fetch() in `script.js`.

Deploy to GitHub Pages
1. Create a new repository on GitHub and push these files to the `main` branch.
2. In the repository settings -> Pages, choose the `main` branch and `/ (root)` folder, then save.
3. After a minute, your site will be available at `https://<username>.github.io/<repo>/` (or at your username root if repository is `<username>.github.io`).

Accessibility & further improvements
- Add real alt text for images/screenshots.
- Add ARIA labels as needed for custom controls.
- Consider optimizing images and using srcset for responsive images.
- Add structured data (JSON-LD) for better search appearance.
- Add analytics or contact tracking if desired.

License
- Use and modify freely. Add your own license file if you plan to publish or share widely.

Enjoy — if you'd like, tell me:
- the exact sections you'd like (e.g., Publications, Talks, Certifications),
- or provide your bio and 2–3 projects and I can fill them into the site files for you.