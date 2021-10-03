/**
 * 查找某一节点在树中路径
 * @param tree
 * @param id
 * @param byIndex 返回索引
 * @returns {*[]|*|[]}
 */
const getNodePath = (tree, id, byIndex = false) => {
    if (!Array.isArray(tree) || !tree.length) return [];

    const path = [];
    const treeFindPath = (data, id, path) => {
        const len = tree.length;
        for (let i = 0; i < len; i++) {
            const { id: itemId, children } = data[i];
            path.push(byIndex ? i : itemId);
            if (itemId === id) return path;
            if (children) {
                const findChildren = treeFindPath(children, id, path);
                if (findChildren.length) return findChildren;
            }
            path.pop();
        }
        return [];
    };
    return treeFindPath(tree, id, path);
};

export default getNodePath;
