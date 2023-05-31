type Fn = () => string;
// 生成随机16进制颜色
const randomColor: Fn = () => '#' + Math.random().toString(16).slice(-6);
export default randomColor;
