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

type Func = () => void
const copyFunction = (func: Func) => {
    const fnStr: string = func.toString();
    if (fnStr === `function ${func.name}() { [native code] }`) return func;
    return func.prototype ? new Function(`return (${fnStr})`)() : new Function(`return ${fnStr}`)();
};

/**
 * 复杂数据深拷贝
 * @param target 值中包含正则、函数等...
 * @param cache
 * @returns {{}}
 */
type CloneDeepComplex = (target: any, cache?: any) => any
const cloneDeepComplex: CloneDeepComplex = (target, cache = []) => {
    if (typeof target === 'function') return copyFunction(target);
    if (target === null || typeof target !== 'object') return target;

    if (Object.prototype.toString.call(target) === '[object Date]') return new Date(target);
    if (Object.prototype.toString.call(target) === '[object RegExp]') return new RegExp(target);
    if (Object.prototype.toString.call(target) === '[object Error]') return new Error(target);

    const item = cache.filter((item: any) => item.original === target)[0];
    if (item) return item.copy;

    const copy: any = Array.isArray(target) ? [] : {};
    cache.push({ original: target, copy });

    Object.keys(target).forEach(key => {
        copy[key] = cloneDeepComplex(target[key], cache);
    });

    return copy;
};

export default cloneDeep;

export { cloneDeepComplex };
