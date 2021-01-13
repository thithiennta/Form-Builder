export default {
  UPDATE_ELEMENTS(state, payload) {
    state.formViewElements = payload;
  },
  UPDATE_ELEMENT_PROPERTY(state, payload) {
    const element = payload.element;
    if (payload.subSetting) {
      element.properties[payload.setting][payload.subSetting] = payload.value;
    } else {
      element.properties[payload.setting] = payload.value;
    }
  },
};
