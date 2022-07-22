// 平滑滚动到页面顶部
type Fn = (id: string | HTMLElement) => void
const scrollToTop: Fn = (id) => {
    let target = null;
    if (id) {
        if (typeof id === 'string') target = document.getElementById(id) as HTMLElement;
        else target = id;
    }
    const c = target ? (target?.scrollTop ?? 0) : (document.documentElement.scrollTop || document.body.scrollTop);
    if (c > 0) {
        window.requestAnimationFrame(() => scrollToTop(id));
        (target ?? window).scrollTo(0, c - c / 8);
    }
};

export default scrollToTop;
