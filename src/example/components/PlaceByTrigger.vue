<script setup>
// import { getPlaceByTrigger } from '../../../dist/index.js';
import { getPlaceByTrigger } from '../../index';

const click = (e) => {
    const { target } = e;
    const div = document.createElement('div');
    div.className = 'modal-div';
    div.innerHTML = `
    <br><br><br><br><br><br><br><br><br><br><br>
    `;
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
    width: 600px;
}
.modal-div {
    position: absolute;
    background-color: #42b983;
    width: 200px;
    font-size: 14px;
    opacity: .4;
}
</style>
