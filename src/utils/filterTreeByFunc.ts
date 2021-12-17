/**
 * 根据条件筛选出符合条件的树形结构数据
 * @param tree
 * @param func 筛选条件
 * @returns {*[]|*}
 */
interface ITree {
    id?: string | number
    name?: string
    children?: ITree[]
    [key: string]: any
}
type TFunc = (item: ITree) => boolean
type Fn = (tree: ITree[], func: TFunc) => ITree[]
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
