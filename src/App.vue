<template>
  <div id="app">
    <Toolbar/>
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home/Home.vue';
import Toolbar from './components/Toolbar/Toolbar.vue';

export default {
  name: 'App',
  components: {
    Home,
    Toolbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  font-family: 'Jost', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
