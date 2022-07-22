/**
 * 删除树中的空children
 * @param tree
 * @returns {*}
 */
interface TreeItem {
    id?: string | number
    name?: string
    children?: TreeItem[]
    [key: string]: any
}
const removeEmptyChildren = (tree: TreeItem[]): TreeItem[] => {
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
