/**
 * 验证邮箱
 * @param email
 * @returns {boolean}
 */
const checkEmail = (email: string): boolean => {
    // const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const emailReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    return emailReg.test(email);
};

export default checkEmail;
