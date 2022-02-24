import addZero from './addZero';

type Fn = (dateStr: string) => number
// 获取当前时间是当年的第多少天
const dayOfYear: Fn = dateStr => {
    const date: Date | number | bigint = dateStr ? new Date(dateStr) : new Date();
    return Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
};

// 获取当前时间是星期几
const dayOfWeek: Fn = (dateStr) => {
    const date: Date | number | bigint = dateStr ? new Date(dateStr) : new Date();
    return new Date(date).getDay();
};

// 当前时间是本年的第几周
const weekOfYear: Fn = (dateStr) => Math.ceil((dayOfYear(dateStr) + dayOfWeek(dateStr) - 1) / 7);

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
const formatDate = (fmt: string, dateStr?: string): string => {
    const date = dateStr ? new Date(dateStr) : new Date();
    // let fmt = str;
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
            const $1 = RegExp.$1;
            fmt = fmt.replace(
                $1,
                $1.length === 1 ? `${o[k as keyof O]}` : ((`00${o[k as keyof O]}`).substring((`${o[k as keyof O]}`).length))
            );
        }
    }

    return fmt;
};

/**
 * 获取当前时间的时分秒
 * @param date
 * @param format
 */
type GetTimeFn = (date: string | Date, fmt: 'h' | 'hm' | 'hms') => string
const getTime: GetTimeFn = (date, fmt = 'hm') => (date instanceof Date ? date : new Date(date)).toTimeString().slice(0, ({h: 2, hm: 5, hms: 8})[fmt]);
/**
 * 获取当月有多少天
 * @param year
 * @param month
 */
type GetDaysFn = (year?: string | number, month?: string | number) => number
const getDays: GetDaysFn = (year, month) => {
    let yyyy = Number(year ?? new Date().getFullYear()), mm = Number(month ?? new Date().getMonth() + 1);
    return new Date(yyyy, mm, 0).getDate();
};

/**
 * 获取周
 * @param type 0从周日开始算， 1从周一开始算
 * @param date Date
 */
type GetWeekFn = (type?: 0 | 1, date?: string) => string[];
// 获取当前周
const getCurrentWeek: GetWeekFn = (type = 0, date) => {
    const curDate = date ? new Date(date) : new Date(),
        today = curDate.getDay() || 7,
        format = (DATE: Date) => `${DATE.getFullYear()}.${addZero(DATE.getMonth() + 1)}.${addZero(DATE.getDate())}`;
    return Array.from(new Array(7), (val, index) => format(new Date(curDate.getTime() - (today - index - type) * 24 * 3600* 1000)));
};
// 获取上一周
const getPrevWeek: GetWeekFn = (type = 0, date) => {
    const curDate = date ? new Date(date) : new Date(),
        weekDate = new Date(curDate.getTime() - 7 * 24 * 3600 * 1000);
    return getCurrentWeek(type, weekDate.toDateString());
};
// 获取下一周
const getNextWeek: GetWeekFn = (type = 0, date) => {
    const curDate = date ? new Date(date) : new Date(),
        weekDate = new Date(curDate.getTime() + 7 * 24 * 3600 * 1000);
    return getCurrentWeek(type, weekDate.toDateString());
};

type GetMonthFn = (date?: string) => string[];
// 获取当前月
const getCurrentMonth: GetMonthFn = (date) => {
    const curDate = date ? new Date(date) : new Date(),
        year = curDate.getFullYear(),
        month = addZero(curDate.getMonth() + 1),
        days = getDays(year, month);
    return Array.from(new Array(days), (val, index) => (`${year}.${month}.${addZero(index + 1)}`));
};
// 获取上一月
const getPrevMonth: GetMonthFn = (date) => {
    const curDate = date ? new Date(date) : new Date(),
        year = curDate.getFullYear(),
        month = curDate.getMonth(),
        monthDate = new Date(year, month, 0);
    return getCurrentMonth(monthDate.toDateString());
};
// 获取下一月
const getNextMonth: GetMonthFn = (date) => {
    const curDate = date ? new Date(date) : new Date(),
        year = curDate.getFullYear(),
        month = curDate.getMonth() + 2,
        monthDate = new Date(year, month, 0);
    return getCurrentMonth(monthDate.toDateString());
};

export {
    dayOfYear,
    dayOfWeek,
    weekOfYear,
    formatDate,
    getTime,
    getDays,
    getCurrentWeek,
    getPrevWeek,
    getNextWeek,
    getCurrentMonth,
    getPrevMonth,
    getNextMonth
};
