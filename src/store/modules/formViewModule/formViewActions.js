export default {
  addNewElement({ commit }, payload) {
    commit("UPDATE_ELEMENTS", payload);
  },
  moveElement({ commit }, payload) {
    commit("UPDATE_ELEMENTS", payload);
  },
};
