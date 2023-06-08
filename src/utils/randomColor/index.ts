type Fn = () => string;
// 生成随机16进制颜色
// const randomColor: Fn = () => '#' + Math.random().toString(16).slice(-6);
const randomColor: Fn = () => `#${(~~(Math.random()*(1<<24))).toString(16)}`;
export default randomColor;
