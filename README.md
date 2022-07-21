# js常用工具函数 tools utils

## 安装
- npm安装 `npm install js-func-tools`
- yarn安装 `yarn add js-func-tools`
- pnpm安装 `pnpm add js-func-tools`

## 使用
- browser
```html
<script src="https://unpkg.com/js-func-tools@[version]/dist/browser.js"></script>
<script>
    const num = JSFT.cutRadixPoint(807.34691);
</script>
```

- ESM
```js
import { cutRadixPoint } from 'js-func-tools';
const num = cutRadixPoint(807.34691);
```

### demo data
```js
const arr = [
    {'id': 1, 'name': '一级1', 'parentId': -1},
    {'id': 121, 'name': '二级1', 'parentId': 1},
    {'id': 1211, 'name': '三级1', 'parentId': 121},
    {'id': 1212, 'name': '三级2', 'parentId': 121},
    {'id': 122, 'name': '二级2', 'parentId': 1},
    {'id': 2, 'name': '一级2', 'parentId': -1},
    {'id': 221, 'name': '二级21', 'parentId': 2},
    {'id': 222, 'name': '二级22', 'parentId': 2}
];

const tree = [
    {
        'name': '一级1',
        'id': 1,
        'parentId': -1,
        'children': [
            {
                'name': '二级1',
                'id': 121,
                'parentId': 1,
                'children': [{'name': '三级1', 'id': 1211, 'parentId': 121}, {'name': '三级2', 'id': 1212, 'parentId': 121}]
            },
            {'name': '二级2', 'id': 122, 'parentId': 1}
        ]
    },
    {
        'name': '一级2',
        'id': 2,
        'parentId': -1,
        'children': [{'name': '二级21', 'id': 221, 'parentId': 2}, {'name': '二级22', 'id': 222, 'parentId': 2}]
    }
];
```

- ### addZero 数字前面补0
```js
const str = addZero(3);
```

- ### arrayDeWeight 数组去重
```js
const arr = [
    {id: '1', name: '1'},
    {id: '1', name: '2'},
    {id: '3', name: '3'},
];
const result = arrayDeWeight(arr, 'id')
```

- ### arrayToTree 数组转树形结构
```js
// parentId = -1 顶级默认父级id为-1
const tree = arrayToTree(arr);
// 指定顶级父级id为0
const tree2 = arrayToTree(arr, 0);
```

- ### average 平均数
```js
// type Fn = (arr: number[], dec?: number) => number
const num = average([1, 2, 3, 4]);
```

- ### base64 base64加码/解码
```js
// 加码
const result1 = base64.encode('Hello base64!');
// 解码
const result2 = base64.decode(result1);
```

- ### bottomVisible 判断是否滚动到底部
```js
// bottomVisible(ele?: HTMLElement): boolean
const status = bottomVisible();
```

- ### byteSize 获取字符串的字节长度
```js
const status = byteSize('hello');
```

- ### capitalise 首字母大写
```js
const str = capitalise('hello');
```

- ### checkColor16 验证16进制颜色
```js
const result = checkColor16('#fff')
const result2 = checkColor16('#ffffff')
```

- ### checkCreditCode 验证统一社会信用代码
```js
const result = checkCreditCode('xxxxxxx');
```

- ### checkEmail 验证邮箱
```js
const result = checkEmail('xxx@163.com')
```

- ### checkIDCard 验证身份证
```js
const result = checkIDCard('身份证号')
```

- ### checkObjType 检查数据类型
```js
const result = checkObjType('abc', 'string')
const result2 = checkObjType('abc', 'String')
```

- ### checkPassword 验证密码
```js
// 弱：纯数字，纯字母，纯特殊字符
const good = checkPassword('qweasd')
// 中：字母+数字，字母+特殊字符，数字+特殊字符
const better = checkPasswordBetter('asd123')
// 强：字母+数字+特殊字符
const best = checkPasswordBest('asd123@#zdfcerty')
```

