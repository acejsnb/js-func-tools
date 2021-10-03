/**
 * 复制内容到剪贴板
 * @param value
 * @returns {boolean}
 */
const copyToBoard = (value) => {
    const element = document.createElement('textarea');
    document.body.appendChild(element);
    element.value = value;
    element.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        document.body.removeChild(element);
        return true;
    }
    document.body.removeChild(element);
    return false;
};

export default copyToBoard;
