/**
 * 判断是否是空对象
 * @param obj
 * @returns {boolean}
 */
interface IObj {
    [key: string]: any
}
type Fn = (obj: IObj) => boolean
const isNullObj: Fn = (obj) => !Reflect?.ownKeys?.(obj)?.length || JSON.stringify(obj) === '{}';

export default isNullObj;
