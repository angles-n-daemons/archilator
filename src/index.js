import { createInterface } from 'readline';
import Calculator from './calculator.js';

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function runPrompt(rl) {
    var calculator = new Calculator();

    var rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    rl.prompt()
    for await (const line of rl) {
        try {
            console.log(calculator.run(line));
        } catch(e) {
            console.error(e);
        }
        rl.prompt();
    }
}

async function startupPrompt() {
    console.warn("archilator initiating...");
    await sleep(1000);
    console.log("stand by.");
    await sleep(1000);
    console.log(".");
    await sleep(100);
    console.log("..");
    await sleep(50);
    console.log("... ->");
    console.log("system stack loaded.");
    console.log("begin input sequence.");
}

async function main() {
    await startupPrompt();
    await runPrompt();
}

main();

