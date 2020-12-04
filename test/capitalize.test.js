// Test capitalize.js
/*
* capitalize('FRED')
* // => 'Fred'
*/
import capitalize from '../src/capitalize.js';
import assert from 'assert';
describe('Test capitalize.js', function () {
    it('Should return Fred with input FRED', function () {
        assert.equal(capitalize('FRED'), 'Fred');
    });
    it('Should return Fred with input fred', function () {
        assert.equal(capitalize('fred'), 'Fred');
    });
});