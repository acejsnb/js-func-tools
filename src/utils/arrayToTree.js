/**
 * 数组转树形结构
 * @param arr
 * @param parentId 根父级id
 * @returns {*[]}
 */
const arrayToTree = (arr, parentId) => {
    const res = [];
    arr.forEach(item => {
        if (item.parentId === parentId) {
            const itemChildren = arrayToTree(arr, item.id);
            if (itemChildren.length) item.children = itemChildren;
            res.push(item);
        }
    });
    return res;
};

export default arrayToTree;
