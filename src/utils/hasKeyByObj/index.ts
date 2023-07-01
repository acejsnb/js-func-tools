/**
 * 判断一个对象是否包含某个属性
 * @param obj Object
 * @param key params
 */
type Fn = (obj: any, key: string) => boolean
// const hasKeyByObj: Fn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const hasKeyByObj: Fn = (obj, key) => key in obj;

export default hasKeyByObj;

