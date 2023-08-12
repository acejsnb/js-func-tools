/**
 * 四舍五入到制定位数
 * @param n 浮点数
 * @param dec 保留小数点的位数
 */
type Fn = (n: string | number, dec?: number) => number
const round: Fn = (n=0, dec = 2) => Number(`${Math.round(Number(`${n}e${dec}`))}e-${dec}`);
// const round: Fn = (n=0, dec = 2) => (Number(n) + Number.EPSILON).toFixed(dec);

export default round;
