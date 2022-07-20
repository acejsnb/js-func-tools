/**
 * 根据索引设置某个参数的值
 * @param data
 * @param arr
 * @param param
 */
interface ITree {
    id?: string | number
    name?: string
    children?: ITree[]
    [key: string | number]: any
}
type SetParamsByIndex = (indArr: Array<string | number>, data: ITree[], param: string, value: any) => ITree[]
const setParamsByIndex: SetParamsByIndex = (indArr, data, param, value) => {
    const arr = JSON.parse(JSON.stringify(indArr));
    const suffix = '[param]=value';
    let str = `data[${arr.shift()}]`;
    new Function('data', 'param', 'value', `${str}${suffix}`)(data, param, value);
    while (arr.length) {
        str += `['children'][${arr.shift()}]`;
        new Function('data', 'param', 'value', `${str}${suffix}`)(data, param, value);
    }
    new Function('data', 'param', 'value', `${str}${suffix}`)(data, param, value);
    return data;
};

export default setParamsByIndex;
