/**
 * 验证邮政编码
 * @param postcode
 * @returns {boolean}
 */
const checkPostcode = (postcode) => {
    const postcodeReg=/^\d{6}$/;
    return postcodeReg.test(postcode);
};

export default checkPostcode;
