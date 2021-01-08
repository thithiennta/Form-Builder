export default {
  UPDATE_ELEMENTS(state, payload) {
    state.formViewElements = payload;
  },
  UPDATE_ELEMENT_PROPERTY(state, payload) {
    state = payload;
  },
};
