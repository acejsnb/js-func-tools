// 表单验证
import checkPhoneNumber from '../checkPhoneNumber';
import checkEmail from '../checkEmail';
import { checkPassword, checkPasswordBetter, checkPasswordBest } from '../checkPassword';

type TFn = (value: string) => boolean
interface IValidateStrategy {
    checkPhoneNumber: TFn
    checkEmail: TFn
    checkPassword: TFn
    checkPasswordBetter: TFn
    checkPasswordBest: TFn
}
const ValidateStrategy: IValidateStrategy = {
    checkPhoneNumber,
    checkEmail,
    checkPassword,
    checkPasswordBetter,
    checkPasswordBest
};

type TValidate = (value: string, confirmValue?: string) => boolean
type TSuccess = (value?: string) => void
type TFail = (value?: string, message?: string) => void
interface Rule {
    message: string
    check?: string
    validate?: TValidate
}

// 表单验证
// check: required phoneNumber email password passwordBetter passwordBest
interface CheckRuleOptions {
    rule: Rule
    value: string
    success?: TSuccess
    fail?: TFail
    confirmValue?: string
}
const checkRule = ({
    rule,
    value,
    success,
    fail,
    confirmValue = ''
}: CheckRuleOptions): boolean => {
    const { validate, check = '', message = '' } = rule;
    if (validate) {
        if (typeof validate === 'function') {
            if (validate(value, confirmValue)) {
                success?.(value);
                return true;
            }
            fail?.(value, message);
            return false;
        }
        console.error('The validate field must be a function!');
        return false;
    }
    if (!check) {
        console.error('The check field cannot be empty!');
        return false;
    }
    if (check === 'required') {
        if (value) {
            success?.(value);
            return true;
        }
        fail?.(value, message);
        return false;
    }
    const arr = check.split('');
    arr[0] = arr[0].toUpperCase();
    const str = arr.join('');
    if (ValidateStrategy[`check${str}` as keyof IValidateStrategy]?.(value)) {
        success?.(value);
        return true;
    }
    fail?.(value, message);
    return false;
};

interface FormValidateOptions {
    rules: Rule[]
    value: string
    success?: TSuccess
    fail?: TFail
    confirmValue?: string
}
const formValidate = ({
    rules,
    value,
    success,
    fail,
    confirmValue
}: FormValidateOptions): boolean => {
    const len = rules?.length || 0;
    for (let i = 0; i < len; i++) {
        const status = checkRule({
            rule: rules[i], value, success, fail, confirmValue
        });
        if (!status) return false;
    }
    return true;
};

export default formValidate;
