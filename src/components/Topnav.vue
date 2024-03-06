<template>
    <div class="topnav">
        <div @click="goHome" class="logo">logo</div>
        <div @click="goDoc" class="menu">文档</div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter();

const goHome = () => {
    router.push({ path: '/' })
}

const goDoc = () => {
    router.push({ path: '/doc' })
}
</script>

<style lang="scss">
.topnav {
    position: relative;
    z-index: 2;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
    font-size: 20px;
    background-color: rgb(197, 181, 255);
    box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.75);


    .logo {
        font-weight: 600;
        cursor: pointer;
    }

    .logo:hover {
        color: #3a7fcf;
    }

    .menu {
        font-size: 20px;
        font-weight: 400;
        cursor: pointer;
    }

    .menu:hover {
        color: #5288c5;
    }
}
</style>