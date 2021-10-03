/**
 * 数组转树形结构
 * @param arr
 * @param pid 根父级id
 * @returns {*[]}
 */
const arrayToTree = (arr, pid) => {
    const res = [];
    arr.forEach(item => {
        if (item.pid === pid) {
            const itemChildren = arrayToTree(arr, item.id);
            if (itemChildren.length) item.children = itemChildren;
            res.push(item);
        }
    });
    return res;
};

export default arrayToTree;
