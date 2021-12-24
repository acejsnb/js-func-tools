/**
 * 获取当前时间是当年的第多少天
 * @param date
 * @returns {number}
 */
type Fn = (str: string) => number
const dayOfYear: Fn = str => {
    const date: Date | number | bigint = str ? new Date(str) : new Date();
    return Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
};

// 获取当前时间是星期几
const dayOfWeek: Fn = (str) => {
    const date: Date | number | bigint = str ? new Date(str) : new Date();
    return new Date(date).getDay();
};

// 当前时间是本年的第几周
const weekOfYear: Fn = (str) => Math.ceil((dayOfYear(str) + dayOfWeek(str) - 1) / 7);

// 格式化时间 str yyyy-mm-dd hh:MM:ss.S
interface O {
    'm+': number
    'd+': number
    'h+': number
    'M+': number
    's+': number
    'q+': number
    'S': number
}
const formatDate = (str: string): string => {
    const date = new Date();
    let fmt = str;
    const o: O = {
        'm+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours(), //小时
        'M+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substring(4 - RegExp.$1.length));
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                // @ts-ignore
                RegExp.$1.length === 1 ? o[k] : ((`00${o[k]}`).substring((`${o[k]}`).length))
            );
        }
    }

    return fmt;
};

export default dayOfYear;

export {
    dayOfWeek,
    weekOfYear,
    formatDate
};
