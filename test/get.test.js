/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @see has, hasIn, set, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */

import get from '../src/get.js';
import assert from 'assert';
describe('Test get.js', function () {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
    it('Should return correctvalue with input a[0].b.c', function () {
        assert.equal(get(object, 'a[0].b.c'), 3);
    });
    it('Should return correct value with input ["a", "0", "b", "c"]', function () {
        assert.equal(get(object, ['a', '0', 'b', 'c']), 3);
    });
    it('Should return correct value with input "a.b.c" "default', function () {
      assert.equal(get(object, 'a.b.c', 'default'), 'default');
    }); 
});