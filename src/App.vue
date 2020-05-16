<template>
  <div id="app">
    <Toolbar/>
    <Home/>
  </div>
</template>

<script>
// import Home from './components/Home/Home.vue';
import Toolbar from './components/Toolbar/Toolbar.vue';

export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
