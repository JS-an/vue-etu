import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import etuTable from "../package/table/index"
import etuPopup from "../package/popup/index"

Vue.config.productionTip = false;

const components = [
  etuTable,
  etuPopup,
]

components.map((el) => {
  Vue.use(el)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
