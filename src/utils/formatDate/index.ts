import getObjType from '../getObjType';

// 根据时区格式化时间
const formatTimeZone = (date: string | Date, tz: string): string => new Date(date || Date.now()).toLocaleString('en-US', {timeZone: tz || 'Asia/Shanghai'});

// 格式化时间 str yyyy-mm-dd hh:MM:ss.S
interface Options {
    'm+': number
    'd+': number
    'h+': number
    'M+': number
    's+': number
    'q+': number
    'S': number
}
const formatDate = (format?: string, date?: string | number | Date, tz?: string): string => {
    let fmt = format || 'yyyy.mm.dd';
    let de= date ? (getObjType(date, 'Date') ? (date as Date) : new Date(date)) : new Date();
    if (tz) de = new Date(de.toLocaleString('en-US', {timeZone: tz}));
    // let fmt = str;
    const options: Options = {
        'm+': de.getMonth() + 1, //月份
        'd+': de.getDate(), //日
        'h+': de.getHours(), //小时
        'M+': de.getMinutes(), //分
        's+': de.getSeconds(), //秒
        'q+': Math.floor((de.getMonth() + 3) / 3), // 季度
        'S': de.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${de.getFullYear()}`).substring(4 - RegExp.$1.length));
    for (let k in options) {
        if (new RegExp(`(${k})`).test(fmt)) {
            const $1 = RegExp.$1;
            fmt = fmt.replace(
                $1,
                $1.length === 1 ? `${options[k as keyof Options]}` : ((`00${options[k as keyof Options]}`).substring((`${options[k as keyof Options]}`).length))
            );
        }
    }

    return fmt;
};

// 获取当天
const getCurrentDay = formatDate;
// 获取上一天
const getPrevDay = (format?: string, date?: string | Date, num?: number, tz?: string): string => getCurrentDay(format || 'yyyy.mm.dd', new Date(+(date ? (getObjType(date, 'Date') ? (date as Date) : new Date(date)) : new Date()) - ((num??1) * 86400000)), tz);
// 获取下一天
const getNextDay = (format?: string, date?: string | Date, num?: number, tz?: string): string => getCurrentDay(format || 'yyyy.mm.dd', new Date(+(date ? (getObjType(date, 'Date') ? (date as Date) : new Date(date)) : new Date()) + ((num??1) * 86400000)), tz);

export default formatDate;
export { getCurrentDay, getPrevDay, getNextDay, formatTimeZone };
