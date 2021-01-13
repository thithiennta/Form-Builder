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
        type: "Button",
        icon: "plus-square",
        properties: {
          align: "center",
          width: 30,
          height: 30,
          rowBackgroundColor: "#ffffff",
          backgroundColor: "#40e0d0",
          padding: {
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            paddingBottom: 5,
          },
          border: {
            fullBorderWidth: false,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#40e0d0",
            borderRadius: 5,
          },
          text: {
            textValue: "Button",
            color: "#ffffff",
            fontSize: 14,
          },
        },
        validSettings: [
          "AlignSetting",
          "BorderSetting",
          "ButtonTextSetting",
          "FontSizeSetting",
          "WidthSetting",
          "HeightSetting",
        ],
      },
    ],
  },
  actions: formViewActions,
  mutations: formViewMutations,
};
