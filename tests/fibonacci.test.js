const Fibonacci = require('../iterator/fibonacci');

describe('Fibonacci', () => {

    test('should generate 1 element', () => {
        expect([...new Fibonacci(1)])
            .toEqual([1]);
    });

    test('should generate 2 elements', () => {
        expect([...new Fibonacci(2)])
            .toEqual([1, 1]);
    });

    test('should generate 8 elements', () => {
        expect([...new Fibonacci(8)])
            .toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    });

    test('sum of 8 elements should be 54', () => {
        const sum = [...new Fibonacci(8)]
            .reduce((a, b) => a + b, 0);

        expect(sum).toBe(54);
    });

});