const assert = require('assert');

describe('Array', function () {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			assert.strictEqual([1, 2, 3].indexOf(4), -1);
		})
		it('should return index of the element when the value is present', function () {
			assert.strictEqual([1, 2, 3].indexOf(2), 1);
		});
	});
});

