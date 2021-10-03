/**
 * 删除树中的空children
 * @param tree
 * @returns {*}
 */
const removeEmptyChildren = (tree) => {
    tree.forEach((item) => {
        if (item.children && item.children.length ===0) {
            delete item.children;
        } else if (item.children && item.children.length > 0) {
            removeEmptyChildren(item.children);
        }
    });
    return tree;
};

export default removeEmptyChildren;
