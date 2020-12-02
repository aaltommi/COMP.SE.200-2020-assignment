// test at.js

// Here is a description, taken from function comments, of how this function should work:
// const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

// at(object, ['a[0].b.c', 'a[1]'])
// => [3, 4]

import at from '../src/at.js';
import assert from 'assert';
describe('Test at.js', function () {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    const result = [3, 4]
    // it('Should return picked values', function () {
    //     assert.equal(at(object, ['a[0].b.c', 'a[1]']), result);
    // });
    // it('Test faulty input', function () {
    //     assert.strictEqual(at(object, ['a[0].b.c', 'a[1]']), 'ten');
    // });
});