/**
 * 根据参数删除树的属性
 * @param tree
 * @param param
 * @returns {*}
 */
interface TreeItem {
    id?: string | number
    name?: string
    children?: TreeItem[]
    [key: string]: any
}
type Fn = (tree: TreeItem[], param: string) => TreeItem[]
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
