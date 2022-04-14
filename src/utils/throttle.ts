/**
 * 节流函数
 * @param fn
 * @param delay
 */
type Fn = (options?: {[key: string]: any}) => void
type Throttle = (fn: Fn, delay?: number) => Fn
const throttle: Throttle = (fn, delay = 500) => {
    let timer: null | number;
    return function (...args) {
        const context = this;
        !timer && (timer = setTimeout(() => {
            fn.apply(context, args);
            timer = null;
        }, delay));
        return timer;
    };
};

export default throttle;
