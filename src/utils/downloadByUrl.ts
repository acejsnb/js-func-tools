// 根据url地址下载
const downloadByUrl = (url: string): boolean => {
    const isChrome = navigator.userAgent.toLowerCase().includes('chrome');
    const isSafari = navigator.userAgent.toLowerCase().includes('safari');
    if(isChrome || isSafari){
        const link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) link.download = url.substring(url.lastIndexOf('/')+1,url.length);
        if (document.createEvent) {
            const e = document.createEvent('MouseEvents');
            e.initEvent('click',true,true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?')===-1) url += '?download';
    window.open(url,'_self');
    return true;
};

export default downloadByUrl;
