/**
 * 防抖函数
 * @param fn
 * @param delay
 */
type Fn = (options?: {[key: string]: any}) => void
type Debounce = (fn: Fn, delay: number) => Fn
const debounce: Debounce = (fn, delay = 500) => {
    let timer: null | number;
    return (...args) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    };
};

export default debounce;
