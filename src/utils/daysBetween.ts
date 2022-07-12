import getObjType from './getObjType';
/**
 * 获取两个日期之间的日差
 * @param a
 * @param b
 */
type DaysBetween = (a: string | number | Date, b: string | number | Date) => number
const daysBetween: DaysBetween = (a, b) => {
    let time1 = 0, time2 = 0;
    const typeA = getObjType(a), typeB = getObjType(b);
    if (typeA === 'String') time1 = new Date(a).getTime();
    else if (typeA === 'Number') time1 = a as number;
    else time1 = (a as Date).getTime();

    if (typeB === 'String') time2 = new Date(b).getTime();
    else if (typeB === 'Number') time2 = b as number;
    else time2 = (b as Date).getTime();
    return Math.ceil(Math.abs(time1 - time2) / (1000 * 60 * 60 * 24));
};

export default daysBetween;

