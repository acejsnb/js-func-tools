// 敏感符号转义 (预防xss攻击)
interface Escape {
    [key: string]: string
}
const sensitiveEscape = (s: string): string => {
    const e: Escape = {
        '\'': '&#39;',
        '"': '&quot;',
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return s.replace(/["<>&]/g, (m: string) => e[m]);
};

export default sensitiveEscape;

