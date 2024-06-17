[![Security Status](https://www.murphysec.com/platform3/v31/badge/1675733613395656704.svg)](https://www.murphysec.com/console/report/1675733613244661760/1675733613395656704)

# js常用工具函数 tools utils

> 重要提示：<br/>
  在2.0.0版本之后，函数名将为大写字母开头 <br/>
  1.1.4之前: `import { cutRadixPoint } from 'js-func-tools';` <br/>
  2.0.0之后: `import { CutRadixPoint } from 'js-func-tools';`

## 安装
- npm安装 `npm install js-func-tools`
- yarn安装 `yarn add js-func-tools`
- pnpm安装 `pnpm add js-func-tools`

## 使用
- browser
```html
<script src="https://unpkg.com/js-func-tools@[version]/dist/browser.js"></script>
<script>
    const num = JSFT.CutRadixPoint(807.34691);
</script>
```

- ESM
```js
import { CutRadixPoint } from 'js-func-tools';
const num = CutRadixPoint(807.34691);
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

- ### AddZero 数字前面补0
```js
// type Fn = (n: string | number, len?: number) => string
const str = AddZero(3); // log --> 03
```

- ### AmountThousands 金额千分位格式化
```js
// type Func = (num: number | string) => string;
const str = AmountThousands(1234567.8809); // log --> '1,234,567.8809'
```

- ### ArrayDeWeight 数组去重
```js
const arr = [
    {id: '1', name: '1'},
    {id: '1', name: '2'},
    {id: '3', name: '3'},
];
const result = ArrayDeWeight(arr, 'id')
```

- ### ArrayToTree 数组转树形结构
```js
// parentId = -1 顶级默认父级id为-1
const tree = ArrayToTree(arr);
// 指定顶级父级id为0
const tree2 = ArrayToTree(arr, 0);
```

- ### Average 平均数
```js
// type Fn = (arr: number[], dec?: number) => number
const num = Average([1, 2, 3, 4]);
```

- ### Base64 base64加码/解码
```js
// 加码
const result1 = Base64.encode('Hello base64!');
// 解码
const result2 = Base64.decode(result1);
```

- ### BottomVisible 判断是否滚动到底部
```js
// BottomVisible(ele?: HTMLElement): boolean
const status = BottomVisible();
```

- ### ByteSize 获取字符串的字节长度
```js
const status = ByteSize('hello');
```

- ### Capitalise 首字母大写
```js
const str = Capitalise('hello');
```

- ### CheckColor16 验证16进制颜色
```js
const result = CheckColor16('#fff')
const result2 = CheckColor16('#ffffff')
```

- ### CheckCreditCode 验证统一社会信用代码
```js
const result = CheckCreditCode('xxxxxxx');
```

- ### CheckEmail 验证邮箱
```js
const result = CheckEmail('xxx@163.com')
```

- ### CheckIDCard 验证身份证
```js
const result = CheckIDCard('身份证号')
```

- ### CheckObjType 检查数据类型
```js
const result = CheckObjType('abc', 'string')
const result2 = CheckObjType('abc', 'String')
```

- ### CheckPassword 验证密码
```js
// 弱：纯数字，纯字母，纯特殊字符
const good = CheckPassword('qweasd')
// 中：字母+数字，字母+特殊字符，数字+特殊字符
const better = CheckPasswordBetter('asd123')
// 强：字母+数字+特殊字符
const best = CheckPasswordBest('asd123@#zdfcerty')
```

- ### CheckPhoneNumber 验证手机号
```js
const result = CheckPhoneNumber('13880808080')
```

- ### CheckPlateNumber 验证车牌
```js
const result = CheckPlateNumber('川A66666')
```

- ### CheckPostcode 验证邮政编码
```js
const result = CheckPostcode('610000')
```

- ### CheckUrl 验证url
```js
const result = CheckUrl('https://www.xxx.com')
```

- ### HasClassName el是否包含某个class
```js
// el: HTMLElement, className: string
const result = HasClassName(el, className);
```

- ### AddClassName el添加某个class
```js
// el: HTMLElement, className: string
AddClassName(el, className);
```

- ### RemoveClassName el去除某个class
```js
// el: HTMLElement, className: string
RemoveClassName(el, className);
```

- ### CloneDeep 深拷贝
```js
const result = CloneDeep(tree);
```

- ### ConvertorTranslate 坐标转换
```js
ConvertorTranslate.gps84_To_Bd09(30.401247, 104.041680);
```

- ### CloneDeepComplex 复杂数据深拷贝
```js
const result = CloneDeepComplex(tree);
```

- ### CopyToBoard 复制内容到剪贴板
```js
const status = CopyToBoard('这是复制的内容');
```

- ### CutRadixPoint 保留到小数点以后n位
```js
const num = CutRadixPoint(807.34691);
```

- ### Debounce 防抖函数
```js
// <input id="inp" type="text">
const inp = document.getElementById('inp');
inp.addEventListener('input', Debounce((args) => {
    console.log(11111, args.target.value)
}, 500))
```

- ### DomContainsTarget dom中是否包含目标元素
```js
// type Fn = (dom: HTMLElement, target: HTMLElement) => boolean;
const dom = document.getElementById('dom');
const target = document.getElementById('target');
DomContainsTarget(dom, target);
```

- ### DayOfYear 获取当前时间是当年的第多少天
```js
const result = DayOfYear('2021.10.30');
```

- ### DaysBetween 获取两个日期之间的日差
```js
// type DaysBetween = (a: string | number | Date, b: string | number | Date) => number
const result = DaysBetween('2021.10.30', '2021.11.02');
```

- ### DayOfWeek 获取当前时间是星期几
```js
const result = DayOfWeek('2021.10.30');
```

- ### weekOfYear 当前时间是本年的第几周
```js
const result = WeekOfYear('2021.10.30');
```

- ### FormatDate 格式化时间
```js
// fmt?: string, dateStr?: string | number | Date
// fmt yyyy.mm.dd hh:MM:ss.S
const result = FormatDate('yyyy.mm.dd');
```

- fmt说明：此库中获取日期所使用的fmt参数格式为`yyyy.mm.dd hh:MM:ss.S`,分别对应`年.月.日 时:分:秒.毫秒`，fmt中的年月日连接符可以是`/`,`-`等

- ### GetCurrentDay 获取当天(与formatDate用法一样)
```js
// fmt?: string, dateStr?: string | Date
const result = GetCurrentDay('yyyy.mm.dd');
```

- ### GetPrevDay 获取上一天
```js
// fmt?: string, dateStr?: string | Date
const result = GetPrevDay('yyyy.mm.dd');
```

- ### GetNextDay 获取下一天
```js
// fmt?: string, dateStr?: string | Date
const result = GetNextDay('yyyy.mm.dd');
```

- ### GetTime 获取当前时间的时分秒
```js
// (fmt: 'h' | 'hm' | 'hms', date?: string | Date | null | undefined)
const result = GetTime('hms');
const result2 = GetTime('hms', '2022.01.24');
```

- ### GetDays 获取当月有多少天
```js
// year?: string | number, month?: string | number
const result = GetDays(); // 当月
const result2 = GetDays(2022, 2); // 指定年月
```

- ### GetCurrentWeek/GetPrevWeek/GetNextWeek 获取(当前/上一/下一)周
```js
// type GetWeekFn = (type?: 0 | 1, date?: string) => string[];
// type 0从周日开始算， 1从周一开始算
const cur = GetCurrentWeek(); // 当前日期
const cur2 = GetCurrentWeek(0, '2022.02.24'); // 指定日期
const pre = GetPrevWeek();
const nex = GetNextWeek();
```

- ### GetCurrentMonth/GetPrevMonth/GetNextMonth 获取(当前/上一/下一)月
```js
// date?: string
const cur = GetCurrentMonth(); // 当前日期
const cur2 = GetCurrentMonth('2022.02.24'); // 指定日期
const pre = GetPrevMonth();
const nex = GetNextMonth();
```
- ### GetYMDByYear 根据年获取当前所有年月日
```js
// type Options = { year?: string | number, month?: string | number }
// type TObj = { month: string, children: string[] }
// type Fn = (options: Options) => string[] | TObj[]
const result = GetYMDByYear();
```

- ### HasKeyByObj 判断一个对象是否包含某个属性
```js
// obj: any, key: string
const obj = {name: 'eks'}, key = 'name';
const result = HasKeyByObj(obj, key);
```

- ### DownloadByUrl 根据url地址下载
```js
// url: string | Blob, name?: string
const result = DownloadByUrl(url, name);
```

- ### FilterTreeByFunc 根据条件筛选出符合条件的树形结构数据
```js
const filterFunc = (item) => item.id === 11;
const result = FilterTreeByFunc(tree, filterFunc);
```

- ### FindTarget 通过当前Element查找需要的Element
```js
// target: HTMLElement, tagList: string[]
const target = FindTarget([target], [tagName]);
```

- ### FormatMoney 金钱格式化，三位加逗号
```js
// type Fn = (name: string, origin: string | null) => string | null
const result = FormatMoney(1234567);
```

- ### FormValidate 验证表单
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
const status = FormValidate({
    rules, value, success, fail, confirmValue
});
```

- ### GetAllLeaf 获取所有叶子节点
```js
const result = GetAllLeaf(tree);
```

- ### GetFormData 对象转化为FormData对象
```js
const obj = {id: 1, name: 'eks'};
const result = GetFormData(obj);
```

- ### GetItemByData 根据参数获取当前item
```js
// type GetItemByData = (data: TreeItem[], key: string | number, value: string | number) => TreeItem | null
const result = GetItemByData(tree, 'id', '122');
```

- ### GetNodePath 查找某一节点在树中路径
```js
const result = GetNodePath(tree, 12);
// 根据索引查找
const resultByIndex = GetNodePath(tree, 12, true);
```

- ### GetObjType 获取一个对象的类型
```js
// type Fn = (obj: any, type?: string) => string | boolean
const obj = {name: 'eks'};
const result = GetObjType(obj); // string -> Object
const result2 = GetObjType(obj, 'Object'); // boolean -> true
```

- ### GetPlaceByTrigger 根据触发器获取dom定位位置
```js
// type Fn = (params: { trigger: HTMLElement, dom: HTMLElement, offset?: number, isRight?: boolean }) => { left: number, top: number, isDown: boolean }
const { left, top, isDown } = GetPlaceByTrigger({ trigger: target, dom: div, isRight: false });
```

- ### GetTextWidth 获取文本宽度
```js
// type GetTextWidth = (text: string, options?: { size?: number, family?: string  }) => number
const result = GetTextWidth('Hello');
```

- ### GetUrlParams 获取url参数
```js
// type Fn = (name: string, origin: string | null) => string | null
const result = GetUrlParams(name);
```

- ### IsNullObj 判断是否是空对象
```js
const result = IsNullObj(obj);
```

- ### IsObjValEqual 判断两个对象是否相等
```js
// type IsObjValEqual = (a: Obj, b: Obj, empty: boolean) => boolean
const obj1 = {a: '1', b: '2', c: [1,2,{a:1}]};
const obj2 = {a: '1', b: '2', c: [1,2,{a:12}]};
const result = IsObjValEqual(obj1, obj2);
```

- ### Hex2Rgb hex转rgb颜色
```js
const result = Hex2Rgb('#f0f0f0');
```

- ### IsWeekday 判断给定的日期是否是工作日
```js
const result = IsWeekday('2021.1.24');
```

- ### LargeNumbersAddition 两个大数相加
```js
const result = LargeNumbersAddition(123456, Math.pow(2, 53) - 1);
```

- ### MatchesByValue 根据value匹配字符串（搜索字符串并替换，做高亮使用）
```js
// type More = {split?: boolean, caseEn?: boolean}
// type Fn = (value: string, search: string, jointStart: string, jointEnd: string, more?: More) => string
const result = MatchesByValue(
    '今天是一个A好日a子',
    'A',
    '--',
    '=='
);
```

- ### Obj2Url 对象转url
```js
// type Obj = { [key: string]: any }
// type Obj2Url = (obj: Obj, url?: string) => string
const result = Obj2Url({name: 'Lucy', age: 18}, 'http://www.xxx.com'); // http://www.xxx.com?name=Lucy&age=18
```

- ### RandomHexColor 生成随机颜色
```js
const hexColor = RandomHexColor();
```

- ### RemoveAttrByParam 根据参数删除树的属性
```js
const result = RemoveAttrByParam(tree, 'id');
```

- ### RemoveEmpty 移除对象的空置
```js
// type AnyType = {
//     [key: string | number]: any
// }
// type RemoveEmpty = (o: AnyType) => AnyType
const result = RemoveEmpty(obj);
```

- ### RemoveEmptyChildren 删除树中的空children
```js
const result = RemoveEmptyChildren(tree);
```

- ### RemoveHtmlTag 去除html标签
```js
// str: string
const result = RemoveHtmlTag(str);
```

- ### Rgb2Hex rgb转16进制颜色
```js
const result = Rgb2Hex('rgb(255, 255, 255)');
```

- ### Round 四舍五入到制定位数
```js
// dec = 2 保留位数，默认2
const result = Round(1.345);
```

- ### ScrollToTop 平滑滚动到页面顶部
```js
ScrollToTop();
```

- ### ScrollToPlace 平滑滚动到指定位置
```js
ScrollToPlace({ key: 'scrollLeft' });
```

- ### SensitiveEscape 敏感符号转义 (预防xss攻击)
```js
const result = SensitiveEscape(str);
```

- ### SetParamsByIndex 根据索引设置某个参数的值
```js
// type SetParamsByIndex = (data: TreeItem[], indArr: Array<string | number>, param: string, value: any) => TreeItem[]
const result = SetParamsByIndex(tree, [0, 0], 'open', true);
```

- ### SortHandle 排序
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
const result = SortHandle(arr, { key: 'name' });
```

- ### Throttle 节流函数
```js
// <div id="box"></div>
const box = document.getElementById('box');
box.addEventListener('mousemove', Throttle((args) => {
    console.log(11111, args.target.value)
}, 500))
```

- ### TextEllipsis 设置html标签的title
```js
// type TextEllipsis = (e: MouseEvent, tag?: string) => void
<div id="box" onmouseenter="TextEllipsis">文字内容</div>
```

- ### TreeToArray 数组转树形结构
```js
// parentId = -1 顶级默认父级id为-1
const arr = TreeToArray(tree);
```

- ### Uuid 随机生成n位字符串
```js
const str = Uuid(5);
```


- ### Xsync fetch请求数据封装
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
Xsync({
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
