/**
 * 数组去重
 * @param arr
 * @param by 根据某个参数去重
 * @returns {*}
 */
const arrayDeWeight = (arr, by) => {
    let map = new Map();
    for (let item of arr) {
        if (!map.has(item[by])) {
            map.set(item[by], item);
        }
    }
    return [...map.values()];
};

export default arrayDeWeight;
