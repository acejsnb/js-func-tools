import getObjType from '../getObjType';
import isNullObj from '../isNullObj';
// 移除对象的空置
type AnyType = {
    [key: string | number]: any
}
type RemoveEmpty = (o: AnyType) => AnyType
const removeEmpty: RemoveEmpty = (o) => {
    let result: AnyType = Array.isArray(o) ? [] : {};
    Object.keys(o).filter(k => {
        const val = o[k], type = getObjType(val);
        return (type === 'Object' && !isNullObj(val)) || (type === 'Array' && val.length) || val;
    }).forEach(k => {
        result[k] = o[k];
    });
    return result;
};

export default removeEmpty;
