import sum from '../src/app'

describe('sum', () => {
    test('should return a number', () => {
        const res = sum(1,2);

        expect(res).toBe(3);
    })
})