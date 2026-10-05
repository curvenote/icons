---
'@curvenote/icons': patch
---

Fix ESM build for Node: emitted imports now include `.js` extensions, so the package loads without a bundler (e.g. on Vercel).
