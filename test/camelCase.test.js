// test camelCase.js
/*
* camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
import camelCase from '../src/camelCase.js';
import assert from 'assert';
describe('Test camelCase.js', function () {
    it('Should return camelCase with input Foo Bar', function () {
        assert.equal(camelCase('Foo Bar'), 'fooBar');
    });
    it('Should return camelCase with input --foo-bar--', function () {
        assert.strictEqual(camelCase('--foo-bar--'), 'fooBar');
    });
    it('Should return camelCase with input __FOO_BAR__', function () {
        var result = camelCase('__FOO_BAR__');
        assert.strictEqual(result, 'fooBar');
    });
});