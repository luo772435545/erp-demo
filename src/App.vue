<template>
  <div id="app">
    <v-main></v-main>
  </div>
</template>

<script>


import vMain from './layout/main';
export default {
  name: 'App',
  components: {
    vMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
