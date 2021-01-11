export default {
  addNewElement({ commit }, payload) {
    commit("UPDATE_ELEMENTS", payload);
  },
  moveElement({ commit }, payload) {
    commit("UPDATE_ELEMENTS", payload);
  },
  adjustSetting({ commit }, payload) {
    commit("UPDATE_ELEMENT_PROPERTY", payload);
  },
};
