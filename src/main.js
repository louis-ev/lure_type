import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// eslint-disable-next-line
window.base_font_url = process.env.BASE_URL + `fonts/`;
window.font_filename = 'MachoMoustache-Bold.ttf';

new Vue({
  render: h => h(App)
}).$mount('#app');
