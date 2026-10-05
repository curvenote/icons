---
'@curvenote/icons': patch
---

Rename the `publish` script to `release` so `npm publish` no longer re-runs it as a lifecycle hook, which made the 1.0.1 release fail with a 409.
