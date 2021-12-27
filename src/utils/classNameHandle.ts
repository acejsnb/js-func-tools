type Fn<T> = (el: HTMLElement, className: string) => T;
// el是否包含某个class
const hasClassName: Fn<boolean> = (el,className)=>{
    const reg = new RegExp('(^|\\s)'+className+'(\\s|$)');
    return reg.test(el.className);
};

// el添加某个class
const addClassName: Fn<void> = (el, className)=>{
    if (hasClassName(el,className)) return;
    const newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ');
};

// el去除某个class
const removeClassName: Fn<void> = (el,className)=>{
    if (!hasClassName(el,className)) return;
    const reg = new RegExp('(^|\\s)'+className+'(\\s|$)','g');
    el.className = el.className.replace(reg,'');
};

export {
    hasClassName,
    addClassName,
    removeClassName
};
