/**
 * 数组转树形结构
 * @param arr
 * @param parentId 根父级id
 * @returns {*[]}
 */
interface TreeItem {
    id?: string | number
    name?: string
    children?: TreeItem[]
    [key: string]: any
}
type Fn = (arr: TreeItem[], parentId?: string | number) => TreeItem[]
const arrayToTree: Fn = (arr, parentId = -1) => {
    const data: TreeItem[] = JSON.parse(JSON.stringify(arr));
    const res: TreeItem[] = [];
    data.forEach((item) => {
        if (item.parentId === parentId) {
            const children = arrayToTree(data, item.id as string);
            if (children.length) item.children = children;
            res.push(item);
        }
    });
    return res;
};

export default arrayToTree;
