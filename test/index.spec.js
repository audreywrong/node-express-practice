var assert = require('assert');
var subject = require('../index');
describe('equationBuilder', function () {
    describe('subject.adder', function () {
        it('should return the sum of two numbers', function () {
            var expected = 4;
            var actual = subject.adder(2, 2);
            assert.strictEqual(expected, actual);
        });
    });
});
