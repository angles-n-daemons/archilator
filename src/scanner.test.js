import Scanner from './scanner.js';
import { TokenType } from './token.js';

describe('Scanner', function() {
    it('the simplest use case', function() {
        const scanner = new Scanner('+');
        const tokens = scanner.scanTokens();
        expect(tokens.length).toEqual(1);
        expect(tokens[0].type).toEqual(TokenType.PLUS);
    });

    it('parses a full expression appropriately', function() {
        const scanner = new Scanner('(5 + 3) - 1.2');
        const tokens = scanner.scanTokens();
        expect(tokens.length).toEqual(7);
        
        // verify token types
        expect(tokens[0].type).toEqual(TokenType.LEFT_PAREN);
        expect(tokens[1].type).toEqual(TokenType.NUMBER);
        expect(tokens[2].type).toEqual(TokenType.PLUS);
        expect(tokens[3].type).toEqual(TokenType.NUMBER);
        expect(tokens[4].type).toEqual(TokenType.RIGHT_PAREN);
        expect(tokens[5].type).toEqual(TokenType.MINUS);
        expect(tokens[6].type).toEqual(TokenType.NUMBER);

        // verify literal values
        expect(tokens[1].literal).toEqual(5);
        expect(tokens[3].type).toEqual(3);
        expect(tokens[6].type).toEqual(1.2);
    });

    it('fails if there is a token it does not recognize', function() {
        expect(function() {
            const scanner = new Scanner('#');
            const tokens = scanner.scanTokens();
        }).toThrow(Error);
    });
});
