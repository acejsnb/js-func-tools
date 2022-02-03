/**
 * 获取一个对象的类型
 * @param obj
 */
type Fn = (obj: any) => string
const getObjType: Fn = (obj) => Object.prototype.toString.call(obj).substring(8).replace(']', '');

export default getObjType;
