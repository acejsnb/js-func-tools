/**
 * 根据条件筛选出符合条件的树形结构数据
 * @param tree
 * @param func
 * @returns {*[]|*}
 */
const filterTreeByFunc = (tree, func) => {
    if (!Array.isArray(tree) || tree.length === 0) {
        return [];
    }
    return tree.filter(item => {
        item.children = item.children && filterTreeByFunc(item.children, func);
        return func(item) || (item.children && item.children.length);

    });

};

export default filterTreeByFunc;
