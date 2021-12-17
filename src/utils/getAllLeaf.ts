/**
 * 获取所有叶子节点
 * @param tree
 * @param first 是否获取第一个子节点的叶子节点
 * @returns {*[]}
 */
interface ITree {
    id?: string | number
    name?: string
    children?: ITree[]
    [key: string]: any
}
type Fn = (tree: ITree[], first?: boolean) => ITree[]
const getAllLeaf: Fn = (tree, first = false) => {
    const result: ITree[] = [];
    const getLeaf = (data: ITree[]) => {
        if (first) {
            if (!data[0].children?.length) {
                result.push(data[0]);
            } else {
                getLeaf(data[0].children);
            }
        } else {
            data.forEach((item) => {
                if (!item.children?.length) {
                    result.push(item);
                } else {
                    getLeaf(item.children);
                }
            });
        }
    };
    getLeaf(tree);
    return result;
};

export default getAllLeaf;
