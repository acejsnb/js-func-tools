// base64加码/解码
interface Base64 {
    encode(str: string): string
    decode(str: string): string
}
const base64: Base64 = {
    // 加码
    encode(str) {
        return btoa(encodeURIComponent(str));
    },
    // 解码
    decode(str) {
        return decodeURIComponent(atob(str));
    }
};

export default base64;
