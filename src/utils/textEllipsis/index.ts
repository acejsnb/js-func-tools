import findTarget from '../findTarget';

/**
 * 设置标签的title
 * @param e event
 * @param tag 标签名字
 * @constructor
 */

type TextEllipsis = (e: MouseEvent, tag?: string) => void
const textEllipsis: TextEllipsis = (e, tag) => {
    let target = e.target as HTMLElement;
    if (tag) target = findTarget(target, [tag]);
    const { clientWidth, scrollWidth } = target;
    if (scrollWidth > clientWidth) target.title = target.innerText;
    else target.title = '';
};

export default textEllipsis;
