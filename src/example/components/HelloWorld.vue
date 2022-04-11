<script setup>
import { addZero, getNodePath, arrayToTree, treeToArray, arrayDeWeight, cloneDeep, cloneDeepComplex, formatMoney, dayOfWeek, weekOfYear, sortHandle } from '../../../dist/index.js';
import isObjValEqual from '../../utils/isObjValEqual';
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
const tree2 = [
    {
        'name': '一级1',
        'id': '1',
        'parentId': '0',
        'children': [
            {
                'name': '二级1',
                'id': '121',
                'parentId': '1',
                'children': [{'name': '三级1', 'id': '1211', 'parentId': '121', 'children': []}, {'name': '三级2', 'id': '1212', 'parentId': '121', 'children': []}]
            },
            {'name': '二级2', 'id': '122', 'parentId': '1', 'children': []}
        ]
    },
    {
        'name': '一级2',
        'id': '2',
        'parentId': '0',
        'children': [{'name': '二级21', 'id': '221', 'parentId': '2', 'children': []}, {'name': '二级22', 'id': '222', 'parentId': '2', 'children': []}]
    }
];

// console.log('addZero==', addZero(2));

const result = getNodePath(tree2, '122', true);
// console.log('getNodePath===', result);
// 根据索引查找
// const resultByIndex = getNodePath(tree2, '1212', true);
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
// console.log('cloneDeep==', cloneDeepComplex(arr2));

// console.log('formatMoney==', formatMoney('1234567'));
const str = '2021.12.24';
// console.log('dayOfWeek==', dayOfWeek(str));
// console.log('weekOfYear==', weekOfYear(str));

const obj1 = {a: '1', b: '2', c: [1,2,{a:1}]};
const obj2 = {a: '1', b: '2', c: [1,2,{a:12}]};
// console.log('isObjValEqual==', isObjValEqual(obj1, obj2));

console.log(sortHandle(arr, { key: 'id' }));
console.log(sortHandle([2,4,6,6,7,34,43,5,35,4,35,3,46]));
console.log(sortHandle(['c', 'v', 'b'], { type: 'string' }));


defineProps({
    msg: String
})
</script>

<template>
<!--    <h1>{{ msg }}</h1>-->
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
