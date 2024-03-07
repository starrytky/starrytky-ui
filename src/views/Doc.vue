<template>
    <div class="doc-page">
        <topnav />
        <div class="content">
            <aside v-if="asideVisible">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue';
import { Ref, inject } from 'vue';

const asideVisible = inject<Ref<boolean>>("asideVisible");

</script>

<style scoped lang="scss">
.doc-page {
    height: 100%;

    .content {
        display: flex;
        height: calc(100% - 80px);

        aside {
            width: 30%;
            min-width: 200px;
            max-width: 300px;
            background-color: rgb(203, 227, 253);


            >ul {
                padding: 0px;
                display: flex;
                flex-direction: column;
                margin: 0px;

                >li {
                    height: 60px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding-left: 40px;
                }

                >li:hover {
                    border-bottom: none;
                    box-shadow: -3px 0px 7px 0px rgba(71, 71, 71, 0.75);
                }
            }
        }

        main {
            flex: 1;
            background-color: rgba(239, 246, 255, 0.7);
            padding: 20px;
        }
    }
}
</style>