import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import store from "./store";
import echarts from "echarts";
import "echarts/map/js/china.js";

require('./mock')

Vue.use(ElementUI, { size: "small", zIndex: 3000 });
Vue.prototype.$echarts = echarts;
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
