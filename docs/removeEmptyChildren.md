# 删除树中的空children

```js
import { removeEmptyChildren } from 'x-utils';

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
            {'name': '二级2', 'id': 122, 'pid': 1, children: []}
        ]
    },
    {
        'name': '一级2',
        'id': 2,
        'pid': -1,
        'children': [{'name': '二级21', 'id': 221, 'pid': 2}, {'name': '二级22', 'id': 222, 'pid': 2}]
    }
];

const result = removeEmptyChildren(tree, 'id');
console.log(result);

```
