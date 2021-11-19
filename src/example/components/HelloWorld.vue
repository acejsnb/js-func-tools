<script setup>
import { getNodePath, arrayToTree, treeToArray, arrayDeWeight, cloneDeep, cloneDeepComplex } from '../../../dist/index.js';
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

const result = getNodePath(tree, 1212);
// console.log(result);
// 根据索引查找
const resultByIndex = getNodePath(tree, 1212, true);
// console.log(resultByIndex);

// console.log(arrayToTree(arr, -1));
// console.log(JSON.stringify(arrayToTree(arr, -1)));
// console.log(treeToArray(tree));

const arr2 = [
    {id: '1', name: '1', func: () => {console.log(123)}},
    {id: '1', name: '2'},
    {id: '3', name: '3'},
];
// console.log(arrayDeWeight(arr2, 'id'));
console.log('cloneDeep==', cloneDeepComplex(arr2));


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
