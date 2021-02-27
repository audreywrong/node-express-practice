const assert = require('assert');
const subject = require('../index');

describe('equationBuilder', function () {
    describe('subject.adder', function () {
        it('should return the sum of two numbers', function () {
            const expected = 4;
            const actual = subject.adder(2, 2);
            assert.strictEqual(expected, actual);
        })
    });
});
