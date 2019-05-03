<template>
  <div id="app">

    <div class="bottom">
      <h1> Lure Type Generator </h1>
      <textarea id="textfield" autofocus v-model="input_text" />
              
      <div class="slug">
        <p>forked from spacetypegenerator.com by <a href="http://www.kielm.com">kielm</a><br><br>
        </p>
        <!-- <button onclick="myFunction()">ReadMe</button> -->
      </div>
    </div>
  
    <div class="top">
      <h3><a href="index.html">CYLINDER</a></h3>
      <h3><a href="field.html">FIELD</a></h3>
      <h3><a href="stripes.html">STRIPES</a></h3>
      <h3><a href="coil.html">COIL</a></h3>
      <h3><a href="flag.html">FLAG</a></h3>  
    </div>
    <!-- <Sketch /> -->
  </div>
</template>

<script>
import Sketch from "./components/Sketch.vue";

export default {
  name: "app",
  components: {
    Sketch
  },
  data() {
    return {
      input_text: 'instant t',
      font: {
        selected: 'Sole-Sans-BlackCondensedItalic.woff'
      }
    }
  }
};
</script>

<style lang="scss">
.bottom {
  position: fixed;
  bottom:0;
  right:0;
  text-align:left;
  padding-right:25px;
  padding-bottom:20px;
}

.top {
  position: fixed;
  top:0;
  right:0;
  text-align:right;
  padding-right:25px;
  padding-top:20px;
}

h1 {
  font-family:'IBM Plex Mono', monospace;
  font-size: 18px;
  font-weight: 100;
  text-align:center;
  color: #fff;
  background-color:#000;
  text-decoration: underline;
}

h2 {
  font-family:'IBM Plex Mono', monospace;
  font-size: 8px;
  font-style: italic;
  font-weight: 300;
  text-align: center;
  letter-spacing: 5px;
  color: #000;
  margin-top:-6px;
  text-transform:uppercase;
}

h3 {
	font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  text-decoration:underline;
  font-weight: 300;
  text-align: right;
  margin-top:-6px;
  padding:3px;
  text-transform:uppercase;
  background-color:#FFF;
}

b {
  font-weight:400;
}

p {
  font-family:'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 300;
  color: #000;
}

.slug {
  color:#0000FF;
}

a {
  color: #000;
  font-weight:400;
  text-decoration: underline;
}

a:active {
  color:#FFF;
  background:#000;
}

textarea {
  width: 100%;
}
</style>
