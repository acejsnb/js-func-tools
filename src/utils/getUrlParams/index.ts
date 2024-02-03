// 获取url参数
interface AnyType {
    [key: string]: string
}
type Fn = (name?: string, origin?: string | null) => string | AnyType | null
/*const getUrlParams: Fn = (name, origin = null) => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    let r = null;
    if (origin) {
        r = origin.substr(1).match(reg);
    } else {
        r = window.location.search.substr(1).match(reg);
    }
    if (r) return decodeURIComponent(r[2]);
    return null;
};*/
const getUrlParams: Fn = (name, origin = null) => {
    const reg = /([^?&=]+)=([^&]+)/g;
    const obj = {} as AnyType;
    const url = origin || window.location.search;
    url.replace(reg, (_,k,v) => (obj[k]=v));
    return name ? (obj[name] || null): obj;
};

export default getUrlParams;
