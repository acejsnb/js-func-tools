/**
 * 数字前面补0
 * @param n
 * @param len
 * @returns {string}
 */
type Fn = (n: string | number, len?: number) => string
const addZero: Fn = (n, len = 2) => `${n}`.padStart(len, '0');

export default addZero;
