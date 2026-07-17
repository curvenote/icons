---
'@curvenote/icons': major
---

Ship as an ESM-only package and add React 19 support.

- The package is now ESM-only (`"type": "module"` with an `exports` map). CommonJS `require()` is no longer supported; consumers must use ESM or a bundler.
- Widen React peer dependencies to include React 19 (alongside 16.8+, 17, and 18).
