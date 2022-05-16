/**
 * 平均数
 * @param arr
 * @returns {number}
 */
type Fn = (arr: number[]) => number
const average: Fn = (arr) => arr.reduce((total, cur) => total + cur, 0) / arr.length;

export default average;
