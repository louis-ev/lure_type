<template>
  <div id="app">

    <div class="bottom">
      <h1> Lure Type Generator </h1>
      <textarea id="textfield" autofocus>instant t</textarea>
      <div class="slug">
        <p>forked from spacetypegenerator.com by <a href="http://www.kielm.com">kielm</a></p>
        <!-- <button onclick="myFunction()">ReadMe</button> -->
      </div>
    </div>
  
    <div class="top">
      <h3><a href="index.html">CYLINDER</a></h3>
      <h3><a href="index.html?sketch=sketch_field">FIELD</a></h3>
      <h3><a href="index.html?sketch=sketch_stripes">STRIPES</a></h3>
      <h3><a href="index.html?sketch=sketch_coil_saveBeta">COIL</a></h3>
      <h3><a href="index.html?sketch=sketch_flag">FLAG</a></h3>
      <!-- {{ font.selected }} -->
    </div>

    <div class="m_selectType" v-if="!['sketch_flag.js'].includes($root.sketch_to_load)">
      <div>
        <select v-model="font.selected">
          <option v-for="font in font.available" :key="font" :value="font">
            {{ font }}
          </option>
        </select>
        <small>Déplacer la typo verticalement {{ move_type_down }}</small>
        <input type="range" v-model.number="move_type_down" min="-100" max="100" step="1" />
        <small>Taille typo {{ font_size }}</small>
        <input type="range" v-model.number="font_size" min="-100" max="100" step="1" />
        <!-- <a :href="`type=${font.selected}`">Recharger le sketch</a> -->
      </div>
    </div>

    <Sketch />
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
      move_type_down: 0,
      font_size: 32,
      input_text: 'instant t',
      font: {
        selected: 'National-Bold.otf',
        available: [
'IBMPlexMono-Regular.otf',

'Cardone-Bold.otf', 'Cardone-Italic.otf', 'Cardone-Light.otf','Cardone-Regular.otf',

'Le_Murmure-Regular_web.otf',

'NaokoAAtrial-01-Light.otf','NaokoAAtrial-01-LightItalic.otf','NaokoAAtrial-02-Semilight.otf','NaokoAAtrial-02-SemilightItalic.otf','NaokoAAtrial-03-Regular.otf','NaokoAAtrial-03-RegularItalic.otf','NaokoAAtrial-04-Medium.otf','NaokoAAtrial-04-MediumItalic.otf','NaokoAAtrial-05-Bold.otf','NaokoAAtrial-05-BoldItalic.otf','NaokoAAtrial-06-Extrabold.otf','NaokoAAtrial-06-ExtraboldItalic.otf','NaokoAAtrial-07-Black.otf','NaokoAAtrial-07-BlackItalic.otf',

'National-Bold.otf','National-BoldItalic.otf','National-Book.otf', 'National-BookItalic.otf', 'National-Light.otf', 'National-LightItalic.otf', 'National-Regular.otf','National-Thin.otf','National-ThinItalic.otf',

'MachoMoustache-Bold.ttf','MachoMoustache-Light.ttf','MachoMoustache-Medium.ttf','MachoMoustache-Regular.ttf','MachoMoustache-Thin.ttf',
'Sole-Sans-Black.ttf', 'Sole-Sans-BlackCondensed.ttf','Sole-Sans-BlackCondensedItalic.ttf','Sole-Sans-BlackExtended.ttf','Sole-Sans-BlackExtendedItalic.ttf','Sole-Sans-BlackExtraCondensed.ttf','Sole-Sans-BlackExtraCondensedItalic.ttf','Sole-Sans-BlackItalic.ttf','Sole-Sans-Bold.ttf','Sole-Sans-BoldCondensed.ttf','Sole-Sans-BoldCondensedItalic.ttf','Sole-Sans-BoldExtended.ttf','Sole-Sans-BoldExtendedItalic.ttf','Sole-Sans-BoldExtraCondensed.ttf','Sole-Sans-BoldExtraCondensedItalic.ttf','Sole-Sans-BoldItalic.ttf','Sole-Sans-Book.ttf','Sole-Sans-BookCondensed.ttf','Sole-Sans-BookCondensedItalic.ttf','Sole-Sans-BookExtended.ttf','Sole-Sans-BookExtendedItalic.ttf','Sole-Sans-BookExtraCondensed.ttf','Sole-Sans-BookExtraCondensedItalic.ttf','Sole-Sans-BookItalic.ttf','Sole-Sans-ExtraBold.ttf','Sole-Sans-ExtraBoldCondensed.ttf','Sole-Sans-ExtraBoldCondensedItalic.ttf','Sole-Sans-ExtraBoldExtended.ttf','Sole-Sans-ExtraBoldExtendedItalic.ttf','Sole-Sans-ExtraBoldExtraCondensed.ttf','Sole-Sans-ExtraBoldExtraCondensedItalic.ttf','Sole-Sans-ExtraBoldItalic.ttf','Sole-Sans-Light.ttf','Sole-Sans-LightCondensed.ttf','Sole-Sans-LightCondensedItalic.ttf','Sole-Sans-LightExtended.ttf','Sole-Sans-LightExtendedItalic.ttf','Sole-Sans-LightExtraCondensed.ttf','Sole-Sans-LightExtraCondensedItalic.ttf','Sole-Sans-LightItalic.ttf','Sole-Sans-Medium.ttf','Sole-Sans-MediumCondensed.ttf','Sole-Sans-MediumCondensedItalic.ttf','Sole-Sans-MediumExtended.ttf','Sole-Sans-MediumExtendedItalic.ttf','Sole-Sans-MediumExtraCondensed.ttf','Sole-Sans-MediumExtraCondensedItalic.ttf','Sole-Sans-MediumItalic.ttf','Sole-Sans-Regular.ttf','Sole-Sans-RegularCondensed.ttf','Sole-Sans-RegularCondensedItalic.ttf','Sole-Sans-RegularExtended.ttf','Sole-Sans-RegularExtendedItalic.ttf','Sole-Sans-RegularExtraCondensed.ttf','Sole-Sans-RegularExtraCondensedItalic.ttf','Sole-Sans-RegularItalic.ttf','Sole-Sans-SemiBold.ttf','Sole-Sans-SemiBoldCondensed.ttf','Sole-Sans-SemiBoldCondensedItalic.ttf','Sole-Sans-SemiBoldExtended.ttf','Sole-Sans-SemiBoldExtendedItalic.ttf','Sole-Sans-SemiBoldExtraCondensed.ttf','Sole-Sans-SemiBoldExtraCondensedItalic.ttf','Sole-Sans-SemiBoldItalic.ttf','Sole-Sans-Thin.ttf','Sole-Sans-ThinCondensed.ttf','Sole-Sans-ThinCondensedItalic.ttf','Sole-Sans-ThinExtended.ttf','Sole-Sans-ThinExtendedItalic.ttf','Sole-Sans-ThinExtraCondensed.ttf','Sole-Sans-ThinExtraCondensedItalic.ttf','Sole-Sans-ThinItalic.ttf','SoleBigDisplayBlack.ttf','SoleBigDisplayBlackIt.ttf','SoleBigDisplayBold.ttf','SoleBigDisplayBoldIt.ttf','SoleBigDisplayExtraBold.ttf','SoleBigDisplayExtraBoldIt.ttf','SoleBigDisplayLight.ttf','SoleBigDisplayLightIt.ttf','SoleBigDisplayMedium.ttf','SoleBigDisplayMediumIt.ttf','SoleBigDisplayRegular.ttf','SoleBigDisplayRegularIt.ttf','SoleCaptionBlack.ttf','SoleCaptionBlackIt.ttf','SoleCaptionBold.ttf','SoleCaptionBoldIt.ttf','SoleCaptionLight.ttf','SoleCaptionLightIt.ttf','SoleCaptionMedium.ttf','SoleCaptionMediumIt.ttf','SoleCaptionRegular.ttf','SoleCaptionRegularIt.ttf','SoleDisplayBlack.ttf','SoleDisplayBlackIt.ttf','SoleDisplayBold.ttf','SoleDisplayBoldIt.ttf','SoleDisplayExtraBold.ttf','SoleDisplayExtraBoldIt.ttf','SoleDisplayLight.ttf','SoleDisplayLightIt.ttf','SoleDisplayMedium.ttf','SoleDisplayMediumIt.ttf','SoleDisplayRegular.ttf','SoleDisplayRegularIt.ttf','SoleHeadlineBlack.ttf','SoleHeadlineBlackIt.ttf','SoleHeadlineBold.ttf','SoleHeadlineBoldIt.ttf','SoleHeadlineExtraBold.ttf','SoleHeadlineExtraBoldIt.ttf','SoleHeadlineLight.ttf','SoleHeadlineLightIt.ttf','SoleHeadlineMedium.ttf','SoleHeadlineMediumIt.ttf','SoleHeadlineRegular.ttf','SoleHeadlineRegularIt.ttf','SoleSubheadBlack.ttf','SoleSubheadBlackIt.ttf','SoleSubheadBold.ttf','SoleSubheadBoldIt.ttf','SoleSubheadExtraBold.ttf','SoleSubheadExtraBoldIt.ttf','SoleSubheadLight.ttf','SoleSubheadLightIt.ttf','SoleSubheadMedium.ttf','SoleSubheadMediumIt.ttf','SoleSubheadRegular.ttf','SoleSubheadRegularIt.ttf','SoleTextBlack.ttf','SoleTextBlackIt.ttf','SoleTextBold.ttf','SoleTextBoldIt.ttf','SoleTextLight.ttf','SoleTextLightIt.ttf','SoleTextMedium.ttf','SoleTextMediumIt.ttf','SoleTextRegular.ttf','SoleTextRegularIt.ttf'

        ]
      }
    }
  },
  watch: {
    'font.selected': function() {
      this.updateSelectedFont();
    },
    'move_type_down': function() {
      window.move_type_down = this.move_type_down;
    },
    'font_size': function() {
      window.font_size = this.font_size;
    }
  },
  mounted() {
    window.move_type_down = this.move_type_down;
    window.font_size = this.font_size;
    if(localStorage.getItem('selected_font')) {
      this.font.selected = localStorage.getItem('selected_font');
    }
    this.updateSelectedFont();
  },
  methods: {
    updateSelectedFont() {
      window.font_filename = this.font.selected;
      // eslint-disable-next-line
      if(loadFont !== undefined) {
        // eslint-disable-next-line
        window.font = loadFont(window.public_url + 'fonts/' + window.font_filename);
        localStorage.setItem('selected_font', window.font_filename);
      }
    }
  }
};
</script>

<style lang="scss">
body {
  font-family:'IBM Plex Mono', monospace;
  position: relative;
  padding: 0; margin: 0;
  background-color: #f9f9f9;
  max-width: 1024px;
  margin: 0 auto;
  // margin-top: 10vh;
} 
canvas {
  vertical-align: top;
} 
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
  width: 320px;

  h3 {
    background-color: transparent;
  }
}

h1 {
  font-size: 18px;
  font-weight: 100;
  text-align:center;
  color: #fff;
  background-color:#000;
  text-decoration: underline;
}

h2 {
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

.m_selectType {
  position: fixed;
  right: 0;
  top: 40%;
  left: auto;
  // width: 100%;
  pointer-events: none;
  font-size:80%;

  > * {
    display: block;
    margin: 0 auto;
    width: 250px;
    background-color: white;
    border-radius: 4px;
    padding: .5em;
    border: 2px solid #000;
    text-align: center;
    pointer-events: auto;

    select {
      width: 100%;
    }
    input {
      width: 100%;
    }
    small {
      font-size: 60%;
    }
  }
}
</style>
