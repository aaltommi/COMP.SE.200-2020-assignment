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
import chai from 'chai';
describe('Test compact.js', function () {
    it('Should return correct array with no falsey values', function () {
      chai.expect(compact([0, 1, false, 2, '', 3])).to.equal([1,2,3]);
    });
});