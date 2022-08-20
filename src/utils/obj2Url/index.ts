import isNullObj from '../isNullObj';

/**
 * 对象转url
 * @param obj
 * @param url
 * @returns {string|*}
 */
type Obj = { [key: string]: any }
type Obj2Url = (obj: Obj, url?: string) => string
const obj2Url: Obj2Url = (obj, url = '') => isNullObj(obj) ? url : `${url}?${new URLSearchParams(obj).toString()}`;

export default obj2Url;
