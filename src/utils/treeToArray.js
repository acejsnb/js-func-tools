/**
 * 树形结构平铺
 * @param tree
 * @returns {*[]}
 */
const treeToArray = (tree) => {
    const queue = JSON.parse(JSON.stringify(tree)),
        result = [];
    let pid = -1;
    while (queue.length !== 0) {
        const { id, name, children, ...other } = queue.shift();
        result.push({ id, name, parentId: pid, ...other });
        pid = id;
        if (children) {
            const len = children.length;
            for (let i = len - 1; i >= 0; i--) {
                queue.unshift(children[i]);
            }
        }
    }
    return result;
};

export default treeToArray;
