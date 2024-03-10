<template>
  <router-view />
</template>

<script setup lang="ts" name="App">
import { ref, provide } from 'vue';
import { useRouter } from 'vue-router';
const winWidth = document.documentElement.clientWidth;
const asideVisible = ref(winWidth >= 500);
provide("asideVisible", asideVisible);
useRouter().afterEach(() => {
  //切换router时判断当前的side是否隐藏
  if (winWidth <= 500) {
    asideVisible.value = false;
  }
})

</script>
