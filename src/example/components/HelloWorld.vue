<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import {
    AddZero, GetNodePath, ArrayToTree, TreeToArray, ArrayDeWeight, CloneDeep, CloneDeepComplex,
    FormatMoney, DayOfWeek, WeekOfYear, SortHandle, DaysBetween, IsObjValEqual,
    MatchesByValue, GetItemByData, FormatDate,
    GetPrevDay, GetNextDay,
    AmountThousands,
    Round
} from '@/.';

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
const data = reactive([
    {id:"0",name:"系统类或设备类",checked:"checked",disabled:false, reg: /\d/, err: new Error("xxx")},
  {id:"1",name:"空间和业态",checked:"uncheck",disabled:false, fn: () => {}}
])

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

// console.log('AddZero==', AddZero(2));

const result = GetNodePath(tree2, '122', true);
// console.log('GetNodePath===', result);
// 根据索引查找
// const resultByIndex = GetNodePath(tree2, '1212', true);
// console.log(resultByIndex);

// console.log(ArrayToTree(arr, -1));
// console.log(JSON.stringify(ArrayToTree(arr, -1)));
// console.log(TreeToArray(tree));

const arr2 = [
    {id: '1', name: '1', func: () => {console.log(123)}},
    {id: '1', name: '2'},
    {id: '3', name: '3'},
];
// console.log(ArrayDeWeight(arr2, 'id'));
// console.log('cloneDeep==', CloneDeepComplex(arr2));
// console.log('cloneDeepComplex==', CloneDeepComplex(data));

// console.log('formatMoney==', FormatMoney('1234567'));
const str = '2021.12.24';
// console.log('dayOfWeek==', DayOfWeek(str));
// console.log('weekOfYear==', WeekOfYear(str));

const obj1 = {a: '1', b: '2', c: [1,2,{a:1}], d: ''};
const obj2 = {a: '1', b: '2', c: [1,2,{a:1}]};
// console.log('isObjValEqual==', IsObjValEqual(obj1, obj2, true));

// console.log(SortHandle(arr, { key: 'id' }));
// console.log(SortHandle([2,4,6,6,7,34,43,5,35,4,35,3,46]));
// console.log(SortHandle(['c', 'v', 'b'], { type: 'string' }));

// console.log('daysBetween===', daysBetween('2021.10.30', '2021.11.02'));
// console.log('matchesByValue===', MatchesByValue('今天是一个A好日a子', 'A', '--', '--'));
// console.log('matchesByValue===', MatchesByValue('今天是一个A好日a子', 'A', '--', '--', {caseEn: true}));
// console.log('matchesByValue===', MatchesByValue('今天是一个A好日a子', 'A是', '--', '--', {split: true}));

console.time('abc')
console.log('GetItemByData===', GetItemByData(tree, 'id', 122));
console.timeEnd('abc')


console.time('find')
console.log('find===', tree.find(d => d.id === 122));
console.timeEnd('find')

console.log('FormatDate', FormatDate('yyyy.mm.dd hh:MM:ss', 1662965475469))
console.log('FormatDate', FormatDate('yyyy.mm.dd hh:MM:ss', '2023/11/16 17:03:00','Asia/Kolkata'))


defineProps({
    msg: String
})

onMounted(() => {
  const a = document.getElementById('a') as HTMLDivElement,
      b = document.getElementById('b') as HTMLDivElement,
      c = document.getElementById('c') as HTMLDivElement,
      d = document.getElementById('d') as HTMLDivElement,
      d2 = document.querySelector('#d') as HTMLDivElement;
  console.log(a.contains(b));
  console.log(a.compareDocumentPosition(b));
  console.log(a.compareDocumentPosition(c));
  console.log(b.compareDocumentPosition(b));
  console.log(a.compareDocumentPosition(c));
  console.log(b.compareDocumentPosition(a));
  console.log(d === d2);
  console.log(GetPrevDay('', new Date(),2));
  console.log(GetNextDay('', new Date(),2));
  console.log(AmountThousands('2123456.5464564564561'));
  console.log(Round('2123456.4', 5));
  console.log(Round('2123456.5464564564561', 5));
  console.log(Round('2123456.5464564564561', 5, true));
})
</script>

<template>
    <h1>{{ msg }}</h1>
  <div id="a">
    <div id="b"></div>
    <div id="c"></div>
  </div>
  <div id="d"></div>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
