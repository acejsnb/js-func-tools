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

### 1.addZero 数字前面补0
```js
const str = addZero(3);
```

### 2.arrayToTree 数组转树形结构
```js
// parentId = -1 顶级默认父级id为-1
const tree = arrayToTree(arr);
```

### 3.average 平均数
```js
const num = average([1, 2, 3, 4]);
```

### 4.bottomVisible 判断是否滚动到底部
```js
const status = bottomVisible();
```

### 5.byteSize 获取字符串的字节长度
```js
const status = byteSize('hello');
```

### 6.capitalise 首字母大写
```js
const str = capitalise('hello');
```

### 7.copyToBoard 复制内容到剪贴板
```js
const status = copyToBoard('这是复制的内容');
```

### 8.cutRadixPoint 保留到小数点以后n位
```js
const num = cutRadixPoint(807.34691);
```

### 9.dayOfYear 获取当前时间是当年的第多少天
```js
const num = dayOfYear('2021.10.07');
```

### 10.filterTreeByFunc 根据条件筛选出符合条件的树形结构数据
```js
const filterFunc = (item) => item.id === 11;
const result = filterTreeByFunc(tree, filterFunc);
```

### 11.getAllLeaf 获取所有叶子节点
```js
const result = getAllLeaf(tree);
```

### 12.getFormData 对象转化为FormData对象
```js
const obj = {id: 1, name: 'xs'};
const result = getFormData(obj);
```

### 13.getNodePath 查找某一节点在树中路径
```js
const result = getNodePath(tree, 12);
// 根据索引查找
const resultByIndex = getNodePath(tree, 12, true);
```

### 14.isNullObj 判断是否是空对象
```js
const result = isNullObj(obj);
```

### 15.removeAttrByParam 根据参数删除树的属性
```js
const result = removeAttrByParam(tree, 'id');
```

### 16.removeEmptyChildren 删除树中的空children
```js
const result = removeEmptyChildren(tree, 'id');
```

### 17.round 四舍五入到制定位数
```js
// dec = 2 保留位数，默认2
const result = round(1.345);
```

### 18.treeToArray 数组转树形结构
```js
// parentId = -1 顶级默认父级id为-1
const arr = treeToArray(tree);
```

### 19.uuid 随机生成n位字符串
```js
const str = uuid(5);
```

### 20.arrayDeWeight 数组去重
```js
const arr = [
    {id: '1', name: '1'},
    {id: '1', name: '2'},
    {id: '3', name: '3'},
];
const result = arrayDeWeight(arr, 'id')
```

### 21.checkColor16 验证16进制颜色
```js
const result = checkColor16('#fff')
const result2 = checkColor16('#ffffff')
```

### 22.checkEmail 验证邮箱
```js
const result = checkEmail('xxx@163.xom')
```

### 23.checkIDCard 验证身份证
```js
const result = checkIDCard('身份证号')
```

### 24.checkPhoneNumber 验证手机号
```js
const result = checkPhoneNumber('13880808080')
```

### 25.checkPlateNumber 验证车牌
```js
const result = checkPlateNumber('川A66666')
```

### 26.checkPostcode 验证邮政编码
```js
const result = checkPostcode('610000')
```

### 27.checkUrl 验证url
```js
const result = checkUrl('https://www.xxx.com')
```

### 28.cloneDeep 深拷贝
```js
const result = cloneDeep(tree)
```

### 29.cloneDeepComplex 复杂数据深拷贝
```js
const result = cloneDeepComplex(tree)
```

### 30.checkPassword 验证密码
```js
// 弱：纯数字，纯字母，纯特殊字符
const good = checkPassword('qweasd')
// 中：字母+数字，字母+特殊字符，数字+特殊字符
const better = checkPasswordBetter('asd123')
// 强：字母+数字+特殊字符
const best = checkPasswordBest('asd123@#zdfcerty')
```

### 31.formValidate 验证表单
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

### 32.findTarget 通过当前Element查找需要的Element
```js
const target = findTarget([target], [tagName]);
```

### 33.checkCreditCode 验证统一社会信用代码
```js
const result = checkCreditCode('xxxxxxx');
```

### 34.sensitiveEscape 敏感符号转义 (预防xss攻击)
```js
const result = sensitiveEscape('xxx"xxx<x>x&x');
```

### 35.getUrlParam 获取url参数
```js
// type Fn = (name: string, origin: string | null) => string | null
const result = getUrlParam(name);
```

### 36.formatMoney 金钱格式化，三位加逗号
```js
// type Fn = (name: string, origin: string | null) => string | null
const result = formatMoney(1234567);
```

### 37.matchesByValue 根据value匹配字符串（搜索字符串并替换，做高亮使用）
```js
const result = matchesByValue(
    '今天是一个A好日a子',
    'A',
    '--',
    '=='
);
```
