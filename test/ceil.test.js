/**
 * Computes `number` rounded up to `precision`. (Round up: the smallest integer greater than or equal to a given number.)
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round up.
 * @param {number} [precision=0] The precision to round up to.
 * @returns {number} Returns the rounded up number.
 * @example
 *
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 */

import ceil from '../src/ceil.js';
import assert from 'assert';
describe('Test ceil.js', function () {
    it('Should return rouded up with precission 1 ', function () {
        assert.equal(ceil(4.006), 5);
    });
    it('Should return rounded up two decimals', function () {
        assert.equal(ceil(6.004, 2), 6.01);
    });
    it('Should return rounded up -2 decimals', function () {
        assert.equal(ceil(6040, -2), 6100);
    });
});