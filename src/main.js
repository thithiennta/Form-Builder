import Vue from "vue";
import App from "./App.vue";
import { Row, Col, Icon, Dropdown, Menu } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
