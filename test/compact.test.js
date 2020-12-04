/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */

import compact from '../src/compact.js';
import assert from 'assert';
describe('Test compact.js', function () {
    it('Should return correct array with no falsey values', function () {
        assert.equal(compact([0, 1, false, 2, '', 3]), [1,2,3]);
    });
});