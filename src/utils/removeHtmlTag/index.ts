// 去除html标签
const removeHtmlTag = (str: string): string => str.replace(/<[^>]+>/g,'');

export default removeHtmlTag;
