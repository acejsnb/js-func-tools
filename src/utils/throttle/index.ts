/**
 * 节流函数
 * @param fn
 * @param delay
 */
type Fn = (options?: {[key: string]: any}) => void
type Throttle = (fn: Fn, delay?: number) => Fn
const throttle: Throttle = (fn, delay = 500) => {
    let timer: null | ReturnType<typeof setTimeout> = null, isFirst: boolean | null = true;
    return function (...args) {
        const self = this;
        const cb = () => {
            fn.apply(self, args);
            timer = null;
        };
        isFirst && (isFirst = null, timer = null, cb());
        !timer && (timer = setTimeout(cb, delay));
        return timer;
    };
};

export default throttle;
