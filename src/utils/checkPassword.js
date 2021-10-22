// 弱：纯数字，纯字母，
const duiRegPassword = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*`()\-+=_?.,~]+)$/;
// 中：字母+数字，字母+特殊字符，数字+特殊字符
const duiRegPasswordBetter = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*`()\-+=_?.,~]+$)[a-zA-Z\d!@#$%^&*`()\-+=_?.,~]+$/;
// 强：字母+数字+特殊字符
const duiRegPasswordBest = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*`()\-+=_?.,~]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*`()\-+=_?.,~]+$)(?![\d!@#$%^&*`()\-+=_?.,~]+$)[a-zA-Z\d!@#$%^&*`()\-+=_?.,~]+$/;

// 验证密码
// good
export const checkPassword = (str) => duiRegPassword.test(str);
// better
export const checkPasswordBetter = (str) => duiRegPasswordBetter.test(str);
// best
export const checkPasswordBest = (str) => duiRegPasswordBest.test(str);
