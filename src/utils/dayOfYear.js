/**
 * 获取当前时间是当年的di多少天
 * @param date
 * @returns {number}
 */
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

export default dayOfYear;
