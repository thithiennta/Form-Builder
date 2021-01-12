import formViewActions from "./formViewActions";
import formViewMutations from "./formViewMutations";
// import { v4 as uuid } from "uuid";
export default {
  namespaced: true,
  state: {
    formViewElements: [
      // {
      //   rowId: uuid(),
      //   name: "Button",
      //   type: "button",
      //   icon: "plus-square",
      //   defaultProperties: {
      //     fullBorderWidth: false,
      //     borderTopWidth: 1,
      //     borderBottomWidth: 1,
      //     borderLeftWidth: 1,
      //     borderRightWidth: 1,
      //     paddingLeft: 5,
      //     paddingRight: 5,
      //     paddingTop: 5,
      //     paddingBottom: 5,
      //     borderWidth: 1,
      //     borderStyle: "solid",
      //     borderColor: "#40e0d0",
      //     textValue: "Button",
      //     borderRadius: 5,
      //     width: 30,
      //     height: 50,
      //     color: "#ffffff",
      //     backgroundColor: "#40e0d0",
      //     rowBackgroundColor: "#ffffff",
      //     align: "center",
      //     fontSize: 14,
      //   },
      //   validSettings: [
      //     "AlignSetting",
      //     "BorderSetting",
      //     "ButtonTextSetting",
      //     "FontSizeSetting",
      //     "WidthSetting",
      //     "HeightSetting",
      //   ],
      // },
    ],
  },
  actions: formViewActions,
  mutations: formViewMutations,
};
