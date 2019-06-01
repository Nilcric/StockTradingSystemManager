import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

import router from './router';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
