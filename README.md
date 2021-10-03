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

### arrayDeWeight 数组去重
```js
const arr = [
    {id: '1', name: '1'},
    {id: '1', name: '2'},
    {id: '3', name: '3'},
];
const result = arrayDeWeight(arr, 'id')
```

### arrayToTree 数组转树形结构
```js
const tree = arrayToTree(arr, -1);
```

### copyToBoard 复制内容到剪贴板
```js
const status = copyToBoard('这是复制的内容');
```

### cutRadixPoint 保留到小数点以后n位
```js
const num = cutRadixPoint(807.34691);
```

### filterTreeByFunc 根据条件筛选出符合条件的树形结构数据
```js
const filterFunc = (item) => item.id === 11;
const result = filterTreeByFunc(tree, filterFunc);
```

### getAllLeaf 获取所有叶子节点
```js
const result = getAllLeaf(tree);
```

### getFormData 对象转化为FormData对象
```js
const obj = {id: 1, name: 'xs'};
const result = getFormData(obj);
```

### getNodePath 查找某一节点在树中路径
```js
const result = getNodePath(tree, 12);
// 根据索引查找
const resultByIndex = getNodePath(tree, 12, true);
```

### removeAttrByParam 根据参数删除树的属性
```js
const result = removeAttrByParam(tree, 'id');
```

### removeEmptyChildren 删除树中的空children
```js
const result = removeEmptyChildren(tree, 'id');
```

### treeToArray 数组转树形结构
```js
const arr = treeToArray(tree);
```

### uuid 随机生成n位字符串
```js
const str = uuid(5);
```
