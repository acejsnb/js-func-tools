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

export default getDays;
