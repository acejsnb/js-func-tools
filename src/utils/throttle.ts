/**
 * 节流函数
 * @param fn
 * @param delay
 */
type Fn = (options?: {[key: string]: any}) => void
type Throttle = (fn: Fn, delay?: number) => Fn
const throttle: Throttle = (fn, delay = 500) => {
    let timer: null | number, isFirst = true;
    return function (...args) {
        const context = this;
        const cb = () => {
            fn.apply(context, args);
            timer = null;
        };
        isFirst && (isFirst = false, cb());
        !timer && (timer = setTimeout(cb, delay));
        return timer;
    };
};

export default throttle;
