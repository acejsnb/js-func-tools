/**
 * 通过当前Element查找需要的Element
 * @param target event对下的target
 * @param tagList 标签名称 如 div/DIV
 * @constructor
 */
type Fn = (target: HTMLElement, tagList: string[]) => HTMLElement
const findTarget: Fn = (target, tagList) => {
    const tn = target.tagName.toLocaleLowerCase();
    if (tn === 'body') return target;
    if (tagList.some((d) => d.toLocaleLowerCase() === tn)) return target;
    return findTarget((target.parentNode as HTMLElement), tagList);
};

export default findTarget;
