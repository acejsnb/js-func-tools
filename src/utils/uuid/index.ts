/**
 * 生成随机id(生成随机字符串)
 * @param {*} length
 * @param {*} chars
 */
type Fn = (length?: number, chars?: string) => string
const uuid: Fn = (length=8, chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_') => {
    let result = '';
    for (let i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};

export default uuid;

