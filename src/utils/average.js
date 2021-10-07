/**
 * 平均数
 * @param arr
 * @returns {number}
 */
const average = (arr) => arr.reduce((total, cur) => total + cur, 0) / arr.length;

export default average;
