# 根据条件筛选出符合条件的树形结构数据

```js
import { filterTreeByFunc } from 'x-utils';

const tree = [
    {
        "name": "小明",
        "id": 1,
        "pid": -1,
        "children": [
            {
                "name": "小花",
                "id": 11,
                "pid": 1,
                "children": [{"name": "小华", "id": 111, "pid": 11}, {"name": "小李", "id": 112, "pid": 11}]
            },
            {"name": "小红", "id": 12, "pid": 1}
        ]
    },
    {
        "name": "小王",
        "id": 2,
        "pid": -1,
        "children": [{"name": "小林", "id": 21, "pid": 2}, {"name": "小李", "id": 22, "pid": 2}]
    }
];

// 筛选
const filterFunc = (item) => item.id === 11;
const result = filterTreeByFunc(tree, filterFunc);
console.log(result);

```
