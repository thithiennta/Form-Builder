import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import vuescroll from "vuescroll";
import {
  Row,
  Col,
  Icon,
  Dropdown,
  Menu,
  Slider,
  Input,
  InputNumber,
  Radio,
  Switch,
  Select,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(vuescroll, {
  ops: {
    bar: {
      background: "rgb(94, 93, 93)",
      size: "3px",
    },
  },
});
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Slider);
Vue.use(Input);
Vue.use(Radio);
Vue.use(InputNumber);
Vue.use(Switch);
Vue.use(Select);
Vue.component("vuescroll", vuescroll);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
