# worklynq.com

The Worklynq website. One plain HTML page — no build step, no framework. GitHub Pages serves this repository's `main` branch as-is at **worklynq.com** (set by the `CNAME` file), the same way `cohesync-site` serves cohesync.com and `cannonball-site` serves cannonballdigitalworks.com.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page: styles in the `<style>` block at the top, then the header, hero, features, integrations, foundation section and footer. The Worklynq logos and hero image are embedded in the file. |
| `favicon.svg`, `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png` | Browser tab and home-screen icons (the Worklynq W badge). |
| `assets/logos/` | Optional official logos for the integrations section (see below). |
| `CNAME` | Tells GitHub Pages to serve this site at worklynq.com. Don't delete it. |

## Making a change

1. Edit `index.html` — on GitHub's web editor or locally.
2. To check locally, run `python3 -m http.server` in this folder and open http://localhost:8000.
3. Commit to `main`. GitHub Pages republishes in a minute or two.

## Integration logos

Each tool in the integrations section shows a small monogram badge (e.g. **G** for GitHub). To show the real logo instead, add an official logo file to `assets/logos/`, named after the tool — the page picks it up automatically, no HTML change needed. SVG is preferred; PNG works too (square, at least 64×64).

Get logos from each company's official brand or press kit and follow its usage guidelines.

| Tool | File name |
|---|---|
| GitHub | `github.svg` |
| Claude | `claude.svg` |
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
| LinkedIn | `linkedin.svg` |
| Instagram | `instagram.svg` |
| Facebook | `facebook.svg` |
| X | `x.svg` |
| YouTube | `youtube.svg` |
| TikTok | `tiktok.svg` |

To add a new tool, add `<li class="int-tool" data-logo="new-tool"><span class="int-logo" aria-hidden="true">N</span>New Tool</li>` to the right list in `index.html`, and optionally `assets/logos/new-tool.svg`.
