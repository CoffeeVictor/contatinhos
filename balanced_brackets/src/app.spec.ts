import { areBracketsBalanced } from "./app";

describe('App', () => {
    it('Returns true for different brackets if they match', () => {
        const inputString = '()[]{}';

        expect(areBracketsBalanced(inputString)).toEqual(true);
    });

    it('Returns true if matching brackets are contained within each other', () => {
        const inputString = '[{()}](){}';

        expect(areBracketsBalanced(inputString)).toBe(true);
    });

    it('Returns false if there are brackets with no match', () => {
        const inputString = '[]{()';
        
        expect(areBracketsBalanced(inputString)).toBe(false);
    });

    it('Returns false if matching brackets are from different types', () => {
        const inputString = '[{)]';
        
        expect(areBracketsBalanced(inputString)).toBe(false);
    })
})