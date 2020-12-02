//const add = require('../src/add.js');
import add from '../src/add.js';
import assert from 'assert';
describe('Test add.js', function () {
    it('Should return sum of two two numbers', function () {
        assert.equal(add(4,6), 10);
    });
    it('Test faulty input', function () {
        assert.equal(add('six','four'), 'sixfour');
    });
});


/* import createMathOperation from './.internal/createMathOperation.js'

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 
const add = createMathOperation((augend, addend) => augend + addend, 0)

export default add */

