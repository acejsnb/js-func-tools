/**
 * 深拷贝
 * @param data
 * @returns {string}
 */
interface TreeItem {
    id?: string | number
    name?: string
    children?: TreeItem[]
    [key: string]: any
}
const cloneDeep = (data: TreeItem[]): TreeItem[] => 'structuredClone' in window ? (window as any).structuredClone(data) : JSON.parse(JSON.stringify(data, (k, v) => v ? v : ''));

/**
 * 复杂数据深拷贝
 * @param target 值中包含正则、函数等...
 * @param map
 * @returns {{}}
 */
type CloneDeepComplex = (target: any, map?: WeakMap<{}, any>) => any
const cloneDeepComplex: CloneDeepComplex = (target: any, map = new WeakMap()) => {
    if (target instanceof Date) return new Date(target);
    if (target instanceof RegExp) return new RegExp(target);

    if (map.has(target)) return map.get(target);

    const allDesc = Object.getOwnPropertyDescriptors(target);
    const cloneObj = Object.create(Object.getPrototypeOf(target), allDesc);

    map.set(target, cloneObj);

    for (const key of Reflect.ownKeys(target)) {
        const value = target[key];
        cloneObj[key] =
            value instanceof Object && typeof value !== 'function'
                ? cloneDeepComplex(value, map)
                : value;
    }
    return cloneObj;
};

export default cloneDeep;

export { cloneDeepComplex };
