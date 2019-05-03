import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// eslint-disable-next-line
new p5();

window.windowWidth = 800;
window.windowHeight = 800;

// eslint-disable-next-line
window.public_url = process.env.BASE_URL;
window.font_filename = 'MachoMoustache-Bold.ttf';

new Vue({
  render: h => h(App),
  computed: {
    sketch_to_load() {
      var query = new URLSearchParams(window.location.search);
      if (query.get('sketch') !== null) {
        return query.get('sketch') + '.js';
      }
      return 'sketch' + '.js';
    }
  }
}).$mount('#app');
