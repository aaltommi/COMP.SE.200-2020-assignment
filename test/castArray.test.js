// Test castArray.js
/*
* castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 */
import chai from 'chai';
import castArray from '../src/castArray.js';
describe('Test castArray.js', function () {
    it('Should return correct array with input 1', function () {
        chai.expect(castArray(1)).deep.to.equal([1]);
    });
    it('Should return correct array with input { "a": 1 }', function () {
        chai.expect(castArray({ 'a': 1 })).deep.to.equal([{ 'a': 1 }]);
    });
});