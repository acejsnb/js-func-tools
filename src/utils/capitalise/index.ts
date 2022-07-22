/**
 * 首字母大写
 * @param first
 * @param other
 * @returns {string}
 */
type Fn = (str: string) => string
const capitalise: Fn = ([first, ...other]) => first.toUpperCase() + other.join('');

export default capitalise;
