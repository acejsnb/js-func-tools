/**
 * 获取一个对象的类型
 * @param obj
 * @param type
 */
type Fn = (obj: any, type?: string) => string | boolean
const getObjType: Fn = (obj, type = '') => {
    const result = Object.prototype.toString.call(obj).slice(8, -1);
    return type ? result === type : result;
};

export default getObjType;
