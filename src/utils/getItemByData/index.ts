/**
 * 根据参数获取当前item
 * @param data
 * @param key
 * @param value
 */
interface TreeItem {
    id?: string | number
    name?: string
    children?: TreeItem[]
    [key: string | number]: any
}
type GetItemByData = (data: TreeItem[], key: string | number, value: string | number) => TreeItem | null
const getItemByData: GetItemByData = (data, key, value) => {
    const len = data?.length;
    if (!len || !key || !value) return null;
    type BinaryFind = (data: TreeItem[], leftIndex: number, rightIndex: number) =>  TreeItem | null
    const binaryFind: BinaryFind = (data, leftIndex, rightIndex) => {
        if (leftIndex > rightIndex) return null;
        const middle = Math.ceil((leftIndex + rightIndex) / 2),
            cur = data[middle];
        if (cur[key] === value) return cur;
        if (cur.children?.length) {
            const item = binaryFind(cur.children, 0, cur.children.length - 1);
            if (item) return item;
        }
        const leftItem = binaryFind(data, leftIndex, middle - 1);
        if (leftItem) return leftItem;
        const rightItem = binaryFind(data, middle + 1, rightIndex);
        if (rightItem) return rightItem;
        return null;
    };
    return binaryFind(data, 0, len - 1);
};

export default getItemByData;
