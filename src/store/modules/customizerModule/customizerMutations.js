export default {
  CHANGE_ACTIVE_TAB(state, payload) {
    state.activeTab = payload;
  },
  CHANGE_CURRENT_ROW(state, payload) {
    state.currentRow = payload;
  },
};
