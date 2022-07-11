import removeEmpty from './removeEmpty';
/**
 * 判断两个对象是否相等
 * @param a Object
 * @param b Object
 */
interface Obj {
    [key: string]: any
}
type IsObjValEqual = (a: Obj, b: Obj, empty: boolean) => boolean
const isObjValEqual: IsObjValEqual = (a = {}, b=  {}, empty = false) => {
    const aType = typeof a;
    // 判断类型
    if (aType !== (typeof b)) return false;
    if (aType === 'object') {
        const aKeys = empty ? removeEmpty(a) : Object.keys(a), bKeys = empty ? removeEmpty(b) : Object.keys(b), akLen = aKeys.length;
        if (akLen !== bKeys.length) return false;
        for (let i = 0; i < akLen; i++) {
            const key = aKeys[i], aVal = a[key], bVal = b[key];
            if (typeof aVal === 'object') {
                if (!isObjValEqual(aVal, bVal, empty)) return false;
            }
            else if (aVal !== bVal) return false;
        }
    } else {
        if (a !== b) return false;
    }
    return true;
};

export default isObjValEqual;
