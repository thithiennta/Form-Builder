export default {
  changeActiveTab({ commit }, tab) {
    commit("CHANGE_ACTIVE_TAB", tab);
  },
  changeCurrentRow({ commit }, payload) {
    commit("CHANGE_CURRENT_ROW", payload);
  },
};
