/**
 * 树形结构平铺
 * @param tree
 * @param parentId 根父级id
 * @returns {*[]}
 */
const treeToArray = (tree, parentId = -1) => {
    const queue = JSON.parse(JSON.stringify(tree)),
        result = [];
    let pid = parentId;
    while (queue.length !== 0) {
        const { id, name, children, ...other } = queue.shift();
        result.push({ id, name, parentId: pid, ...other });
        if (children?.length) {
            pid = id;
            const len = children.length;
            for (let i = len - 1; i >= 0; i--) {
                queue.unshift(children[i]);
            }
        } else {
            pid = parentId;
        }
    }
    return result;
};

export default treeToArray;
