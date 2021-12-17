/**
 * 判断是否滚动到底部
 * @returns {boolean}
 */
const bottomVisible = () => document.documentElement.clientHeight + window.screenY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);

export default bottomVisible;
