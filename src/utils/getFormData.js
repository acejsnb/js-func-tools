/**
 * 对象转化为FormData对象
 * @param object
 * @returns {FormData}
 */
const getFormData = (object) => {
    const formData = new FormData();
    Object.keys(object).forEach(key => {
        const value = object[key];
        if (Array.isArray(value)) {
            value.forEach((subValue, i) =>
                formData.append(key + `[${i}]`, subValue)
            );
        } else {
            formData.append(key, object[key]);
        }
    });
    return formData;
};

export default getFormData;
