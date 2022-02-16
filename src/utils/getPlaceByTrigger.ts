/**
 * 根据触发器获取dom定位位置
 * @param trigger 触发器
 * @param dom 目标dom
 * @param offset 上下偏移量 默认8px
 * @param isRight 默认居右对齐?
 */
// isDown向下弹出
type Fn = (params: { trigger: HTMLElement, dom: HTMLElement, offset?: number, isRight?: boolean }) => { left: number, top: number, isDown: boolean }
const getPlaceByTrigger: Fn = ({ trigger, dom, offset = 8, isRight = false }) => {
    let left: number, top: number, isDown = true;
    // 可视区宽高
    const { clientWidth, clientHeight } = document.documentElement;
    const { pageXOffset, pageYOffset } = window;
    const body = document.body;
    let domModal = dom.cloneNode(true) as HTMLElement;
    domModal.style.position = 'absolute';
    domModal.style.left = '0';
    domModal.style.top = '0';
    domModal.style.display = 'inline-block';
    body.appendChild(domModal);
    // dom宽高
    const { width: dw, height: dh } = domModal.getBoundingClientRect();
    body.removeChild(domModal);
    (domModal as unknown) = null;

    // 触发器宽高
    const { left: tl, top: tt, width: tw, height: th } = trigger.getBoundingClientRect();
    // 触发器上边高度
    let tTopHeight = tt,
        // 触发器下边高度
        tDownHeight = clientHeight - tt - th - offset,
        // 触发器左边宽度
        tLeftWidth = tl + tw,
        // 触发器右边宽度
        tRightWidth = clientWidth - tl;

    // 一、计算left
    // 触发器左边遮挡
    const isLeftHide = tl < 0,
        // 触发器右边遮挡
        isRightHide = tl + tw > clientWidth;
    if (isRight) {
        // 默认居右对齐
        if (isRightHide && isLeftHide) {
            left = clientWidth - dw;
        } else if (isRightHide) {
            // 触发器右边被遮挡
            tRightWidth = clientWidth - tl;
            if (tRightWidth > dw) left = tl;
            else left = clientWidth - dw;
        } else if (isLeftHide) {
            // 触发器左边被遮挡
            tLeftWidth = tw + tl;
            if (tLeftWidth >= dw) left = tLeftWidth - dw;
            else left = 0;
        } else {
            if (tLeftWidth >= dw) {
                // 1.触发器右边是否能放下dom
                left = tLeftWidth - dw;
            } else if (tRightWidth >= dw) {
                // 2.触发器左边是否能放下dom
                left = tl;
            } else {
                // 3.左右都放不下dom
                left = clientWidth - dw;
            }
        }
    } else {
        // 默认居左对齐
        if (isLeftHide && isRightHide) {
            left = 0;
        } else if (tl < 0) {
            // 触发器左边被遮挡
            tLeftWidth = tw + tl;
            if (tLeftWidth >= dw) left = tLeftWidth - dw;
            else left = 0;
        } else if (tl + tw > clientWidth) {
            // 触发器右边被遮挡
            tRightWidth = clientWidth - tl;
            if (tRightWidth >= dw) left = tl;
            else left = clientWidth - dw;
        } else {
            if (tRightWidth >= dw) {
                // 1.触发器右边是否能放下dom
                left = tl;
            } else if (tLeftWidth >= dw) {
                // 2.触发器左边是否能放下dom
                left = tLeftWidth - dw;
            } else {
                // 3.左右都放不下dom
                left = clientWidth - dw;
            }
        }
    }


    // 二、计算top
    if (tDownHeight >= dh) {
        // 1.触发器下边是否能放下dom
        top = tt + th + offset;
    } else if (tTopHeight >= dh) {
        // 2.触发器上边是否能放下dom
        top = tt - dh - offset;
        isDown = false;
    } else {
        // 3.上下都放不下dom
        top = clientHeight - dh;
    }

    left = left + pageXOffset;
    top = top + pageYOffset;
    return { left, top, isDown };
};

export default getPlaceByTrigger;
