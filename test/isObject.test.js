/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */

import chai from 'chai';
import isObject from '../src/isObject.js';
describe('Test isObject.js', function () {
    it('{} should be object', function () {
        chai.expect(isObject({})).to.equal(true);
    });
    it('[1, 2, 3] should be object', function () {
        chai.expect(isObject([1, 2, 3])).to.equal(true);
    });
    it('Function should be object', function () {
        chai.expect(isObject(Function)).to.equal(true);
    });
    it('null should not be object', function () {
        chai.expect(isObject(null)).to.equal(false);
    });
});