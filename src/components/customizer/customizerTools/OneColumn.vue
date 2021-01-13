<template>
  <div
    class="clone-tool-row"
    :style="{
      'background-color': properties.rowBackgroundColor,
    }"
  >
    <Draggable
      class="one-column-wrapper"
      ghost-class="customizer-tool-ghost"
      :list="elementList"
      group="group1"
      @change="handleChange"
    >
      <div
        class="clone-tool-element"
        v-for="element in elementList"
        :key="element.rowId"
        @click="handleElementClick($event, element)"
        :class="{ activeRow: isActiveRow(element.rowId) }"
      >
        <component :is="element.type" :properties="element.properties" />
      </div>
    </Draggable>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Draggable from "vuedraggable";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";
export default {
  components: {
    Draggable,
    Button,
    Input,
    TextArea,
    CheckBox,
    RadioButton,
  },
  props: {
    properties: {
      type: Object,
      required: true,
    },
    rId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("formViewModule", ["formViewElements"]),
    elementList() {
      return this.formViewElements.find((e) => e.rowId === this.rId).elements;
    },
  },
  methods: {
    handleChange() {
      this.$store.commit(
        "formViewModule/UPDATE_ELEMENTS",
        this.formViewElements
      );
    },
    handleElementClick(event, element) {
      event.stopPropagation();
      const currentRow = element;
      this.$store.dispatch("customizerModule/changeActiveTab", "setting");
      this.$store.dispatch("customizerModule/changeCurrentRow", currentRow);
    },
    isActiveRow(rowId) {
      return rowId === this.$store.state.customizerModule.currentRow.rowId;
    },
  },
};
</script>

<style scoped>
.one-column-wrapper {
  min-height: 50px;
  position: relative;
}
.clone-tool-element:hover {
  border: 1px solid rgb(231, 230, 230);
}
</style>
<style></style>
