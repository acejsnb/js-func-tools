/**
 * 数组转树形结构
 * @param arr
 * @param parentId 根父级id
 * @returns {*[]}
 */
interface ITree {
    id?: string | number
    name?: string
    children?: ITree[]
    [key: string]: any
}
type Fn = (arr: ITree[], parentId?: string | number) => ITree[]
const arrayToTree: Fn = (arr, parentId = -1) => {
    const data: ITree[] = JSON.parse(JSON.stringify(arr));
    const res: ITree[] = [];
    data.forEach((item) => {
        if (item.parentId === parentId) {
            const itemChildren = arrayToTree(data, item.id as string);
            if (itemChildren.length) item.children = itemChildren;
            res.push(item);
        }
    });
    return res;
};

export default arrayToTree;
