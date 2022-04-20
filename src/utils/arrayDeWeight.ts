/**
 * 数组去重
 * @param arr
 * @param by 根据某个参数去重
 * @returns {*}
 */
interface IArr {
    [key: string]: any
}
type Fn = (arr: IArr[], by?: string) => IArr[]
const arrayDeWeight: Fn = (arr, by='') => {
    if (!arr.length) return [];
    const firstItem = arr[0];
    if (by && typeof firstItem === 'object') {
        let map = new Map();
        for (const item of arr) {
            if (!map.has(item[by])) map.set(item[by], item);
        }
        return [...map.values()];
    }
    return arr.filter((value,index,self) => self.indexOf(value) === index);
};

export default arrayDeWeight;
