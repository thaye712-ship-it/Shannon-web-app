# Provenance — offline

This site has been taken offline. GitHub Pages no longer serves anything
from this branch.

The full site — 121 products, the quiz engine, flashcards, browse and
profiles — is preserved and nothing has been lost. It lives on the branch
`claude/site-changes-build-log-m4xymb`, and on `main` at commit `72d95f4`.

## To bring it back

```sh
git checkout main
git checkout 72d95f4 -- index.html css js
git rm -f .nojekyll
git commit -m "Restore the site"
git push origin main
```

GitHub Pages will serve it again within a few minutes, provided Pages is
still enabled under Settings → Pages.

## To take it down completely

Removing these files stops the content being served, but the Pages site
itself is still provisioned and the repository is still public. To finish
the job:

- **Settings → Pages → Build and deployment → Source → None** turns Pages
  off entirely.
- **Settings → General → Danger Zone → Change visibility → Private** makes
  the whole repository non-public, including the product write-ups and the
  build log.

## What was here

See `BUILD_LOG.md` for the full change history, `PURPOSE.md` for what the
app was for, and `BACKEND.md` for the Firebase notes.
