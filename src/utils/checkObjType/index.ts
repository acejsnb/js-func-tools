import getObjType from '../getObjType';
/**
 * 检查数据类型
 * @param obj
 * @param type
 */
type Fn = (obj: any, type: string) => boolean
const checkObjType: Fn = (obj, type) => (getObjType(obj) as string).toLowerCase() === type.toLowerCase();

export default checkObjType;
