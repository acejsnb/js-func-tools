<script setup>
// import { getPlaceByTrigger } from '../../../dist/index.js';
import { getPlaceByTrigger } from '../../index';
import getYMDByYear from '../../utils/getYMDByYear'
import { formatDate } from '../../utils/dateHandle'

console.log(getYMDByYear());
console.log(formatDate('yyyy-mm-dd', '2022.01.01 08:00'));

const click = (e) => {
    const { target } = e;
    const div = document.createElement('div');
    div.className = 'modal-div';

    div.innerHTML = `${'啊'.repeat(Math.random() * 10)}`;
    const { left = 0, top = 0 } = getPlaceByTrigger({ trigger: target, dom: div, isRight: false });
    div.style.left = `${left}px`;
    div.style.top = `${top}px`;
    document.body.appendChild(div);
};

</script>

<template>
    <div class="box">
        <div style="display: flex;justify-content: space-between">
            <button @click="click">Click</button>
            <button @click="click">Click</button>
        </div>
    </div>
    <br><br><br><br><br>
    <div class="box" style="text-align: right;">
        <button @click="click">Click</button>
    </div>
    <br><br><br><br><br>
    <div class="box" style="text-align: center;">
        <button @click="click">Click</button>
    </div>
    <div class="box" style="text-align: center;">
        <button @click="click" style="width: 300px">Click</button>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="box">
        <div style="display: flex;justify-content: space-between">
            <button @click="click">Click</button>
            <button @click="click" style="width: 200px">Click</button>
        </div>
    </div>
</template>

<style>
.box {
    padding: 50px;
    /*width: 600px;*/
}
.modal-div {
    position: absolute;
    background-color: #42b983;
    /*width: 200px;*/
    font-size: 14px;
    opacity: .4;
}
</style>
