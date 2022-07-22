// const AddZero = require('.');
import AddZero from '.';

test('AddZero 数字前面补1个0', () => {
    expect(AddZero(1)).toBe('01');
});

test('AddZero 数字前面补2个0', () => {
    expect(AddZero(1, 3)).toBe('001');
});
