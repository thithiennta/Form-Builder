export default {
  UPDATE_ELEMENTS(state, payload) {
    state.formViewElements = payload;
  },
  UPDATE_ELEMENT_PROPERTY(state, payload) {
    var element = state.formViewElements.find(
      (element) => element.rowId === payload.rowId
    );
    if (payload.subSetting) {
      element.properties[payload.setting][payload.subSetting] = payload.value;
    } else {
      element.properties[payload.setting] = payload.value;
    }
  },
};
