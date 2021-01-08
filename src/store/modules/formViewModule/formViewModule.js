import formViewActions from "./formViewActions";
import formViewMutations from "./formViewMutations";
import { v4 as uuid } from "uuid";
export default {
  namespaced: true,
  state: {
    formViewElements: [
      {
        rowId: uuid(),
        name: "Button",
        type: "button",
        icon: "plus-square",
        defaultProperties: {
          paddingLeft: "5",
          paddingRight: "5",
          paddingTop: "5",
          paddingBottom: "5",
          borderWidth: "1",
          borderType: "solid",
          borderColor: "#40e0d0",
          textValue: "Button",
          borderRadius: "5",
          width: "30",
          color: "#ffffff",
          backgroundColor: "#40e0d0",
          rowBackgroundColor: "#ffffff",
        },
      },
    ],
  },
  actions: formViewActions,
  mutations: formViewMutations,
};
