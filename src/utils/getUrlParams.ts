// 获取url参数
type Fn = (name: string, origin?: string | null) => string | null
const getUrlParams: Fn = (name, origin = null) => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    let r = null;
    if (origin) {
        r = origin.substr(1).match(reg);
    } else {
        r = window.location.search.substr(1).match(reg);
    }
    if (r) return decodeURIComponent(r[2]);
    return null;
};

export default getUrlParams;
