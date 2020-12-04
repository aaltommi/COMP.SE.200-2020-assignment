/**
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */

import chai from 'chai';
import words from '../src/words.js';
describe('Test words.js', function () {
    it('Words testing with patterns', function () {
        chai.expect(words('fred, barney, & pebbles', /[^, ]+/g)).deep.to.equal(['fred', 'barney', '&', 'pebbles']);
      
    });
    it('Words testing without patterns', function () {
        chai.expect(words('fred, barney, & pebbles')).deep.to.equal(['fred', 'barney', 'pebbles']);
      
    });
});