/**
 * 获取一个对象的类型
 * @param obj
 */
type Fn = (obj: any, type?: string) => string | boolean
const getObjType: Fn = (obj, type = '') => {
    const result = Object.prototype.toString.call(obj).substring(8).replace(']', '');
    return type ? result === type : result;
};

export default getObjType;
