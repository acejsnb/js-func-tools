// 验证统一社会信用代码
type Fn = (value: string) => boolean
const checkCreditCode: Fn = value => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);

export default checkCreditCode;
