const counterIntelligence = require('../solutions/counterIntelligence');

describe('counterIntelligence()', () => {
    
    test('String of X should be shift up to Y', () => {
        //ARRANGE
        const input = 'Y';
        const expected = 'X';
        //ACT
        const actual = counterIntelligence(input);
        //ASSERT
        expect(actual).toBe(expected);
    });

    test('String ending with X should be shift up to Y', () => {
        //ARRANGE
        const input = 'BCD Y';
        const expected = 'ABC X';
        //ACT
        const actual = counterIntelligence(input);
        //ASSERT
        expect(actual).toBe(expected);
    });

    test('String of multiple words ending with X should return all chars shifted by how far the ', () => {
        //ARRANGE
        const input = 'NKRRU YCKKZNKGXZ D';
        const expected = 'HELLO SWEETHEART X';
        //ACT
        const actual = counterIntelligence(input);
        //ASSERT
        expect(actual).toBe(expected);
    });
});
