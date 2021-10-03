/**
 * 删除树中的空children
 * @param tree
 * @returns {*}
 */
const removeEmptyChildren = (tree) => {
    tree.forEach((item) => {
        if (item.children) {
            const len = item.children.length;
            if (len) {
                removeEmptyChildren(item.children);
            } else {
                delete item.children;
            }
        }
    });
    return tree;
};

export default removeEmptyChildren;
