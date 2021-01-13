<template>
  <div class="form-customizer-container form-customizer-tools-wrapper">
    <div class="form-customizer-container">
      <div class="form-customizer-header">
        <p class="form-customizer-title">Spacing</p>
        <a-icon type="down" />
      </div>
      <Draggable
        class="customizer-tools-wrapper"
        ghost-class="customizer-tool-ghost"
        :list="list"
        :group="{ name: 'group1', pull: 'clone', put: false }"
        @change="handleChange"
        :sort="false"
        :clone="handleCloneTool"
      >
        <div
          class="customizer-tool-wrapper"
          :span="12"
          v-for="(item, index) in list"
          :key="index"
        >
          <CustomizerTool :customizerTool="item" />
        </div>
      </Draggable>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import CustomizerTool from "./CustomizerTool";
import Draggable from "vuedraggable";
export default {
  components: {
    Draggable,
    CustomizerTool,
  },
  data() {
    return {
      list: [
        {
          name: "One Column",
          type: "OneColumn",
          icon: "minus",
          properties: {
            align: "center",
            rowBackgroundColor: "#ffffff",
            backgroundColor: "#40e0d0",
          },
          elements: [],
        },
        {
          name: "Two Column",
          type: "TwoColumn",
          icon: "pause",
          properties: {
            align: "center",
            rowBackgroundColor: "#ffffff",
            backgroundColor: "#40e0d0",
            columnsWidth: [50, 50],
          },
          elements: [],
          validSettings: ["WidthTwoColumnSetting"],
        },
        {
          name: "Three Column",
          type: "ThreeColumn",
          icon: "pause",
          properties: {
            align: "center",
            rowBackgroundColor: "#ffffff",
            backgroundColor: "#40e0d0",
            columnsWidth: [33.3, 33.3, 33.3],
          },
          elements: [],
          validSettings: ["WidthColumnSetting"],
        },
        {
          name: "Four Column",
          type: "FourColumn",
          icon: "pause",
          properties: {
            align: "center",
            rowBackgroundColor: "#ffffff",
            backgroundColor: "#40e0d0",
            columnsWidth: [25, 25, 25, 25],
          },
          elements: [],
          validSettings: ["WidthColumnSetting"],
        },
      ],
    };
  },
  methods: {
    handleChange() {},
    handleCloneTool(item) {
      var clone = require("lodash.clonedeep");
      const element = {
        ...item,
        rowId: uuid(),
      };
      if (item.type === "TwoColumn") {
        element.elements = [
          {
            ...clone(this.list[0]),
            rowId: uuid(),
          },
          {
            ...clone(this.list[0]),
            rowId: uuid(),
          },
        ];
      }
      if (item.type === "ThreeColumn") {
        element.elements = [
          {
            ...clone(this.list[0]),
            rowId: uuid(),
          },
          {
            ...clone(this.list[0]),
            rowId: uuid(),
          },
          {
            ...clone(this.list[0]),
            rowId: uuid(),
          },
        ];
      }
      if (item.type === "FourColumn") {
        element.elements = [
          {
            ...clone(this.list[0]),
            rowId: uuid(),
          },
          {
            ...clone(this.list[0]),
            rowId: uuid(),
          },
          {
            ...clone(this.list[0]),
            rowId: uuid(),
          },
          {
            ...clone(this.list[0]),
            rowId: uuid(),
          },
        ];
      }
      const cloneElement = clone(element);
      return cloneElement;
    },
  },
};
</script>

<style></style>