- ### checkPhoneNumber 验证手机号
```js
const result = checkPhoneNumber('13880808080')
```

- ### checkPlateNumber 验证车牌
```js
const result = checkPlateNumber('川A66666')
```

- ### checkPostcode 验证邮政编码
```js
const result = checkPostcode('610000')
```

- ### checkUrl 验证url
```js
const result = checkUrl('https://www.xxx.com')
```

- ### hasClassName el是否包含某个class
```js
// el: HTMLElement, className: string
const result = hasClassName(el, className);
```

- ### addClassName el添加某个class
```js
// el: HTMLElement, className: string
addClassName(el, className);
```

- ### removeClassName el去除某个class
```js
// el: HTMLElement, className: string
removeClassName(el, className);
```

- ### cloneDeep 深拷贝
```js
const result = cloneDeep(tree)
```

- ### cloneDeepComplex 复杂数据深拷贝
```js
const result = cloneDeepComplex(tree)
```

- ### copyToBoard 复制内容到剪贴板
```js
const status = copyToBoard('这是复制的内容');
```

- ### cutRadixPoint 保留到小数点以后n位
```js
const num = cutRadixPoint(807.34691);
```

- ### debounce 防抖函数
```js
// <input id="inp" type="text">
const inp = document.getElementById('inp');
inp.addEventListener('input', debounce((args) => {
    console.log(11111, args.target.value)
}, 500))
```

- ### dayOfYear 获取当前时间是当年的第多少天
```js
const result = dayOfYear('2021.10.30');
```

- ### daysBetween 获取两个日期之间的日差
```js
// type DaysBetween = (a: string | number | Date, b: string | number | Date) => number
const result = daysBetween('2021.10.30', '2021.11.02');
```

- ### dayOfWeek 获取当前时间是星期几
```js
const result = dayOfWeek('2021.10.30');
```

- ### weekOfYear 当前时间是本年的第几周
```js
const result = weekOfYear('2021.10.30');
```

- ### formatDate 格式化时间
```js
// fmt?: string, dateStr?: string | Date
// fmt yyyy.mm.dd hh:MM:ss.S
const result = formatDate('yyyy.mm.dd');
```

- fmt说明：此库中获取日期所使用的fmt参数格式为`yyyy.mm.dd hh:MM:ss.S`,分别对应`年.月.日 时:分:秒.毫秒`，fmt中的年月日连接符可以是`/`,`-`等

- ### getCurrentDay 获取当天(与formatDate用法一样)
```js
// fmt?: string, dateStr?: string | Date
const result = getCurrentDay('yyyy.mm.dd');
```

- ### getPrevDay 获取上一天
```js
// fmt?: string, dateStr?: string | Date
const result = getPrevDay('yyyy.mm.dd');
```

- ### getNextDay 获取下一天
```js
// fmt?: string, dateStr?: string | Date
const result = getNextDay('yyyy.mm.dd');
```

- ### getTime 获取当前时间的时分秒
```js
// (fmt: 'h' | 'hm' | 'hms', date?: string | Date | null | undefined)
const result = getTime('hms');
const result2 = getTime('hms', '2022.01.24');
```

- ### getDays 获取当月有多少天
```js
// year?: string | number, month?: string | number
const result = getDays(); // 当月
const result2 = getDays(2022, 2); // 指定年月
```

- ### getCurrentWeek/getPrevWeek/getNextWeek 获取(当前/上一/下一)周
```js
// type GetWeekFn = (type?: 0 | 1, date?: string) => string[];
// type 0从周日开始算， 1从周一开始算
const cur = getCurrentWeek(); // 当前日期
const cur2 = getCurrentWeek(0, '2022.02.24'); // 指定日期
const pre = getPrevWeek();
const nex = getNextWeek();
```

