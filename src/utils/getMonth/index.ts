import AddZero from '../addZero';
import getDays from '../getDays';

type GetMonthFn = (date?: string) => string[];
// 获取当前月
const getCurrentMonth: GetMonthFn = (date) => {
    const curDate = date ? new Date(date) : new Date(),
        year = curDate.getFullYear(),
        month = AddZero(curDate.getMonth() + 1),
        days = getDays(year, month);
    return Array.from(new Array(days), (val, index) => (`${year}.${month}.${AddZero(index + 1)}`));
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
    getCurrentMonth,
    getPrevMonth,
    getNextMonth
};
