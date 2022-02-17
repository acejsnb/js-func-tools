import addZero from './addZero';
import { getDays } from './dateHandle';
/**
 * 根据年获取当前所有年月日
 * @year 年
 */
type Options = { year?: string | number, month?: string | number }
type TObj = { month: string, children: string[] }
type Fn = (options: Options) => string[] | TObj[]
const getYMDByYear: Fn = ({year, month} = { year: '', month: '' }) => {
    let result: string[] | TObj[] = [];
    const yyyy = year ?? new Date().getFullYear();
    if (month) {
        const days = getDays(yyyy, month);
        for (let i = 0; i < days; i++) {
            (result as string[]).push(addZero(i + 1));
        }
    } else {
        for (let i = 0; i < 12; i++) {
            const mm = i + 1;
            const days = getDays(yyyy, mm);
            const children = [];
            for (let j = 0; j < days; j++) {
                children.push(addZero(j + 1));
            }
            (result as TObj[]).push({ month: addZero(mm), children });
        }
    }
    return result;
};

export default getYMDByYear;
