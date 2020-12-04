/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */

import drop from '../src/drop.js';
import assert from 'assert';
describe('Test drop.js', function () {
    it('Should drop first', function () {
        assert.equal(drop([1, 2, 3]), [2,3]);
    });
    it('Should drop 2 first', function () {
        assert.equal(drop([1, 2, 3], 2), [3]);
    });
    it('Should should drop all', function () {
      assert.equal(drop([1, 2, 3], 5), []);
    });
    it('Should drop none', function () {
      assert.equal(drop([1, 2, 3], 0), [1,2,3]);
    });
});