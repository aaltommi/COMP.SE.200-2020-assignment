/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * eq(object, object)
 * // => true
 *
 * eq(object, other)
 * // => false
 *
 * eq('a', 'a')
 * // => true
 *
 * eq('a', Object('a'))
 * // => false
 *
 * eq(NaN, NaN)
 * // => true
 */


import eq from '../src/eq.js';
import chai from 'chai';
describe('Test eq.js', function () {
  const object = { 'a': 1 }
  const other = { 'a': 1 }
    it('Should return true with same objects', function () {
      chai.expect(eq(object, object)).to.equal(true);
    });
    it('Should return false with different objects', function () {
      chai.expect(eq(object, other)).to.equal(false);
    });
    it('Should return true with same string', function () {
      chai.expect(eq('a', 'a')).to.equal(true);
    });
    it('Should return false with string and object', function () {
      chai.expect(eq('a', Object('a'))).to.equal(false);
    });
    it('Should return true with two Nan', function () {
      chai.expect(eq(NaN, NaN)).to.equal(true);
    });
});