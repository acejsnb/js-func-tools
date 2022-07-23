/**
 * 保留到小数点以后n位
 * @param value
 * @param length
 * @returns {number}
 */
type Fn = (value: string | number, length?: number) => number
const cutRadixPoint: Fn = (value, length = 2) => Number((typeof value === 'number' ? value : Number(value)).toFixed(length));

export default cutRadixPoint;
