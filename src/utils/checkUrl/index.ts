/**
 * 验证url
 * @param url
 * @returns {boolean}
 */
const checkUrl = (url: string): boolean=> {
    // const urlReg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    const urlReg = /^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlReg.test(url);
};

export default checkUrl;
