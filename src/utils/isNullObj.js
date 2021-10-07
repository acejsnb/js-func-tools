/**
 * 判断是否是空对象
 * @param obj
 * @returns {boolean}
 */
const isNullObj = (obj) => JSON.stringify(obj) === '{}';

export default isNullObj;
