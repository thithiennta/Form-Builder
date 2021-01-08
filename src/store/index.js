import Vue from "vue";
import Vuex from "vuex";
import customizerModule from "./modules/customizerModule/customizerModule";
import formViewModule from "./modules/formViewModule/formViewModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    customizerModule,
    formViewModule,
  },
});
