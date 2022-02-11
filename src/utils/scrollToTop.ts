// 平滑滚动到页面顶部
type Fn = (id: string) => void
const scrollToTop: Fn = (id) => {
    const c = id ? ((document.getElementById(id) as HTMLElement)?.scrollTop ?? 0) : (document.documentElement.scrollTop || document.body.scrollTop);
    if (c > 0) {
        window.requestAnimationFrame(() => scrollToTop(id));
        window.scrollTo(0, c - c / 8);
    }
};

export default scrollToTop;
