/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end.
 * @param {number} [end=array.length] The end position. A negative index will be treated as an offset from the end.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */

import chai from 'chai';
import slice from '../src/slice.js';
describe('Test slice.js', function () {
    it('Should slice  `array` from `start` up to, but not including, `end`', function () {
        var array = [1, 2, 3, 4]
    chai.expect(slice(array, 2)).to.equal([3, 4]);
    });
});
