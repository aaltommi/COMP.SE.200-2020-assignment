/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
*/
import chai from 'chai';

import difference from '../src/difference.js';
//import assert from 'assert';
describe('Test difference.js', function () {
    it('Should return [1] with input [2, 1], [2, 3].', function () {
      chai.expect(difference([2, 1], [2, 3])).deep.to.equal([1]);
    });
});