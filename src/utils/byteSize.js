/**
 * 获取字符串的字节长度
 * @param str
 * @returns {number}
 */
const byteSize = str => new Blob([str]).size;

export default byteSize;
