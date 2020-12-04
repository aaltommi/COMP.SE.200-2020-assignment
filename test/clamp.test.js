/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */

import clamp from '../src/clamp.js';
import assert from 'assert';
describe('Test clamp.js', function () {
    it('Should return negative', function () {
        assert.equal(clamp(10, -5, 5), -5);
    });
    it('Should return positive', function () {
        assert.equal(clamp(10, -5, 5), 5);
    });
});