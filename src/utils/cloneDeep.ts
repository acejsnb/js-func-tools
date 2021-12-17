/**
 * 深拷贝
 * @param data
 * @returns {string}
 */
interface ITree {
    id?: string | number
    name?: string
    children?: ITree[]
    [key: string]: any
}
const cloneDeep = (data: ITree[]): ITree[] => JSON.parse(JSON.stringify(data, (k, v) => v ? v : ''));

/**
 * 复杂数据深拷贝
 * @param target 值中包含正则、函数等...
 * @returns {{}}
 */
const cloneDeepComplex = (target: ITree[]): ITree[] => {
    const map = new WeakMap();
    const isObject = (target: ITree[]) => (typeof target === 'object' && target ) || typeof target === 'function';

    const clone = (data: any) => {
        if (!isObject(data)) return data;
        if ([Date, RegExp].includes(data.constructor)) {
            return new data.constructor(data);
        }
        if (typeof data === 'function') {
            return new Function('return ' + data.toString())();
        }
        const exist = map.get(data);
        if (exist) {
            return exist;
        }
        if (data instanceof Map) {
            const result = new Map();
            map.set(data, result);
            data.forEach((val, key) => {
                if (isObject(val)) {
                    result.set(key, clone(val));
                } else {
                    result.set(key, val);
                }
            });
            return result;
        }
        if (data instanceof Set) {
            const result = new Set();
            map.set(data, result);
            data.forEach(val => {
                if (isObject(val)) {
                    result.add(clone(val));
                } else {
                    result.add(val);
                }
            });
            return result;
        }
        const keys = Reflect.ownKeys(data);
        const allDesc = Object.getOwnPropertyDescriptors(data);
        const result = Object.create(Object.getPrototypeOf(data), allDesc);
        map.set(data, result);
        keys.forEach(key => {
            const val = data[key];
            if (isObject(val)) {
                result[key] = clone(val);
            } else {
                result[key] = val;
            }
        });
        return result;
    };

    return clone(target);
};

export default cloneDeep;

export { cloneDeepComplex };
