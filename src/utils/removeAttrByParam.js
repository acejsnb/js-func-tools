/**
 * 根据参数删除树的属性
 * @param tree
 * @param param
 * @returns {*}
 */
const removeAttrByParam = (tree, param) => {
    tree.forEach((item) => {
        delete item[param];
        if (item.children && item.children.length > 0) {
            removeAttrByParam(item.children, param);
        }
    });
    return tree;
};

export default removeAttrByParam;
