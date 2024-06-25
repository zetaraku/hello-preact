/**
 * @see https://xkcd.com/221/
 */
function getRandomNumber() {
	// chosen by fair dice roll.
	// guaranteed to be random.
	return 4;
}

if (import.meta.vitest) {
	const { describe, it, expect } = import.meta.vitest;

	describe('getRandomNumber()', () => {
		it('returns a number', () => {
			expect(getRandomNumber()).toBeTypeOf('number');
		});
	});
}
