<template>
  <div id="app">
    <Toolbar />
    <router-view></router-view>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar/Toolbar.vue";
// import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Toolbar,
    // Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  font-family: "Jost", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}
</style>
