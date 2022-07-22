// 生成随机颜色
type RandomHexColor = () => void
const randomHexColor: RandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

export default randomHexColor;
