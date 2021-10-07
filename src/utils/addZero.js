/**
 * 数字前面补0
 * @param n
 * @param len
 * @returns {string}
 */
const addZero = (n, len= 2) => `${n}`.padStart(len, '0');

export default addZero;
