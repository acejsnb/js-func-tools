import round from '../round';

// 获取文本宽度
type GetTextWidth = (text: string, options?: { size?: number, family?: string  }) => number
const getTextWidth: GetTextWidth = (text, options) => {
    const { size = 14, family = 'system-ui' } = options ?? {};
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    (ctx as CanvasRenderingContext2D).font = `${size}px ${family}`;
    const metrics = (ctx as CanvasRenderingContext2D).measureText(text);
    console.log(metrics);
    return round(Math.floor(Math.abs(metrics.actualBoundingBoxLeft) + Math.abs(metrics.actualBoundingBoxRight)), 0);
};

export default getTextWidth;
