<template>
    <div class="component-box">
        <h2>switch</h2>
        <div class="base-content">
            <Switch></Switch>
            <Switch v-model="moduleValue"></Switch>
            <Switch :disabled="true" v-model="moduleValue"></Switch>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';
const moduleValue = ref(true);
</script>
<style lang="scss" scoped>
.base-content {
    display: flex;
    align-items: center;
    height: 50px;

    >* {
        margin-right: 20px;
    }
}
</style>