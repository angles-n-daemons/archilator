const Calculator = require('./calculator.js');

describe('Calculator', function() {
    it('reads numbers', function() {
        const calculator = new Calculator();
        const result = calculator.run('6');
        expect(result).toEqual(6);
    });

    it('works for a simple use case', function() {
        const calculator = new Calculator();
        const result = calculator.run('2 + 3');
        expect(result).toEqual(5);
    });

    it('works for a more complicated use case', function() {
        const calculator = new Calculator();
        const result = calculator.run('2 * 4 + 1');
        expect(result).toEqual(9);
    });

    it('works for bit more complicated example', function() {
        const calculator = new Calculator();
        const result = calculator.run('2 * (4 + 1)');
        expect(result).toEqual(5);
    });

    it('probably won\'t work for this one', function() {
        const calculator = new Calculator();
        const result = calculator.run('2^7    - (-3+5) *40   +16');
        expect(result).toEqual(-59);
    });
});
