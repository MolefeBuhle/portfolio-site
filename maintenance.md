# Website Maintenance Plan


## Site URL
https://MolefeBuhle.github.io/portfolio-site 

## Weekly tasks
- Check site is live and key pages load.
- Run link checker: `npx linkinator https://YOUR_SITE`.
- Quick content edits / typo fixes.
- Review recent deploy log on GitHub (Actions) or Netlify deploys.


## Monthly tasks
- Run Lighthouse performance audit and save results.
- Run `npm outdated` and `npm audit` (if using node).
- Optimize new images and compress large assets.
- Run security headers check at https://securityheaders.com/.


## Quarterly tasks
- Major dependency upgrades on a separate branch; test then merge.
- Accessibility sweep (Lighthouse accessibility checks or axe).
- Rotate credentials and review roles.


## Roles & responsibilities
- Developer: apply code fixes and dependency updates.
- Content owner: update text and images.
- QA: test responsive and functional changes before merge.


## How to report
- Use `maintenance-log.csv` in repo root for each update.
