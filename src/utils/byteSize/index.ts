/**
 * 获取字符串的字节长度
 * @param str
 * @returns {number}
 */
type Fn = (str: string) => number
const byteSize: Fn = str => new Blob([str]).size;

export default byteSize;
