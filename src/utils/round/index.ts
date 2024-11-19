/**
 * 四舍五入到制定位数
 * @param n 浮点数
 * @param dec 保留小数点的位数
 */
type Fn = (n: string | number, dec?: number, isCut?: boolean) => string
const round: Fn = (n = 0, dec = 2, isCut = false) => {
  if (isCut) {
    let [l, r = ''] = String(n).split('.');
    if (r) {
      r = r.substring(0, dec)
      return `${l}.${r}`;
    }
    return `${l}.${'0'.repeat(dec)}`;
  }
  return Number(`${Math.round(Number(`${n}e${dec}`))}e-${dec}`).toFixed(dec);
}

export default round;
