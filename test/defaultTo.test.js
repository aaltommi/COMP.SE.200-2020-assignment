/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 *
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * defaultTo(1, 10)
 * // => 1
 *
 * defaultTo(undefined, 10)
 * // => 10
 */
import defaultTo from '../src/defaultTo.js';
import assert from 'assert';
describe('Test defaultTo.js', function () {
    it('Should return 1, the first value', function () {
        assert.equal(defaultTo(1, 10), 1);
    });
    it('Should return 10, the first value', function () {
        assert.equal(defaultTo(undefined, 10), 10);
    });
});