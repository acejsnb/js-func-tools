# js常用工具函数 tools utils

```js
import { cutRadixPoint } from 'js-func-tools';
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
```

- ### average 平均数
```js
const num = average([1, 2, 3, 4]);
```

- ### bottomVisible 判断是否滚动到底部
```js
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
const result = checkEmail('xxx@163.xom')
```

- ### checkIDCard 验证身份证
```js
const result = checkIDCard('身份证号')
```

- ### checkObjType 检查数据类型
```js
const result = checkObjType('abc', 'string')
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

- ### dayOfYear 获取当前时间是当年的第多少天
```js
const result = dayOfYear('2021.10.30');
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
// fmt: string, dateStr?: string
// fmt yyyy-mm-dd hh:MM:ss.S
const result = formatDate('yyyy-mm-dd');
```

- ### getTime 获取当前时间的时分秒
```js
const result = getTime('2022.01.24', 'hms');
```

- ### getDays 获取当月有多少天
```js
const result = getDays(2022, 2);
```

- ### getCurrentWeek/getPrevWeek/getNextWeek 获取(当前/上一/下一)周
```js
// type GetWeekFn = (type?: 0 | 1, date?: string) => string[];
const cur = getCurrentWeek();
const pre = getPrevWeek();
const nex = getNextWeek();
```
- ### getCurrentMonth/getPrevMonth/getNextMonth 获取(当前/上一/下一)月
```js
const cur = getCurrentMonth();
const pre = getPrevMonth();
const nex = getNextMonth();
```

- ### getYMDByYear 根据年获取当前所有年月日
```js
const result = getYMDByYear();
```

- ### downloadByUrl 根据url地址下载
```js
// url: string
const result = downloadByUrl(url);
```

- ### filterTreeByFunc 根据条件筛选出符合条件的树形结构数据
```js
const filterFunc = (item) => item.id === 11;
const result = filterTreeByFunc(tree, filterFunc);
```

- ### findTarget 通过当前Element查找需要的Element
```js
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
const obj = {id: 1, name: 'xs'};
const result = getFormData(obj);
```

- ### getNodePath 查找某一节点在树中路径
```js
const result = getNodePath(tree, 12);
// 根据索引查找
const resultByIndex = getNodePath(tree, 12, true);
```

- ### getObjType 获取一个对象的类型
```js
// obj: any
const result = getObjType(obj);
```

- ### getPlaceByTrigger 根据触发器获取dom定位位置
```js
// type Fn = (params: { trigger: HTMLElement, dom: HTMLElement, offset?: number, isRight?: boolean }) => { left: number, top: number, isDown: boolean }
const { left, top, isDown } = getPlaceByTrigger({ trigger: target, dom: div, isRight: false });
```

- ### getUrlParam 获取url参数
```js
// type Fn = (name: string, origin: string | null) => string | null
const result = getUrlParam(name);
```

- ### isNullObj 判断是否是空对象
```js
const result = isNullObj(obj);
```

- ### hex2Rgb hex转rgb颜色
```js
const result = hex2Rgb('#f0f0f0');
```

- ### isWeekday 判断给定的日期是否是工作日
```js
const result = isWeekday('2021.1.24');
```

- ### matchesByValue 根据value匹配字符串（搜索字符串并替换，做高亮使用）
```js
const result = matchesByValue(
    '今天是一个A好日a子',
    'A',
    '--',
    '=='
);
```

- ### removeAttrByParam 根据参数删除树的属性
```js
const result = removeAttrByParam(tree, 'id');
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

- ### sensitiveEscape 敏感符号转义 (预防xss攻击)
```js
const result = sensitiveEscape(str);
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
