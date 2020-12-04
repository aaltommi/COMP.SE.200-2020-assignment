
/** Detect free variable `exports`. */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports

/** Built-in value references. */
const Buffer = moduleExports ? root.Buffer : undefined

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

/**
 * Checks if `value` is a buffer.
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * isBuffer(new Buffer(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */

import isBuffer from '../src/isBuffer.js';
import assert from 'assert';
describe('Test isBuffer.js', function () {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
    // it('2 is buffer', function () {
    //     assert.equal(isBuffer(new Buffer(2)), true);
    // });
    it('3 Is not buffer', function () {
        assert.equal(isBuffer(new Uint8Array(2)), false);
    });
});