/**
 * Iterates over elements of `array`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index, array).
 *
 * **Note:** Unlike `remove`, this method returns a new array.
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */

import chai from 'chai'
import filter from '../src/filter.js';
describe('Test filter.js', function () {
  const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
  ]
    it('Should return correct array with input 1', function () {
        chai.expect(filter(users, ({ active }) => active)).deep.to.equal(['barney']);
    });
});