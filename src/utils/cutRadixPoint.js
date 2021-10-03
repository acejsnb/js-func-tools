/**
 * 保留到小数点以后n位
 * @param number
 * @param length
 * @returns {number}
 */
const cutRadixPoint = (number, length = 2) => {
    const num = typeof number === 'number' ?number:Number(number);
    return Number(num.toFixed(length));
};

export default cutRadixPoint;
