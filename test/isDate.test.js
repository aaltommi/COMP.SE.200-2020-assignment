/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 */

import chai from 'chai';
import isDate from '../src/isDate.js';
describe('Test isDate.js', function () {
    it('new Date is a Date Object', function () {
        chai.expect(isDate(new Date)).to.equal(true);
    });
    it('"Mon April 23 2012" is not a Date Object', function () {
        chai.expect(isDate('Mon April 23 2012')).to.equal(false);
    });
});