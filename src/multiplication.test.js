import multiplication from './multiplication'

test('multiplication de number', () => {
    expect(multiplication(2,3)).toBe(6);
    expect(typeof multiplication(2,3)).toBe('number');
    expect(multiplication(2,3)).toEqual(6);
    expect(multiplication('toto','tata')).toEqual(Error('Number expected as parameter'));
    expect(multiplication(6,'tata')).toEqual(Error('Number expected as parameter'));
    expect(multiplication('tata', 6)).toEqual(Error('Number expected as parameter'));
})