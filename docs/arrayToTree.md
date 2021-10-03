# 数组转树形结构

```js
import { arrayToTree } from 'x-utils';

const arr = [
    {
        name: '小明',
        id: 1,
        pid: -1,
    },
    {
        name: '小花',
        id: 11,
        pid: 1,
    },
    {
        name: '小华',
        id: 111,
        pid: 11,
    },
    {
        name: '小李',
        id: 112,
        pid: 11,
    },
    {
        name: '小红',
        id: 12,
        pid: 1,
    },
    {
        name: '小王',
        id: 2,
        pid: -1,
    },
    {
        name: '小林',
        id: 21,
        pid: 2,
    },
    {
        name: '小李',
        id: 22,
        pid: 2,
    }
];

const tree = arrayToTree(arr, -1);
console.log(tree);

```
