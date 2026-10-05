// Imports the built package through its package.json "exports" using plain Node ESM
// (no bundler), the same way Node-based runtimes like Vercel resolve it.
import assert from 'node:assert/strict';
import * as icons from '@curvenote/icons';

assert.equal(typeof icons.CurvenoteLogo, 'function', 'CurvenoteLogo should be exported');
console.log(`ESM import OK: ${Object.keys(icons).join(', ')}`);
