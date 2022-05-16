// const addZero = require('.');
import addZero from '.';

test('addZero 数字前面补1个0', () => {
    expect(addZero(1)).toBe('01');
});

test('addZero 数字前面补2个0', () => {
    expect(addZero(1, 3)).toBe('001');
});
