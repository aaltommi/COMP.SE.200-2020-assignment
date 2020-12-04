/**
 * This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not
 * `NaN`, `null`, or `undefined`.
 *
 * @since 5.0.0
 * @category Util
 * @param {*} value The value to check.
 * @param {...*} defaultValues The default values.
 * @returns {*} Returns the resolved value.
 * @see _.defaultTo
 * @example
 *
 * defaultToAny(1, 10, 20)
 * // => 1
 *
 * defaultToAny(undefined, 10, 20)
 * // => 10
 *
 * defaultToAny(undefined, null, 20)
 * // => 20
 *
 * defaultToAny(undefined, null, NaN)
 * // => NaN
 */
import chai from 'chai';
import defaultToAny from '../src/defaultToAny.js';
import assert from 'assert';
describe('Test defaultToAny.js', function () {
    it('Should return 1 which is first of array', function () {
        assert.equal(defaultToAny(1, 10, 20), 1);
    });
    it('Should return 10 which is first not nan or null or undefined', function () {
        assert.equal(defaultToAny(undefined, 10, 20), 10);
    });
    it('Should return 20 which is first not nan or null or undefined', function () {
      assert.equal(defaultToAny(undefined, null, 20), 20);
    });
    it('Should return NaN which is first not nan or null or undefined', function () {
      chai.expect(defaultToAny(undefined, null, NaN)).deep.to.equal(NaN);
    });
});