export const TokentType = {
    LEFT_PAREN: 'LEFT_PAREN',
    RIGHT_PAREN: 'RIGHT_PAREN',
    MINUS: 'MINUS',
    PLUS: 'PLUS',
    SLASH: 'SLASH',
    STAR: 'STAR',
    NUMBER: 'NUMBER',
}

export class Token {
    constructor(type, lexeme, literal) {
        this.type = type;
        this.lexeme = lexeme;
        this.literal = literal;
    }
}
