/**
 * 数组去重
 * @param arr
 * @param by 根据某个参数去重
 * @returns {*}
 */
interface IArr {
    [key: string]: any
}
type Fn = (arr: IArr[], by: string) => IArr[]
const arrayDeWeight: Fn = (arr, by) => {
    let map = new Map();
    for (let item of arr) {
        if (!map.has(item[by])) {
            map.set(item[by], item);
        }
    }
    return [...map.values()];
};

export default arrayDeWeight;
