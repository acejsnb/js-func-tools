/**
 * 金额千分位格式化
 * @param num
 * @param symbol
 */

type Func = (num: number | string, symbol?: string) => string;
const amountThousands: Func = (num, symbol = ',') => {
    let n = Number(num), r = '', temp, mod;
    do {
        // 求模的值， 用于获取高三位，这里可能有小数
        mod = n % 1000;
        // 值是不是大于1，是继续的条件
        n = n / 1000;
        // 高三位
        temp = ~~mod;
        // 1.填充: n > 1 循环未结束， 就要填充为比如 1 => 001
        // 不然temp = ~~mod的时候, 1 001， 就会变成 "11"
        // 2.拼接“,”
        r = (n >= 1 ? `${temp}`.padStart(3, '0') : temp) + (r ? symbol + r : '');
    } while (n >= 1);
    const strNumber = num + '';
    let index = strNumber.indexOf('.');
    // 拼接小数部分
    if (index >= 0) r += strNumber.substring(index);
    return r;
};

export default amountThousands;
