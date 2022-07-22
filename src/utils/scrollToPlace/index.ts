// 平滑滚动到页面顶部
type Params = { key?: 'scrollLeft' | 'scrollTop', tag?: HTMLElement, place?: number }
type Fn = (params: Params) => void
const scrollToPlace: Fn = ({ key = 'scrollTop', tag , place = 0 }) => {
    let timer = 0, preC: number | unknown;
    const target = tag ?? (document.documentElement || document.body);
    const scroll = place ? () => {
        const c = target[key];
        if (c === preC) {
            window.cancelAnimationFrame(timer);
            return;
        }
        preC = c;
        if (c < place) {
            timer = window.requestAnimationFrame(scroll);
            target[key] = c + (place - c) / 8;
        } else {
            target[key] = place;
            window.cancelAnimationFrame(timer);
        }
    } : () => {
        const c = target[key];
        if (c === preC) {
            window.cancelAnimationFrame(timer);
            return;
        }
        preC = c;
        if (c > 0) {
            timer = window.requestAnimationFrame(scroll);
            target[key] = c - c / 8;
        } else {
            target[key] = 0;
            window.cancelAnimationFrame(timer);
        }
    };
    timer = window.requestAnimationFrame(scroll);
};
export default scrollToPlace;

