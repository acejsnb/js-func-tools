type Fn = (dateStr: string) => number
// 获取当前时间是当年的第多少天
const dayOfYear: Fn = dateStr => {
    const date: Date | number | bigint = dateStr ? new Date(dateStr) : new Date();
    return Math.floor((+date - (+new Date(date.getFullYear(), 0, 0))) / 1000 / 60 / 60 / 24);
};

export default dayOfYear;