- ### getCurrentMonth/getPrevMonth/getNextMonth 获取(当前/上一/下一)月
```js
// date?: string
const cur = getCurrentMonth(); // 当前日期
const cur2 = getCurrentMonth('2022.02.24'); // 指定日期
const pre = getPrevMonth();
const nex = getNextMonth();
```
- ### getYMDByYear 根据年获取当前所有年月日
```js
// type Options = { year?: string | number, month?: string | number }
// type TObj = { month: string, children: string[] }
// type Fn = (options: Options) => string[] | TObj[]
const result = getYMDByYear();
```

- ### hasKeyByObj 判断一个对象是否包含某个属性
```js
// obj: any, key: string
const obj = {name: 'eks'}, key = 'name';
const result = hasKeyByObj(obj, key);
```

- ### downloadByUrl 根据url地址下载
```js
// url: string | Blob, name?: string
const result = downloadByUrl(url, name);
```

- ### filterTreeByFunc 根据条件筛选出符合条件的树形结构数据
```js
const filterFunc = (item) => item.id === 11;
const result = filterTreeByFunc(tree, filterFunc);
```

- ### findTarget 通过当前Element查找需要的Element
```js
// target: HTMLElement, tagList: string[]
const target = findTarget([target], [tagName]);
```

- ### formatMoney 金钱格式化，三位加逗号
```js
// type Fn = (name: string, origin: string | null) => string | null
const result = formatMoney(1234567);
```

- ### formValidate 验证表单
```js
// rules 规则
/**
    type TValidate = (value: string, confirmValue: string) => boolean
    interface Rule {
        message: string
        check?: string
        validate?: TValidate
    }
 */
// value 验证的值
// success 验证成功回调
    /** type TSuccess = (value: string) => boolean **/
// fail 验证失败回调
    /** type TFail = (value: string, message: string) => boolean **/
// confirmValue 与其他值的对比
const status = formValidate({
    rules, value, success, fail, confirmValue
});
```

- ### getAllLeaf 获取所有叶子节点
```js
const result = getAllLeaf(tree);
```

- ### getFormData 对象转化为FormData对象
```js
const obj = {id: 1, name: 'eks'};
const result = getFormData(obj);
```

- ### getItemByData 根据参数获取当前item
```js
// type GetItemByData = (data: TreeItem[], key: string | number, value: string | number) => TreeItem | null
const result = getItemByData(tree, 'id', '122');
```

- ### getNodePath 查找某一节点在树中路径
```js
const result = getNodePath(tree, 12);
// 根据索引查找
const resultByIndex = getNodePath(tree, 12, true);
```

- ### getObjType 获取一个对象的类型
```js
// type Fn = (obj: any, type?: string) => string | boolean
const obj = {name: 'eks'};
const result = getObjType(obj); // string -> Object
const result2 = getObjType(obj, 'Object'); // boolean -> true
```

- ### getPlaceByTrigger 根据触发器获取dom定位位置
```js
// type Fn = (params: { trigger: HTMLElement, dom: HTMLElement, offset?: number, isRight?: boolean }) => { left: number, top: number, isDown: boolean }
const { left, top, isDown } = getPlaceByTrigger({ trigger: target, dom: div, isRight: false });
```

- ### getTextWidth 获取文本宽度
```js
// type GetTextWidth = (text: string, options?: { size?: number, family?: string  }) => number
const result = getTextWidth('Hello');
```

- ### getUrlParams 获取url参数
```js
// type Fn = (name: string, origin: string | null) => string | null
const result = getUrlParams(name);
```

- ### isNullObj 判断是否是空对象
```js
const result = isNullObj(obj);
```

- ### isObjValEqual 判断两个对象是否相等
```js
// type IsObjValEqual = (a: Obj, b: Obj, empty: boolean) => boolean
const obj1 = {a: '1', b: '2', c: [1,2,{a:1}]};
const obj2 = {a: '1', b: '2', c: [1,2,{a:12}]};
const result = isObjValEqual(obj1, obj2);
```

- ### hex2Rgb hex转rgb颜色
```js
const result = hex2Rgb('#f0f0f0');
```

- ### isWeekday 判断给定的日期是否是工作日
```js
const result = isWeekday('2021.1.24');
```

