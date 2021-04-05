// import multiplication from './multiplication.js'; // l'import ES6 avec jest ne fonctionne pas
import multiplication from './multiplication';

test('Multiplier des nombres', () => {
    expect(multiplication(9, 10)).toBe(90);
    expect(multiplication(5, 5)).toBe(25);
});