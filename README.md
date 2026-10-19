# Homepage final polish: nine-note bulletin, links, and profile actions

This is an intentionally **small patch** for your Jekyll academic website.
It is based on the homepage version with four working research video loops.

## What it changes

- Displays **the nine newest** news notes, sorted by date, in the bulletin.
- Keeps all older notes in the expandable Old News drawer, without duplication.
- Makes the **PRISM AI Safety Research Fellowship** text in its bulletin headline link to https://prism-research.org/.
- Links **NeurIPS 2025** and **Amazon Science** from their newly surfaced 2025 notes.
- Removes only the redundant “And in the margins” homepage section. Your dedicated Talks, Teaching & Art page remains intact.
- Replaces only the **portrait/profile CV chip** with a link to your verified X profile, https://x.com/kavanav2912. The global CV page and navigation entry remain intact.
- Confirms the portrait **Email** chip uses `mailto:kavanav@vt.edu` and labels its address accessibly. This opens your configured email app. If your browser or OS has no registered mail handler, the website cannot force one to launch; the email address itself is correct.

No publication-video HTML, media, site-wide navigation, Research, Publications, Talks, or CV files are changed.

## Recommended installation (safe for custom homepage edits)

1. Extract the ZIP on your computer.
2. Copy only `scripts/install_final_homepage_polish.py` into your existing repository at the same path.
3. In Terminal, `cd` into your existing Jekyll repository root, then run:

```bash
python3 scripts/install_final_homepage_polish.py
```

The script uses only the Python standard library. It updates your current `_pages/about.html` and `_data/home_news.yml` in place, **after creating timestamped backups** alongside them. It preserves all unrelated changes and can be rerun without creating duplicates.

If your Jekyll server is already running, refresh `http://127.0.0.1:4001/` after Jekyll regenerates. Otherwise start it with:

```bash
bundle exec jekyll serve --livereload --port 4001
```

Then hard-refresh the browser using Cmd + Shift + R.

## Manual alternative

The supplied `_pages/about.html` and `_data/home_news.yml` are complete reference outputs. You may copy them directly **only if** your website uses exactly the provided base version and you have no local custom changes. Otherwise prefer the installer.

## Before merging / pushing

- Confirm that all 4 publication animations still play.
- Confirm exactly 9 notes appear, clicking **Research** and **Life & community** filters them, and the Old News drawer opens.
- Click the PRISM, NeurIPS 2025, and Amazon Science links.
- Check the portrait X button and email address.
- Confirm the redundant homepage margins section is gone.
- Run `git status --short` and `git diff -- _pages/about.html _data/home_news.yml`.
- Do not add `*.backup-*` files to Git when committing.
- Merge your completed redesign branch into the GitHub Pages publishing branch only after reviewing the full site locally.

This ZIP does **not** include the four publication MP4s, their posters, or the CSS/JS from the previous animations integration. Those should remain in place from the prior successful install.
