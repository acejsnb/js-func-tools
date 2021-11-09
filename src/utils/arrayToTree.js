/**
 * 数组转树形结构
 * @param arr
 * @param parentId 根父级id
 * @returns {*[]}
 */
const arrayToTree = (arr, parentId = -1) => {
    const data = JSON.parse(JSON.stringify(arr));
    const res = [];
    data.forEach(item => {
        if (item.parentId === parentId) {
            const itemChildren = arrayToTree(data, item.id);
            if (itemChildren.length) item.children = itemChildren;
            res.push(item);
        }
    });
    return res;
};

export default arrayToTree;
