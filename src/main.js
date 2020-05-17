import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faSearch, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);
library.add(faSearch);
library.add(faAngleLeft);
library.add(faAngleRight);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
