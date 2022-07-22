type Fn = (dateStr: string) => number
// 获取当前时间是星期几
const dayOfWeek: Fn = (dateStr) => {
    const date: Date | number | bigint = dateStr ? new Date(dateStr) : new Date();
    return new Date(date).getDay();
};

export default dayOfWeek;
