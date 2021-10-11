/**
 * 验证16进制颜色
 * @param color
 * @returns {boolean}
 */
const checkColor16 = (color) => {
    const color16Reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    return color16Reg.test(color);
};

export default checkColor16;
