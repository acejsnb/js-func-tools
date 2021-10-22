// 验证密码
// good // 弱：纯数字，纯字母
export const checkPassword = (str) => (/^(?:\d+|[a-zA-Z]+|[!@#$%^&*`()\-+=_?.,~]+)$/).test(str);
// better // 中：字母+数字，字母+特殊字符，数字+特殊字符
export const checkPasswordBetter = (str) => (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*`()\-+=_?.,~]+$)[a-zA-Z\d!@#$%^&*`()\-+=_?.,~]+$/).test(str);
// best // 强：字母+数字+特殊字符
export const checkPasswordBest = (str) => (/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*`()\-+=_?.,~]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*`()\-+=_?.,~]+$)(?![\d!@#$%^&*`()\-+=_?.,~]+$)[a-zA-Z\d!@#$%^&*`()\-+=_?.,~]+$/).test(str);
