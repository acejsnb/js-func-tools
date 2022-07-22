import isNullObj from '../isNullObj';

/**
 * 对象转url
 * @param obj
 * @param url
 * @returns {string|*}
 */
type Obj = { [key: string]: any }
type Obj2Url = (obj: Obj, url?: string) => string
const obj2Url: Obj2Url = (obj, url = '') => {
    if (isNullObj(obj)) return url;
    const arr: string[] = [];
    Object.keys(obj).forEach((key) => {
        arr.push(`${key}=${encodeURIComponent(obj[key])}`);
    });
    return `${url}?${arr.join('&')}`;
};

export default obj2Url;
