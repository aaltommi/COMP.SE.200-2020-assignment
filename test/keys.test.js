
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @see values, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi')
 * // => ['0', '1']
 */

import chai from 'chai';
import keys from '../src/keys.js';
describe('Test keys.js', function () {
    function Foo() {
        this.a = 1
        this.b = 2
    }
    Foo.prototype.c = 3
    it('Returns array of property names', function () {
        chai.expect(keys(new Foo)).deep.to.equal(['a', 'b']);
    });
    it('Returns array of property names as values', function () {
        chai.expect(keys('hi')).deep.to.equal(['0', '1']);
    });
});