/**
 * 根据条件筛选出符合条件的树形结构数据
 * @param tree
 * @param func 筛选条件
 * @returns {*[]|*}
 */
interface TreeItem {
    id?: string | number
    name?: string
    children?: TreeItem[]
    [key: string]: any
}
type TFunc = (item: TreeItem) => boolean
type Fn = (tree: TreeItem[], func: TFunc) => TreeItem[]
const filterTreeByFunc: Fn = (tree, func) => {
    if (!Array.isArray(tree) || tree.length === 0) {
        return [];
    }
    return tree.filter(item => {
        item.children = item.children && filterTreeByFunc(item.children, func);
        return func(item) || (item.children && item.children.length);

    });

};

export default filterTreeByFunc;
