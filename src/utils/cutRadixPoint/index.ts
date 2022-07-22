/**
 * 保留到小数点以后n位
 * @param number
 * @param length
 * @returns {number}
 */
type Fn = (number: string | number, length?: number) => number
const cutRadixPoint: Fn = (number, length = 2) => Number((typeof number === 'number' ? number : Number(number)).toFixed(length));

export default cutRadixPoint;
