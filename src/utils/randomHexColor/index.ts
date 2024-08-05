// 生成随机颜色
import addZero from "../addZero";
type RandomHexColor = () => void
const randomHexColor: RandomHexColor = () => {
  const str = `${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  return `#${addZero(str, 6)}`
};

export default randomHexColor;
