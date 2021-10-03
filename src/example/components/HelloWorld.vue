<script setup>
import { getNodePath, arrayToTree, treeToArray } from '../../../dist/index.js';
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

const result = getNodePath(tree, 1212);
console.log(result);
// 根据索引查找
const resultByIndex = getNodePath(tree, 1212, true);
console.log(resultByIndex);

console.log(arrayToTree(arr, -1));
console.log(JSON.stringify(arrayToTree(arr, -1)));
console.log(JSON.stringify(treeToArray(tree)));


defineProps({
    msg: String
})
</script>

<template>
    <h1>{{ msg }}</h1>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
