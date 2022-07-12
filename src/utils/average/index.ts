import round from '../round';
/**
 * 平均数
 * @param arr
 * @param dec 保留小数点的位数
 * @returns {number}
 */
type Fn = (arr: number[], dec?: number) => number
const average: Fn = (arr, dec = 2) => round(arr.reduce((total, cur) => total + cur, 0) / arr.length, dec);

export default average;
