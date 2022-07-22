type More = {split?: boolean, caseEn?: boolean}
type Fn = (value: string, search: string, jointStart: string, jointEnd: string, more?: More) => string
/**
 * 根据value匹配字符串（搜索字符串并替换，做高亮使用）
 * @param value 要检索的字符
 * @param search 检索的字符
 * @param jointStart 在检索到的字符前加入的字符
 * @param jointEnd 在检索到的字符后加入的字符
 * @param more 其他参数
 *        split 分词
 *        caseEn 区分大小写
 */
const matchesByValue: Fn = (value, search, jointStart, jointEnd, more) => {
    if (more?.split) {
        // 分词
        const valueArr = value.split(''),
            vLen = valueArr.length,
            ave = Math.ceil(vLen / 2);
        const s = more?.caseEn ? search : search.toLowerCase();
        for (let i = 0; i < ave; i++) {
            const cur = valueArr[i];
            if (s.includes((more?.caseEn ? cur: cur.toLowerCase()))) valueArr[i] = `${jointStart}${cur}${jointEnd}`;
            const i2 = vLen - i - 1;
            if (vLen > 1 && i2 > i) {
                const endCur = valueArr[i2];
                if (s.includes((more?.caseEn ? endCur : endCur.toLowerCase()))) valueArr[i2] = `${jointStart}${endCur}${jointEnd}`;
            }
        }
        return valueArr.join('');
    }
    // 不分词
    const reg = new RegExp(search, `${more?.caseEn ? '' : 'i'}g`);
    const arr = [];
    let str = value,
        matches = reg.exec(value),
        index = 0;
    while (matches && matches[0]) {
        const res = str.substring(0, matches.index - index);
        arr.push(res, `${jointStart}${matches[0]}${jointEnd}`);
        index = matches.index + matches[0].length;
        str = str.substring(res.length + matches[0].length);
        matches = reg.exec(value);
    }
    arr.push(str);
    return arr.join('');
};

export default matchesByValue;
