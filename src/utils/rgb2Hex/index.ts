/**
 * rgb转16进制颜色
 * @param rgb
 */
type Fn = (rgb: string) => string;
const rgb2Hex: Fn = (rgb) => `#${rgb.match(/\d+/g)?.map(
    d => (Number(d).toString(16).toUpperCase()).padStart(2, '0')
).join('')}`;

export default rgb2Hex;
