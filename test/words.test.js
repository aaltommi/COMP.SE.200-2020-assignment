import words from '../src/words.js';
import assert from 'assert';
describe('Test words.js', function () {
    it('Words testing with patterns', function () {
      const pattern = /[^, ]+/g
    assert.equal(words('fred, barney, & pebbles', pattern), ['fred', 'barney', '&', 'pebbles'])
      
    });
    it('Words testing without patron', function () {
    assert.equal(words('fred, barney, & pebbles'), ['fred', 'barney', 'pebbles'])
      
    });
});