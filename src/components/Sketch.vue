<template>
  <div ref="sketch"></div>
</template>
<script>
import p5 from "p5";

export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.startP5Sketch();
  },
  beforeDestroy() {},
  watch: {},
  computed: {},
  methods: {
    startP5Sketch() {
      console.log(`Sketch / methods: startP5Sketch`);

      let sketch = p => {
        p.preload = () => {};
        p.setup = () => {
          p.background(`#FF6A55`);
        };
        p.draw = () => {
          p.fill(`white`);
          p.noStroke();
          p.ellipse(50, 50, 25, 25);
        };
      };

      let sketch_element = this.$refs.sketch;
      sketch_element.innerHTML = "";
      this.sketch = new p5(sketch, sketch_element);
    }
  }
};
</script>
<style></style>
