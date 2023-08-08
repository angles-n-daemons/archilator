import { Token, TokenType } from './token.js';

class Scanner {
    constructor(source) {
        this.source = source;
        this.tokens = [];
        this.start = 0;
        this.current = 0;
    }

    scanTokens() {
        while(!this.isAtEnd()) {
            start = current;
            scanToken();
        }
        return [];
    }

    scanToken() {
        // TODO implement this function
    }

    isAtEnd() {
        // TODO implement this function
        return true;
    }
}

export default Scanner;
