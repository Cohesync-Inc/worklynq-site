# worklynq.com

The Worklynq website. Plain HTML pages — no build step, no framework. GitHub Pages serves this repository's `main` branch as-is at **worklynq.com** (set by the `CNAME` file), the same way `cohesync-site` serves cohesync.com and `cannonball-site` serves cannonballdigitalworks.com.

## Files

| File | What it is |
|---|---|
| `index.html` | The homepage: header, hero, “What Worklynq does” (restaurants, construction and services, in customers’ words), the café tour video, beta, who we build for, features, a look inside (ending with “Then run the day”), an “Explore Worklynq” row linking to the product pages, the demo form and footer. The Worklynq logos are embedded in the file; the footer Cohesync logo is `assets/cohesync-logo.png`; the hero and feature photos load from Unsplash (free license). |
| `assist/`, `modules/`, `integrations/`, `how-it-works/` | Product pages (one `index.html` each). Assist; Modules with Customer Experience; Integrations (one row per integration in the docs, with screenshots, a tutorial video and benefits, then the beta list and how connections work); How it works (the intelligence foundation). Each ends with a demo band linking to `/?interest=…#demo`, which pre-selects the form’s “What would you like to see?”. |
| `assets/site.css` | Shared styles for the homepage and product pages (the docs use `docs/docs.css`). `assets/integrations.css` adds the Integrations page’s own styles. |
| `docs/` | Product documentation at worklynq.com/docs: overview, Getting started, Modules, Integrations (GitHub, Claude, Cursor, Square, QuickBooks, Custom apps with the developer feed spec at `docs/integrations/custom-apps/feed-spec/`), feature guides (Scheduled reports, Approvals, Order Tracking, Connect your AI, Assist, Shifts, TV screens), What’s new, industry guides (restaurants, construction, software), FAQ, and Security & data — one `index.html` per page in its own folder. All pages share `docs/docs.css`. The left-hand menu is repeated in every page, so update it everywhere when adding a page. Mark unbuilt parts with `<span class="badge badge--soon">Coming in the beta</span>`. Keep the Security page and FAQ consistent with the Privacy Policy and DPA. Add each product release to the top of What’s new (`docs/whats-new/index.html`). |
| `terms/`, `privacy/`, `dpa/` | Terms of Use, Privacy Policy and Data Processing Agreement pages. |
| `favicon.svg`, `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png` | Browser tab and home-screen icons (the Worklynq W badge). |
| `assets/videos/` | Tutorial videos for worklynq.com/docs/videos (MP4, WebVTT captions, WebP poster). They're made with `aura_monorepo/tools/product-videos`. |
| `assets/one-video.js` | Makes sure only one video plays at a time. Add `<script src="/assets/one-video.js" defer></script>` before `</body>` on any new page with a video. |
| `assets/logos/` | Optional official logos for the integrations section (see below). |
| `robots.txt`, `sitemap.xml` | Tell Google what to crawl. **When you add a page, add its URL to `sitemap.xml`.** |
| `assets/og-image.png` | The 1200×630 preview image shown when a worklynq.com link is shared (LinkedIn, Slack, iMessage…). |
| `CNAME` | Tells GitHub Pages to serve this site at worklynq.com. Don't delete it. |

## Making a change

1. Edit `index.html` (or a product page, or `assets/site.css`) — on GitHub's web editor or locally. The header and footer are repeated in every page, so change them everywhere.
2. To check locally, run `python3 -m http.server` in this folder and open http://localhost:8000.
3. Commit to `main`. GitHub Pages republishes in a minute or two.

## Search (SEO) tags

Every page's `<head>` has a `<title>`, a `<meta name="description">` (under ~160 characters), a `<link rel="canonical">` with the page's own `https://worklynq.com/.../` URL, and `og:` / `twitter:` tags that repeat the title and description and point at `assets/og-image.png`. Copy them from a neighbouring page when adding one. The homepage also has `application/ld+json` structured data telling Google that Worklynq is software from Cohesync Inc.

## Integration logos

Each tool on the Integrations page (`integrations/index.html`) shows a small monogram badge (e.g. **G** for GitHub). To show the real logo instead, add an official logo file to `assets/logos/`, named after the tool — the page picks it up automatically, no HTML change needed. SVG is preferred; PNG works too (square, at least 64×64).

Get logos from each company's official brand or press kit and follow its usage guidelines.

| Tool | File name |
|---|---|
| GitHub | `github.svg` |
| Claude | `claude.svg` |
| ChatGPT | `chatgpt.svg` |
| Google (Search, Analytics, Business Profile) | `google.svg` |
| Custom apps (optional icon) | `custom-apps.svg` |
| Cursor | `cursor.svg` |
| Jira | `jira.svg` |
| Confluence | `confluence.svg` |
| GitLab | `gitlab.svg` |
| Gmail | `gmail.svg` |
| Outlook | `outlook.svg` |
| Google Calendar | `google-calendar.svg` |
| Google Drive | `google-drive.svg` |
| Microsoft 365 | `microsoft-365.svg` |
| OneDrive | `onedrive.svg` |
| Slack | `slack.svg` |
| Microsoft Teams | `microsoft-teams.svg` |
| Zoom | `zoom.svg` |
| Google Meet | `google-meet.svg` |
| POS systems | `pos-systems.svg` |
| QuickBooks | `quickbooks.svg` |
| Xero | `xero.svg` |
| Stripe | `stripe.svg` |
| Shopify | `shopify.svg` |
| Square | `square.svg` |
| Mailchimp | `mailchimp.svg` |
| LinkedIn | `linkedin.svg` |
| Instagram | `instagram.svg` |
| Facebook | `facebook.svg` |
| X | `x.svg` |
| YouTube | `youtube.svg` |
| TikTok | `tiktok.svg` |

To add a new tool, add `<li class="int-tool" data-logo="new-tool"><span class="int-logo" aria-hidden="true">N</span>New Tool</li>` to the right list in `integrations/index.html`, and optionally `assets/logos/new-tool.svg`.
