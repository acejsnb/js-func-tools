<script setup>
import {getNodePath} from '../../../dist/index.js';
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

const result = getNodePath(tree, 12);
console.log(result);
// 根据索引查找
const resultByIndex = getNodePath(tree, 12, true);
console.log(resultByIndex);


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
