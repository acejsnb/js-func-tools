/**
 * 获取当前时间的时分秒
 * @param date
 * @param format
 */
type GetTimeFn = (fmt: 'h' | 'hm' | 'hms', date?: string | Date | null | undefined) => string
const getTime: GetTimeFn = (fmt = 'hm', date) => (date ? (date instanceof Date ? date : new Date(date)) : new Date()).toLocaleTimeString();

export default getTime;
