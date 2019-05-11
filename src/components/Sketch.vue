<template>
  <div>
    <div ref="sketch"></div>
  </div>
</template>
<script>
import { setTimeout, setInterval } from 'timers';
// import p5 from "p5";
// import sketch from './sketches/sketch.js';

export default {
  props: {},
  components: {},
  data() {
    return {
      sketch: null,
      publicPath: process.env.BASE_URL
    };
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

      // let sketch = p => {
      //   p.preload = () => {};
      //   p.setup = () => {
      //     p.background(`#FF6A55`);
      //   };
      //   p.draw = () => {
      //     p.fill(`white`);
      //     p.noStroke();
      //     p.ellipse(50, 50, 25, 25);
      //   };
      // };

      let sketch_element = this.$refs.sketch;
      sketch_element.innerHTML = "";

      var ele = document.getElementsByTagName("canvas");
      for(var i = ele.length-1;i>=0;i--)
      {
        ele[i].parentNode.removeChild(ele[i]);
      }

      // const vars_to_save = ['typeX', 'typeY'];
      // var saved = JSON.parse(localStorage.getItem(this.$root.sketch_to_load));
      // Object.keys(saved).map((prop) => window[prop] = saved[prop]);
      // console.log(window.typeX);

      this.$nextTick(() => {
        var script = document.createElement(`script`);
        script.type = `text/javascript`;
        script.src = `${this.publicPath}sketches/${this.$root.sketch_to_load}`;
        sketch_element.appendChild(script);
        // this.sketch = new p5('./sketches/sketch.js', sketch_element);
      });

      setInterval(() => {
        const to_save = vars_to_save.reduce((acc, v) => {
          acc[v] = window[v];
          return acc;
        }, {});
        localStorage.setItem(
          this.$root.sketch_to_load,
          JSON.stringify(to_save)
        );
      }, 1000);
    }
  }
};
</script>
<style></style>
