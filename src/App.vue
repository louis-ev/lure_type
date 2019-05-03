<template>
  <div id="app">
    <Sketch />
  </div>
</template>

<script>
import Sketch from "./components/Sketch.vue";

export default {
  name: "app",
  components: {
    Sketch
  }
};
</script>

<style lang="scss">
body {
  font-family: sans-serif;

  line-height: 1.5;
  background-color: white;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
