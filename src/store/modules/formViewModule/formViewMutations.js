export default {
  UPDATE_ELEMENTS(state, payload) {
    state.formViewElements = payload;
  },
  UPDATE_ELEMENT_PROPERTY(state, payload) {
    var element = state.formViewElements.find(
      (element) => element.rowId === payload.rowId
    );
    element.defaultProperties[payload.setting] = payload.value;
  },
};
