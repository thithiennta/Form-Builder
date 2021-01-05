<template>
  <div class="form-customizer">
    <div class="form-customizer-select-options-wrapper">
      <div class="form-customizer-container">
        <div class="form-customizer-select-options">
          <div class="form-customizer-select-item">ELEMENTS</div>
          <div class="form-customizer-select-item">SETTINGS</div>
        </div>
      </div>
    </div>
    <div class="form-customizer-container form-customizer-tools-wrapper">
      <div class="form-customizer-container">
        <div class="form-customizer-header">
          <p class="form-customizer-title">Tools</p>
          <a-icon type="up" />
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
            <CustomizerTool :item="item" />
          </div>
        </Draggable>
      </div>
    </div>
    <div class="form-customizer-container form-customizer-tools-wrapper">
      <div class="form-customizer-container">
        <div class="form-customizer-header">
          <p class="form-customizer-title">Spacing</p>
          <a-icon type="down" />
        </div>
        <!-- <Draggable
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
            <CustomizerTool :item="item" />
          </div>
        </Draggable> -->
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import Draggable from "vuedraggable";
import CustomizerTool from "./CustomizerTool";

export default {
  components: {
    Draggable,
    CustomizerTool,
  },
  data: function() {
    return {
      list: [
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
    };
  },

  methods: {
    handleChange() {},
    handleCloneTool(item) {
      return {
        ...item,
        rowId: uuid(),
      };
    },
  },
};
</script>

<style scoped>
.form-customizer {
  background-color: #222527;
  height: 100vh;
  width: 25%;
  position: fixed;
  top: 0;
  left: 0;
}
.form-customizer-container {
  width: 90%;
  margin: auto;
}
.customizer-tools-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  border-top: 1px solid #343638;
}
.customizer-tool-wrapper {
  width: 50%;
  display: inline-block;
}
.form-customizer-select-options-wrapper {
  padding: 10px 0;
  border-bottom: 1px solid #292c2e;
}

.form-customizer-select-options {
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: #292c2e;
  padding: 5px;
  border-radius: 7px;
}
.form-customizer-select-item {
  width: calc(50% - 5px);
  padding: 10px 0;
  text-align: center;
  color: white;
  cursor: pointer;
  border-radius: 7px;
}
.form-customizer-select-item:hover {
  background: rgb(237, 237, 237);
  color: rgb(151, 151, 255);
}
.form-customizer-tools-wrapper {
  background-color: #2d3032;
  margin-top: 10px;
  border-radius: 7px;
  padding: 10px 0;
}
.form-customizer-header {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.form-customizer-title {
  color: white;
  font-weight: 600;
}
.form-customizer-header > i {
  color: rgb(188, 187, 187);
  font-size: 11px;
}
</style>
