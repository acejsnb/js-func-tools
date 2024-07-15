/**
 * 数字前面补0
 * @param n
 * @param len
 * @returns {string}
 */
type Fn = (val: string | number, len?: number) => string
const addZero: Fn = (val, len = 2) => `${val}`.padStart(len, '0');

export default addZero;
