<template>
  <div class="form-view-container">
    <div class="form-view-content">
      <Draggable
        class="form-view-list-element"
        ghost-class="customizer-tool-ghost"
        :list="list"
        group="group1"
        @change="handleChange"
        handle=".drag-button"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <div
            class="clone-tool-element"
            v-for="item in list"
            :key="item.rowId"
            @click="handleElementClick(item.rowId)"
            :class="{ activeRow: isActiveRow(item.rowId) }"
          >
            <div
              class="clone-tool-handle-moving"
              :class="{ activeRow: isActiveRow(item.rowId) }"
            >
              <a-icon type="caret-up" />
              <a-icon type="drag" class="drag-button" />
              <a-icon type="caret-down" />
            </div>
            <component
              :is="returnedComponent(item.type)"
              :properties="item.defaultProperties"
            />
            <div
              class="clone-tool-more-options"
              :class="{ activeRow: isActiveRow(item.rowId) }"
            >
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                  <a-icon type="more" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item key="duplicate">
                    <a-icon type="copy" />Duplicate
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a-icon type="snippets" />Copy this element to
                  </a-menu-item>
                  <a-menu-item key="3">
                    <a-icon type="delete" />Remove this element
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </div>
        </transition-group>
      </Draggable>
    </div>
  </div>
</template>

<script>
// import {v4 as uuid} from 'uuid'
import Draggable from "vuedraggable";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";

export default {
  data: function() {
    return {
      list: [],
      activeRow: "",
      drag: false,
    };
  },
  components: {
    Draggable,
    Button,
    Input,
    TextArea,
    CheckBox,
    RadioButton,
  },
  mounted() {},
  methods: {
    handleChange() {},
    returnedComponent(type) {
      switch (type) {
        case "button":
          return "Button";
        case "input":
          return "Input";
        case "textarea":
          return "TextArea";
        case "checkbox":
          return "CheckBox";
        case "radio":
          return "RadioButton";
        default:
          return "Div";
      }
    },
    handleElementClick(rowId) {
      this.activeRow = rowId;
    },
    isActiveRow(rowId) {
      return this.activeRow === rowId;
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "group1",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
};
</script>

<style scoped>
.form-view-container {
  background-color: rgb(207, 205, 205);
  width: 100%;
  padding: 40px 0;
}
.form-view-content {
  width: 70%;
  margin: auto;
  min-height: 800px;
  background-color: rgb(234, 230, 230);
  text-align: center;
}
</style>
<style>
.clone-tool-row {
  padding: 10px 0;
  text-align: center;
}
.clone-tool-container {
  width: 90%;
  margin: auto;
}
.clone-tool-element {
  position: relative;
  z-index: 1;
}
.clone-tool-element:hover {
  box-shadow: 0px 0px 13px -4px grey;
  z-index: 2;
}
.clone-tool-element.activeRow {
  margin: 10px 0;
  box-shadow: 0px 4px 22px -10px grey;
}
.clone-tool-handle-moving {
  display: none;
  position: absolute;
  top: 0;
  left: -15px;
  background-color: white;
  padding: 10px 5px;
  flex-direction: column;
  transform: translateX(-20px);
  border-radius: 5px;
}
.clone-tool-handle-moving.activeRow {
  display: flex;
}
.clone-tool-handle-moving i {
  font-size: 15px;
  cursor: pointer;
  color: rgb(181, 178, 178);
  transition: all 0.2s ease-in-out;
  padding: 3px;
  border-radius: 5px;
}
.clone-tool-handle-moving i:hover {
  background-color: rgb(224, 220, 220);
  color: black;
}
.clone-tool-more-options {
  display: none;
  position: absolute;
  right: 10px;
  top: 10%;
}
.clone-tool-more-options.activeRow {
  display: block;
}
.clone-tool-more-options .ant-dropdown-link i {
  padding: 3px;
  font-size: 18px;
  background-color: rgb(232, 231, 231);
  border-radius: 5px;
  color: grey;
}
.clone-tool-more-options i:hover {
  cursor: pointer;
}
.ant-dropdown-menu-item:hover {
  background-color: rgb(243, 243, 243) !important;
}
.form-view-list-element .customizer-tool-ghost {
  width: 100% !important;
}
.form-view-list-element .customizer-tool-ghost .customizer-tool-wrap {
  margin: 0;
  background-color: transparent;
  padding: 10px 0;
  border-radius: unset;
  border-top: 5px solid rgb(217, 214, 214);
}
.form-view-list-element .customizer-tool-ghost p {
  display: none;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
}
</style>
