<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>导航 | <router-link to="/">home</router-link>| <router-link to="/xxxx">about</router-link></div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
