// 根据url地址下载
const downloadByUrl = (url: string | Blob, name?: string): boolean => {
    const isChrome = navigator.userAgent.toLowerCase().includes('chrome');
    const isSafari = navigator.userAgent.toLowerCase().includes('safari');
    let fileUrl = url instanceof Blob ? window.URL.createObjectURL(url) : url;
    if (isChrome || isSafari) {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = name ?? '';
        if (document.createEvent) {
            const e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (fileUrl.indexOf('?') === -1) fileUrl += '?download';
    window.open(fileUrl, '_self');
    return true;
};

export default downloadByUrl;
