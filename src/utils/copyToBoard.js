/**
 * 复制内容到剪贴板
 * @param value
 * @returns {boolean}
 */
const copyToBoard = (value) => {
    const ele = document.createElement('textarea');
    document.body.appendChild(ele);
    ele.value = value;
    ele.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        document.body.removeChild(ele);
        return true;
    }
    document.body.removeChild(ele);
    return false;
};

export default copyToBoard;
