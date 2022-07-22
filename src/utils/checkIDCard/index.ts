/**
 * 验证身份证
 * @param IDCard
 * @returns {boolean}
 */
const checkIDCard = (IDCard: string): boolean => {
    const IDCardReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return IDCardReg.test(IDCard);
};

export default checkIDCard;
