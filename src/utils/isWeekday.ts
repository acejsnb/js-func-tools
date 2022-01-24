// 判断给定的日期是否是工作日
type Fn = (date: string | Date) => boolean
const isWeekday: Fn = (date) => (date instanceof Date ? date : new Date(date)).getDay() % 6 !== 0;

export default isWeekday;

