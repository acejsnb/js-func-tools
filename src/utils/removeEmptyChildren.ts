/**
 * 删除树中的空children
 * @param tree
 * @returns {*}
 */
interface ITree {
    id?: string | number
    name?: string
    children?: ITree[]
    [key: string]: any
}
const removeEmptyChildren = (tree: ITree[]): ITree[] => {
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
