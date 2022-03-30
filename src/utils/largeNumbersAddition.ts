/**
 * 两个大数相加
 * @param a
 * @param b
 */
type LargeNumbersAddition = (a: string | number, b: string | number) => string;
const largeNumbersAddition: LargeNumbersAddition = (a, b) => {
    const strA = String(a),
        strB = String(b),
        aLen = strA.length,
        bLen= strB.length;
    // 如果字符的长度没有超出Number.MAX_SAFE_INTEGER，则直接相加
    if (aLen < 16 && bLen < 16) return String(Number(a) + Number(b));
    const aArr = strA.split('').reverse().map(Number),
        bArr = strB.split('').reverse().map(Number),
        result: number[] = [];

    // 循环的数据
    let arr1 = aArr,
        arr2 = bArr,
        // 进位数
        carryOver = 0;
    bLen > aLen && (arr1 = bArr, arr2 = aArr);
    arr1.forEach((n, i) => {
        // 当前相加得到的结果
        const cur = carryOver + n + (arr2[i] ?? 0),
            // 余数
            remainder = cur % 10;
        // 将得到的余数（个位数）添加到result列表
        result.push(remainder);
        // 修改进位数
        carryOver = (cur - remainder) / 10;
    });

    return result.reverse().join('');
};

export default largeNumbersAddition;
