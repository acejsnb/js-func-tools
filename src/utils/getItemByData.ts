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
    const len = data.length;
    if (!len || !key || !value) return null;
    const ave = Math.ceil(len / 2);
    for (let i = 0; i < ave; i++) {
        const cur = data[i];
        if (cur[key] === value) return cur;
        if (cur.children?.length) {
            const item = getItemByData(cur.children, key, value);
            if (item) return item;
        }
        const i2 = len - i - 1;
        if (len > 1 && i2 > i) {
            const lastCur = data[i2];
            if (lastCur[key] === value) return lastCur;
            if (lastCur.children?.length) {
                const item = getItemByData(lastCur.children, key, value);
                if (item) return item;
            }
        }
    }
    return null;
};

export default getItemByData;
