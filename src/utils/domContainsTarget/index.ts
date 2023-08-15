/**
 * dom中是否包含目标元素
 * @param dom
 * @param target
 */

type Fn = (dom: HTMLElement, target: HTMLElement) => boolean;
const domContainsTarget: Fn = (dom, target) => {
    if (dom === target) return true;
    if (dom?.contains) return dom?.contains(target);
    if (dom?.compareDocumentPosition) return (dom?.compareDocumentPosition(target) === 20);
    return false;
};

export default domContainsTarget;

