/**
 * hex转rgb颜色
 * @param hex
 */
type Fn = (hex: string) => string;
const hex2Rgb: Fn = (hex) => {
    const str = hex.substring(1);
    let arr: number[] = str.split('').map(d => parseInt(d.padStart(2, '0'), 16));
    if (str.length !== 3) arr = [parseInt(str.slice(0, 2), 16), parseInt(str.slice(2, 4), 16), parseInt(str.slice(4, 6), 16)];
    return `rgb(${arr.join(', ')})`;
};

export default hex2Rgb;
