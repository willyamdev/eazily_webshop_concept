import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faSearch, faAngleLeft, faAngleRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import VueRouter from 'vue-router';

import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

Vue.use(VueRouter);

library.add(faAngleDown);
library.add(faSearch);
library.add(faAngleLeft);
library.add(faAngleRight);
library.add(faMinus);
library.add(faPlus);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [{
    path: "/",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  }
]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
