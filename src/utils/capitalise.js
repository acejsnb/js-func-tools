/**
 * 首字母大写
 * @param first
 * @param other
 * @returns {string}
 */
const capitalise = ([first, ...other]) => first.toUpperCase() + other.join('');

export default capitalise;
