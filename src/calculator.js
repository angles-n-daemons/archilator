import Scanner from './scanner.js';

class Calculator {
    run(source) {
        const scanner = new Scanner(source);
        const tokens = scanner.scanTokens();

        for (const token of tokens) {
            console.log(tokens);
        }
    }
}

export default Calculator;
