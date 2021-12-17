/**
 * 根据参数删除树的属性
 * @param tree
 * @param param
 * @returns {*}
 */
interface ITree {
    id?: string | number
    name?: string
    children?: ITree[]
    [key: string]: any
}
type Fn = (tree: ITree[], param: string) => ITree[]
const removeAttrByParam: Fn = (tree, param) => {
    tree.forEach((item) => {
        delete item[param];
        if (item.children && item.children.length > 0) {
            removeAttrByParam(item.children, param);
        }
    });
    return tree;
};

export default removeAttrByParam;
