<template>
  <div ref="sketch"></div>
</template>
<script>
import { setTimeout } from 'timers';
// import p5 from "p5";
// import sketch from './sketches/sketch.js';

export default {
  props: {},
  components: {},
  data() {
    return {
      sketch: null,
      publicPath: process.env.BASE_URL,
      filename: 'sketch.js'
    };
  },
  created() {},
  mounted() {

    debugger;
    var query = new URLSearchParams(window.location.search);
    if(query.get('sketch') !== null){ 
      this.filename = query.get('sketch');
    }

    this.startP5Sketch(this.filename);
    // setTimeout(() => {
      // this.startP5Sketch('sketch_stripes.js');
    // },2000);
  },
  beforeDestroy() {},
  watch: {},
  computed: {},
  methods: {
    startP5Sketch(filename) {
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

      var ele = document.getElementsByName("canvas");
      for(var i = ele.length-1;i>=0;i--)
      {
        ele[i].parentNode.removeChild(ele[i]);
      }


      this.$nextTick(() => {  
        var script = document.createElement(`script`);
        script.type = `text/javascript`;
        script.src = `${this.publicPath}sketches/${filename}`;
        sketch_element.appendChild(script);
        // this.sketch = new p5('./sketches/sketch.js', sketch_element);
      });
    }
  }
};
</script>
<style></style>
