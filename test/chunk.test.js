/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

import chunk from '../src/chunk.js';
import assert from 'assert';
describe('Test chunk.js', function () {
    it('Should return two array of two elements made from one array of 4 elements', function () {
        assert.equal(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
    });
    it('Should return arrays of 3 and 1 element', function () {
        assert.equal(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']]);
    });
});