# 根据参数删除树的属性

```js
import { RemoveAttrByParam } from 'js-func-tools';

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

const result = RemoveAttrByParam(tree, 'id');
console.log(result);

```
