/**
 * 四舍五入到制定位数
 * @param n 浮点数
 * @param dec 保留小数点的位数
 */
declare const window: any;
type Fn = (n: string | number, dec?: number) => string
const round: Fn = (n, dec = 2) => window.Number(`${window.Math.round(`${n}e${dec}`)}e-${dec}`);

export default round;
