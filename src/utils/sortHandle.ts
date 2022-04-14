/**
 * 排序
 * @param data 数组
 * @param sortord asc/des 升序/降序
 * @param type 值类型 'number' | 'string' | 'date'
 * @param key 对象中的key
 */
interface Item { [key: string]: string | number }
type Data = string[] | number[] | Item[]
interface Other { sortord?: 'asc' | 'des', type?: 'number' | 'string' | 'date', key?: string }
type SortHandle = (data: Data, other?: Other) => Data
const sortHandle: SortHandle = (data, other) => {
    const { sortord = 'asc', type = 'number', key = '' } = other ?? { sortord: 'asc', type: 'number', key: '' };
    if (!['number', 'string', 'date'].includes(type)) return data;
    const isAsc = sortord === 'asc';
    const strategy = {
        number() {
            return key
                ? (data as {[key: string]: number}[]).sort((a, b) => (isAsc ? (a[key] - b[key]) : (b[key] - a[key])))
                : (data as number[]).sort((a, b) => (isAsc ? (a - b) : (b - a)));
        },
        string() {
            return key
                ? (data as {[key: string]: string}[]).sort((a, b) => (isAsc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])))
                : (data as string[]).sort((a, b) => (isAsc ? a.localeCompare(b) : b.localeCompare(a)));
        },
        date() {
            const timestamp = (date: string): number => new Date(date).getTime();
            return key
                ? (data as {[key: string]: string}[]).sort((a, b) => (isAsc ? (timestamp(a[key]) - timestamp(b[key])) : (timestamp(b[key]) - timestamp(a[key]))))
                : (data as string[]).sort((a, b) => (isAsc ? (timestamp(a) - timestamp(b)) : (timestamp(b) - timestamp(a))));
        }
    };
    return strategy[type]();
};

export default sortHandle;
