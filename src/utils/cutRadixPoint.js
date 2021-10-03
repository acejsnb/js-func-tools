/**
 * 保留到小数点以后n位
 * @param number
 * @param length
 * @returns {number}
 */
const cutRadixPoint = (number, length = 2) => Number((typeof number === 'number' ?number:Number(number)).toFixed(length));

export default cutRadixPoint;
