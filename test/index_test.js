var assert = require('assert')
var Calculate = require('../index.js')

describe('Calculate', () => {
	describe('.factorial', () => {})

	it('test if factorial of 5 is 120', () => {
		const inputValue = 5
		const expectedValue = 120
		const exercise = Calculate.factorial(inputValue)
		assert.strictEqual(exercise, expectedValue)
	})
	it('test if factorial of 6 is 720', () => {
		const inputValue = 6
		const expectedValue = 720
		const exercise = Calculate.factorial(inputValue)
		assert.strictEqual(exercise, expectedValue)
	})
	it('test if factorial of 0 is 1', () => {
		const inputValue = 0
		const expectedValue = 1
		const exercise = Calculate.factorial(inputValue)
		assert.strictEqual(exercise, expectedValue)
	})
})
