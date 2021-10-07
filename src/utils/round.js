/**
 * 四舍五入到制定位数
 * @param n 浮点数
 * @param dec 保留小数点的位数
 */
const round = (n, dec = 2) => Number(`${Math.round(`${n}e${dec}`)}e-${dec}`);

export default round;
