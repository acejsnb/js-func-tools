/**
 * 树形结构平铺
 * @param tree
 * @returns {*[]}
 */
const treeToArray = (tree) => {
    const queue = tree,
        result = [];
    while (queue.length !== 0) {
        const {id, name, pid, children, ...other} = queue.shift();
        result.push({
            id, name, pid, ...other
        });
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
