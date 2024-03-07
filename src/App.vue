<template>
  <router-view />
</template>

<script setup lang="ts" name="App">
import { ref, provide } from 'vue';
const winWidth = document.documentElement.clientWidth;
const asideVisible = ref(winWidth >= 500);
provide("asideVisible", asideVisible);

</script>
