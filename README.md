# js常用工具函数 tools utils

```js
import { cutRadixPoint } from 'js-func-tools';
```

### demo data
```js
const arr = [
    {'id': 1, 'name': '一级1', 'pid': -1},
    {'id': 121, 'name': '二级1', 'pid': 1},
    {'id': 1211, 'name': '三级1', 'pid': 121},
    {'id': 1212, 'name': '三级2', 'pid': 121},
    {'id': 122, 'name': '二级2', 'pid': 1},
    {'id': 2, 'name': '一级2', 'pid': -1},
    {'id': 221, 'name': '二级21', 'pid': 2},
    {'id': 222, 'name': '二级22', 'pid': 2}
];

const tree = [
    {
        'name': '一级1',
        'id': 1,
        'pid': -1,
        'children': [
            {
                'name': '二级1',
                'id': 121,
                'pid': 1,
                'children': [{'name': '三级1', 'id': 1211, 'pid': 121}, {'name': '三级2', 'id': 1212, 'pid': 121}]
            },
            {'name': '二级2', 'id': 122, 'pid': 1}
        ]
    },
    {
        'name': '一级2',
        'id': 2,
        'pid': -1,
        'children': [{'name': '二级21', 'id': 221, 'pid': 2}, {'name': '二级22', 'id': 222, 'pid': 2}]
    }
];
```

### 1.addZero 数字前面补0
```js
const str = addZero(3);
```

### 2.arrayToTree 数组转树形结构
```js
const tree = arrayToTree(arr, -1);
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

### 9.dayOfYear 获取当前时间是当年的di多少天
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
const result = round(1.345);
```

### 18.treeToArray 数组转树形结构
```js
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
