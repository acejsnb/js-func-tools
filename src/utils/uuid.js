/**
 * 生成随机id(生成随机字符串)
 * @param {*} length
 * @param {*} chars
 */
const uuid = (length=8, chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
    let result = ''
    for (let i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]
    return result
}

export default uuid;

