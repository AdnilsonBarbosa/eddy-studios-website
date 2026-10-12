# Eddy Studios — Official Website

Independent game studio website featuring **Grand Era Racing** and future projects.

## Live website

Once GitHub Pages is enabled, the public site will be available at:
https://adnilsonbarbosa.github.io/eddy-studios-website/

## Publishing with GitHub Pages

Open **Settings → Pages → Build and deployment**.
Select **Deploy from a branch**, choose **main** and **/(root)**, then **Save**.

This is a static HTML/CSS/JavaScript website. No build process, framework, secrets or backend required.

## Structure

- `index.html` — Studio homepage with game showcase and contact links.
- `style.css` — Responsive styles and studio visual identity.
- `script.js` — Accessible mobile navigation and footer year.
- `privacy.html` — Website-specific privacy statement.
- `images/` — Exported visual assets and development screenshots from Grand Era Racing (no game source code).
- `favicon.svg` — Studio mark.
- `.nojekyll` — Publish as plain static files.

## Updating

The featured game currently links to its Google Play app listing. Public availability may be restricted during testing. Replace/update this CTA when the game launches publicly.

For any **new game**, add a game section to `index.html` and place optimized screenshots under `images/`.

For a dedicated contact email, update the Contact section and privacy notice.

**Important:** This website is the public-facing studio presentation. It does not prove the existence of a legally registered business and does not by itself satisfy Google Play merchant/organization requirements.

## Google Play website verification

After the GitHub Pages site is live, verify ownership using Google Search Console's available method for a URL-prefix property. Follow Play Console prompts; do not treat repo ownership as sufficient verification.

## Security

Keep Godot project files, store keys, private signing keys, credentials and internal build outputs in the private game repository. Only publish approved marketing images and public website code here.
