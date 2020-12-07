/**
 * Creates an array of values by running each element of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, index, array).
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map([4, 8], square)
 * // => [16, 64]
 */

import chai from 'chai';
import map from '../src/map.js';
describe('Test map.js', function () {
    function square(n) {
        return n * n
        }
    it('Should return new mapped array ', function () {
        chai.expect(map([4, 8], square)).deep.to.equal([16, 64]);
    });
});