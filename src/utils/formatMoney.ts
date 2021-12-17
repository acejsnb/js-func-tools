// 金钱格式化，三位加逗号
type Fn = (money: string | number) => string
const formatMoney: Fn = money => money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default formatMoney;
