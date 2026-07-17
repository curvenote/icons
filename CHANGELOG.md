# @curvenote/icons

## 1.0.0

### Major Changes

- 90b596f: Ship as an ESM-only package and add React 19 support.

  - The package is now ESM-only (`"type": "module"` with an `exports` map). CommonJS `require()` is no longer supported; consumers must use ESM or a bundler.
  - Widen React peer dependencies to include React 19 (alongside 16.8+, 17, and 18).

## 0.0.4

### Patch Changes

- 97d3c24: Improve the readme, pull out to a standalone package

## 0.0.3

### Patch Changes

- a19e590: Remove dependence on ui-providers
- 4a8a317: Improve imports and update CI to test typescript compiling

## 0.0.2

### Patch Changes

- 1b23694: Update typescript and @curvenote/blocks
- Updated dependencies [1b23694]
  - @myst-theme/providers@0.0.5
