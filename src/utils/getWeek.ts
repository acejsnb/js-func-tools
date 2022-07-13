import addZero from './addZero';

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
    return Array.from(new Array(7), (val, index) => format(new Date(+curDate - (today - index - type) * 24 * 3600* 1000)));
};
// 获取上一周
const getPrevWeek: GetWeekFn = (type = 0, date) => {
    const curDate = date ? new Date(date) : new Date(),
        weekDate = new Date(+curDate - 7 * 24 * 3600 * 1000);
    return getCurrentWeek(type, weekDate.toDateString());
};
// 获取下一周
const getNextWeek: GetWeekFn = (type = 0, date) => {
    const curDate = date ? new Date(date) : new Date(),
        weekDate = new Date(+curDate + 7 * 24 * 3600 * 1000);
    return getCurrentWeek(type, weekDate.toDateString());
};

export {
    getCurrentWeek,
    getPrevWeek,
    getNextWeek
};
