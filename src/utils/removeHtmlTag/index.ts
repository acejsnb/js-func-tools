// 去除html标签
// const removeHtmlTag = (str: string): string => str.replace(/<[^>]+>/g,'');
const removeHtmlTag = (str: string): string => new DOMParser().parseFromString(str, 'text/html').body.textContent || '';

export default removeHtmlTag;
