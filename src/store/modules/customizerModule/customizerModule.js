import customizerActions from "./customizerActions";
import customizerMutations from "./customizerMutations";
import CustomizerTools from "../../../assets/json/CustomizerTools.json";

export default {
  namespaced: true,
  state: {
    activeTab: "customizer",
    customizerTools: CustomizerTools,
    currentRow: {
      rowId: "",
      validSettings: [
      ],
    },
  },
  actions: customizerActions,
  mutations: customizerMutations,
};
