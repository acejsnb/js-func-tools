/**
 * 获取所有叶子节点
 * @param tree
 * @returns {*[]}
 */
const getAllLeaf = (tree) => {
    const result = [];
    const getLeaf = (tree) => {
        tree.forEach((item) => {
            if (!item.children) {
                result.push(item);
            } else {
                getLeaf(item.children);
            }
        });
    };
    getLeaf(tree);
    return result;
};

export default getAllLeaf;
