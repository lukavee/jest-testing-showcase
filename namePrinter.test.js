const printer = require('./namePrinter')

test('Print welcome message with name in console', () => {
    expect(printer('Luka')).toBe('Hi my name is Luka and thank you for checking my test');
});