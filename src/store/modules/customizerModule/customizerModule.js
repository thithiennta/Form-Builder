import customizerActions from "./customizerActions";
import customizerMutations from "./customizerMutations";

export default {
  namespaced: true,
  state: {
    activeTab: "customizer",
    customizerTools: [
      {
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
      {
        name: "Input",
        type: "input",
        icon: "font-colors",
        defaultProperties: {
          paddingLeft: "5",
          paddingRight: "5",
          paddingTop: "5",
          paddingBottom: "5",
          borderWidth: "1",
          borderType: "solid",
          borderColor: "#40e0d0",
          placeholder: "Enter input",
          borderRadius: "5",
          width: "30",
          rowBackgroundColor: "#ffffff",
        },
      },
      {
        name: "Text Area",
        type: "textarea",
        icon: "bold",
        defaultProperties: {
          paddingLeft: "5",
          paddingRight: "5",
          paddingTop: "5",
          paddingBottom: "5",
          borderWidth: "1",
          borderType: "solid",
          borderColor: "#40e0d0",
          placeholder: "Enter input",
          borderRadius: "5",
          width: "30",
          rowBackgroundColor: "#ffffff",
        },
      },
      {
        name: "Check Box",
        type: "checkbox",
        icon: "check",
        defaultProperties: {
          rowBackgroundColor: "#ffffff",
          checkboxName: "",
          checkboxValue: "",
          checkboxText: "Check box",
        },
      },
      {
        name: "Radio Button",
        type: "radio",
        icon: "plus-circle",
        defaultProperties: {
          rowBackgroundColor: "#ffffff",
          radioName: "",
          radioValue: "",
          radioText: "Radio button",
        },
      },
    ],
    currentRow: {
      type: "button",
      rowId: "xy12345678",
      validSettings: ["BorderSetting", "ButtonTextSetting", "FontSizeSetting"],
      settingsValue: {
        BorderSetting: {},
      },
    },
  },
  actions: customizerActions,
  mutations: customizerMutations,
};