- ### largeNumbersAddition 两个大数相加
```js
const result = largeNumbersAddition(123456, Math.pow(2, 53) - 1);
```

- ### matchesByValue 根据value匹配字符串（搜索字符串并替换，做高亮使用）
```js
// type Fn = (value: string, search: string, jointStart: string, jointEnd: string) => string
const result = matchesByValue(
    '今天是一个A好日a子',
    'A',
    '--',
    '=='
);
```

- ### obj2Url 对象转url
```js
// type Obj = { [key: string]: any }
// type Obj2Url = (obj: Obj, url?: string) => string
const result = obj2Url({name: 'Lucy', age: 18}, 'http://www.xxx.com'); // http://www.xxx.com?name=Lucy&age=18
```

- ### randomHexColor 生成随机颜色
```js
const hexColor = randomHexColor();
```

- ### removeAttrByParam 根据参数删除树的属性
```js
const result = removeAttrByParam(tree, 'id');
```

- ### removeEmpty 移除对象的空置
```js
// type AnyType = {
//     [key: string | number]: any
// }
// type RemoveEmpty = (o: AnyType) => AnyType
const result = removeEmpty(obj);
```

- ### removeEmptyChildren 删除树中的空children
```js
const result = removeEmptyChildren(tree, 'id');
```

- ### removeHtmlTag 去除html标签
```js
// str: string
const result = removeHtmlTag(str);
```

- ### rgb2Hex rgb转16进制颜色
```js
const result = rgb2Hex('rgb(255, 255, 255)');
```

- ### round 四舍五入到制定位数
```js
// dec = 2 保留位数，默认2
const result = round(1.345);
```

- ### scrollToTop 平滑滚动到页面顶部
```js
scrollToTop();
```

- ### scrollToPlace 平滑滚动到指定位置
```js
scrollToPlace({ key: 'scrollLeft' });
```

- ### sensitiveEscape 敏感符号转义 (预防xss攻击)
```js
const result = sensitiveEscape(str);
```

- ### setParamsByIndex 根据索引设置某个参数的值
```js
// type SetParamsByIndex = (data: TreeItem[], indArr: Array<string | number>, param: string, value: any) => TreeItem[]
const result = setParamsByIndex(tree, [0, 0], 'open', true);
```

- ### sortHandle 排序
```js
/*
interface Item { [key: string]: string | number }
type Data = string[] | number[] | Item[]
interface Other {
    sortord?: 'asc' | 'des'
    type?: 'number' | 'string' | 'date'
    key?: string
}
type SortHandle = (data: Data, other?: Other) => Data
*/
const result = sortHandle(arr, { key: 'name' });
```

- ### throttle 节流函数
```js
// <div id="box"></div>
const box = document.getElementById('box');
box.addEventListener('mousemove', throttle((args) => {
    console.log(11111, args.target.value)
}, 500))
```

- ### textEllipsis 设置html标签的title
```js
// type TextEllipsis = (e: MouseEvent, tag?: string) => void
<div id="box" onmouseenter="textEllipsis">文字内容</div>
```

- ### treeToArray 数组转树形结构
```js
// parentId = -1 顶级默认父级id为-1
const arr = treeToArray(tree);
```

- ### uuid 随机生成n位字符串
```js
const str = uuid(5);
```


- ### xsync fetch请求数据封装
```js
/*
interface Headers {
    'Content-Type'?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'application/json' | 'application/xml' | 'text/xml' | string
    token?: string
    [key: string | number]: any
}
interface SendRequestOptions {
    url: string
    method?: string
    headers?: Headers
    params?: AnyType
}
*/
// type Xsync = (options: SendRequestOptions) => Promise<{ status?: number, data?: AnyType } | { message?: string }>
xsync({
    method: 'GET',
    url: 'url/xxx',
    params: {id: 123},
    token: 'token-token'
}).then(res => {
    console.log('then:', res);
}).catch(err => {
    console.log('catch:', err);
});
```
