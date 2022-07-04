import dayOfWeek from './dayOfWeek';
import dayOfYear from './dayOfYear';
type Fn = (dateStr: string) => number
// 当前时间是本年的第几周

const weekOfYear: Fn = (dateStr) => Math.ceil((dayOfYear(dateStr) + dayOfWeek(dateStr) - 1) / 7);

export default weekOfYear;
