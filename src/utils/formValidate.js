// 表单验证
import checkPhoneNumber from './checkPhoneNumber';
import checkEmail from './checkEmail';
import { checkPassword, checkPasswordBetter, checkPasswordBest } from './checkPassword';

const ValidateStrategy = {
    checkPhoneNumber,
    checkEmail,
    checkPassword,
    checkPasswordBetter,
    checkPasswordBest
};

// 表单验证
// check: required phoneNumber email password passwordBetter passwordBest
const checkRule = ({
    rule,
    value,
    success,
    fail,
    confirmValue = ''
}) => {
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
    if (ValidateStrategy[`check${str}`]?.(value)) {
        success?.(value);
        return true;
    }
    fail?.(value, message);
    return false;
};

const formValidate = ({
    rules,
    value,
    success,
    fail,
    confirmValue
}) => {
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
