/**
 * 查找某一节点在树中路径
 * @param tree
 * @param id
 * @param byIndex 返回索引
 * @returns {*[]|*|[]}
 */
interface TreeItem {
    id?: string | number
    name?: string
    children?: TreeItem[]
    [key: string]: any
}
type TRes = Array<string | number>
type Fn = (tree: TreeItem[], id: string | number, byIndex?: boolean) => TRes
const getNodePath: Fn = (tree, id, byIndex = false) => {
    if (!Array.isArray(tree) || !tree?.length) return [];
    const path: TRes = [];
    const treeFindPath = (data: TreeItem[], id: string | number, path: TRes): TRes => {
        const len = data.length;
        for (let i = 0; i < len; i++) {
            const { id: itemId, children = [] } = data[i] ?? {};
            path.push(byIndex ? i : itemId as string);
            if (itemId === id) return path;
            if (children?.length) {
                const findChildren = treeFindPath(children, id, path);
                if (findChildren.length) return findChildren;
            }
            path.pop();
        }
        return [];
    };
    return treeFindPath(tree, id, path);
};

export default getNodePath;
