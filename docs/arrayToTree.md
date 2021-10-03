# 数组转树形结构

```js
import { arrayToTree } from 'js-func-tools';

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

const tree = arrayToTree(arr, -1);
console.log(tree);

```
