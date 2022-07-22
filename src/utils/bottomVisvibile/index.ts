/**
 * 判断是否滚动到底部
 * @returns {boolean}
 */
const bottomVisible = (ele?: HTMLElement): boolean => {
    if (ele && ele.nodeType === 1) {
        return ele.scrollTop + document.body.clientHeight >= ele.scrollHeight;
    }
    return document.documentElement.clientHeight + window.screenY >= document.documentElement.scrollHeight;
};

export default bottomVisible;
