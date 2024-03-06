<template>
    <div class="home-page">
        <topnav />
        <div class="banner">
            <h1>starrytky - UI</h1>
            <h2>一个简易的 UI 框架</h2>
            <p class="actions">
                <a>github</a>
                <a @click="goDoc">开始</a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue';
import { useRoute, useRouter } from 'vue-router'
const router = useRouter();

const goDoc = () => {
    router.push({ path: '/doc' })
}
</script>

<style lang="scss" scoped>
.home-page {
    position: relative;
    height: 100%;
    background-color: rgb(255, 251, 245);
    color: #2c3e50;
    text-align: center;
    user-select: none;

    &::after {
        z-index: 1;
        position: fixed;
        content: "";
        display: inline-block;
        width: 120%;
        height: 1000px;
        border-radius: 50%;
        background-color: #e99a9a;
        top: -30%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 2px 12px -1px rgba(0, 0, 0, 0.75);

    }

    .banner {
        position: relative;
        z-index: 2;
        margin-top: 250px;

        h1 {
            font-size: 40px;
            font-weight: 700;
        }

        h2 {
            font-weight: 500;
        }

        .actions {
            margin: auto;
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 60px;

            a {
                cursor: pointer;
                border-radius: 20px;
                // border: 1px solid rgb(255, 213, 213);
                padding: 10px 20px;
                background-color: rgb(255, 237, 224);
            }

            a:hover {
                background-color: rgb(243, 197, 171);
                box-shadow: 0px 1px 7px -1px rgba(0, 0, 0, 0.75);
            }
        }
    }
}
</style>