/**
 * 判断两个对象是否相等
 * @param a Object
 * @param b Object
 */
interface Obj {
    [key: string]: any
}
type IsObjValEqual = (a: Obj, b: Obj) => boolean
const isObjValEqual: IsObjValEqual = (a, b) => {
    const aType = typeof a;
    // 判断类型
    if (aType !== (typeof b)) return false;
    if (aType === 'object') {
        const aKeys = Object.keys(a), bKeys = Object.keys(b), akLen = aKeys.length;
        if (akLen !== bKeys.length) return false;
        for (let i = 0; i < akLen; i++) {
            const key = aKeys[i], aVal = a[key], bVal = b[key];
            if (typeof aVal === 'object') {
                if (!isObjValEqual(aVal, bVal)) return false;
            }
            else if (aVal !== bVal) return false;
        }
    } else {
        if (a !== b) return false;
    }
    return true;
};

export default isObjValEqual;
