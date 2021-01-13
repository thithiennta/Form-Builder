<template>
  <div
    class="clone-tool-row"
    :style="{
      'background-color': properties.rowBackgroundColor,
    }"
  >
    <div class="two-column-wrapper">
      <Draggable
        class="one-column-wrapper"
        ghost-class="customizer-tool-ghost"
        :list="elementList1"
        group="group1"
        @change="handleChange"
        :style="{ width: properties.columnsWidth[0] + '%' }"
      >
        <div
          class="clone-tool-element"
          v-for="element in elementList1"
          :key="element.rowId"
          @click="handleElementClick($event, element)"
          :class="{ activeRow: isActiveRow(element.rowId) }"
        >
          <component
            :is="element.type"
            :properties="element.properties"
            :rId="element.rowId"
          />
        </div>
      </Draggable>
      <Draggable
        class="one-column-wrapper"
        ghost-class="customizer-tool-ghost"
        :list="elementList2"
        group="group1"
        @change="handleChange"
        :style="{ width: properties.columnsWidth[1] + '%' }"
      >
        <div
          class="clone-tool-element"
          v-for="element in elementList2"
          :key="element.rowId"
          @click="handleElementClick($event, element)"
          :class="{ activeRow: isActiveRow(element.rowId) }"
        >
          <component :is="element.type" :properties="element.properties" />
        </div>
      </Draggable>
      <Draggable
        class="one-column-wrapper"
        ghost-class="customizer-tool-ghost"
        :list="elementList3"
        group="group1"
        @change="handleChange"
        :style="{ width: properties.columnsWidth[2] + '%' }"
      >
        <div
          class="clone-tool-element"
          v-for="element in elementList3"
          :key="element.rowId"
          @click="handleElementClick($event, element)"
          :class="{ activeRow: isActiveRow(element.rowId) }"
        >
          <component :is="element.type" :properties="element.properties" />
        </div>
      </Draggable>
    </div>
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
    elementList1() {
      const element = this.formViewElements.find((e) => e.rowId === this.rId);
      return element.elements[0].elements;
    },
    elementList2() {
      const element = this.formViewElements.find((e) => e.rowId === this.rId);
      return element.elements[1].elements;
    },
    elementList3() {
      const element = this.formViewElements.find((e) => e.rowId === this.rId);
      return element.elements[2].elements;
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
      this.activeRow = element.rowId;
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
.two-column-wrapper {
  padding: 5px 0;
}
.clone-tool-container {
  padding: 5px;
}
.two-column-wrapper {
  display: flex;
}
.one-column-wrapper {
  min-height: 50px;
  position: relative;
}
.clone-tool-element:hover {
  border: 1px solid rgb(231, 230, 230);
}
</style>
<style></style>
