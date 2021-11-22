/**
 * 获取所有叶子节点
 * @param tree
 * @param first 是否获取第一个子节点的叶子节点
 * @returns {*[]}
 */
const getAllLeaf = (tree, first = false) => {
    const result = [];
    const getLeaf = (data) => {
        if (first) {
            if (!data[0].children?.length) {
                result.push(data[0]);
            } else {
                getLeaf(data[0].children, first);
            }
        } else {
            data.forEach((item) => {
                if (!item.children?.length) {
                    result.push(item);
                } else {
                    getLeaf(item.children);
                }
            });
        }
    };
    getLeaf(tree);
    return result;
};

export default getAllLeaf;
