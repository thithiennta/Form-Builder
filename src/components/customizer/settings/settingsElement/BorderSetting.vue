<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Border</div>
    <div class="setting-element-body">
      <div class="border-color">
        <div
          class="border-color-picker"
          @click="handleClickPicker"
          ref="colorPicker"
        >
          <div
            class="color-picker-show-color"
            :style="{ 'background-color': color.hex ? color.hex : color }"
          ></div>
          <label>Select Color</label>
          <Sketch v-model="color" v-if="showSketch" id="colorSketch" />
        </div>
      </div>
      <div class="border-style">
        <label class="property-label">Style</label>
        <a-select
          label-in-value
          :default-value="{ key: style }"
          class="border-style-select"
          @change="handleStyleChange"
        >
          <a-select-option
            v-for="(styleItem, index) in listBorderStyle"
            :key="index"
            :value="styleItem"
          >
            {{ styleItem.charAt(0).toUpperCase() + styleItem.slice(1) }}
          </a-select-option>
        </a-select>
      </div>
      <div class="border-radius-header">
        <label class="property-label">Border Width</label>
        <div class="setting-element-switch">
          <a-switch :checked="showFullWidth" @change="onSwitchChange" />
        </div>
      </div>

      <div class="border-row border-radius" v-if="showFullWidth">
        <div class="border-col">
          <label class="property-label">Top</label>
          <a-input-number :min="1" :max="100" v-model="borderTopWidth" />
        </div>
        <div class="border-col">
          <label class="property-label">Right</label>
          <a-input-number :min="1" :max="100" v-model="borderRightWidth" />
        </div>
        <div class="border-col">
          <label class="property-label">Bottom</label>
          <a-input-number :min="1" :max="100" v-model="borderBottomWidth" />
        </div>
        <div class="border-col">
          <label class="property-label">Left</label>
          <a-input-number :min="1" :max="100" v-model="borderLeftWidth" />
        </div>
      </div>
      <div class="border-row border-radius" v-if="!showFullWidth">
        <div class="border-col">
          <a-input-number :min="1" :max="100" v-model="borderWidth" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Sketch } from "vue-color";

export default {
  components: {
    Sketch,
  },
  props: ["rowId"],
  created() {
    this.setDefault();
  },
  data: function() {
    return {
      color: "",
      style: "solid",
      showSketch: false,
      listBorderStyle: ["solid", "dotted", "dashed", "double"],
      showFullWidth: false,
      borderWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
    };
  },
  watch: {
    rowId() {
      this.setDefault();
    },
    showSketch: function(showSketch) {
      if (showSketch === true) {
        this.addEventClickOutSide();
      } else {
        this.removeEventClickOutSide();
      }
    },
    color(color) {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "border",
        subSetting: "borderColor",
        value: color.hex ? color.hex : color,
      });
    },
    borderWidth(value) {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "border",
        subSetting: "borderWidth",
        value: value,
      });
    },
    borderTopWidth(value) {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "border",
        subSetting: "borderTopWidth",
        value: value,
      });
    },
    borderBottomWidth(value) {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        parent: this.$store.state.customizerModule.currentRow.parent,
        setting: "border",
        subSetting: "borderBottomWidth",
        value: value,
      });
    },
    borderLeftWidth(value) {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "border",
        subSetting: "borderLeftWidth",
        value: value,
      });
    },
    borderRightWidth(value) {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "border",
        subSetting: "borderRightWidth",
        value: value,
      });
    },
  },
  methods: {
    addEventClickOutSide() {
      document.addEventListener("click", this.clickOutSide);
    },
    removeEventClickOutSide() {
      document.removeEventListener("click", this.clickOutSide);
    },
    clickOutSide(e) {
      const colorPicker = this.$refs.colorPicker;
      if (
        colorPicker === undefined ||
        (e.target !== colorPicker && !colorPicker.contains(e.target))
      ) {
        this.showSketch = false;
      }
    },
    handleClickPicker(e) {
      const colorSketch = document.getElementById("colorSketch");
      if (
        colorSketch === null ||
        (e.target !== colorSketch && !colorSketch.contains(e.target))
      )
        this.showSketch = !this.showSketch;
    },
    onSwitchChange() {
      this.showFullWidth = !this.showFullWidth;
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "border",
        subSetting: "fullBorderWidth",
        value: this.showFullWidth,
      });
      if (this.showFullWidth) {
        this.borderTopWidth = this.borderLeftWidth = this.borderRightWidth = this.borderBottomWidth = this.borderWidth;
        this.$store.dispatch("formViewModule/adjustSetting", {
          element: this.$store.state.customizerModule.currentRow,
          setting: "border",
          subSetting: "borderTopWidth",
          value: this.borderTopWidth,
        });
        this.$store.dispatch("formViewModule/adjustSetting", {
          element: this.$store.state.customizerModule.currentRow,
          setting: "border",
          subSetting: "borderLeftWidth",
          value: this.borderLeftWidth,
        });
        this.$store.dispatch("formViewModule/adjustSetting", {
          element: this.$store.state.customizerModule.currentRow,
          setting: "border",
          subSetting: "borderRightWidth",
          value: this.borderRightWidth,
        });
        this.$store.dispatch("formViewModule/adjustSetting", {
          element: this.$store.state.customizerModule.currentRow,
          setting: "border",
          subSetting: "borderBottomWidth",
          value: this.borderBottomWidth,
        });
      } else {
        // this.borderWidth = 1;
        // this.$store.dispatch("formViewModule/adjustSetting", {
        //   rowId: this.$store.state.customizerModule.currentRow.rowId,
        //   setting: "borderWidth",
        //   value: this.borderWidth,
        // });
      }
    },
    handleStyleChange({ key }) {
      this.style = key;
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "border",
        subSetting: "borderStyle",
        value: this.style,
      });
    },
    setDefault() {
      const element = this.$store.state.customizerModule.currentRow;
      this.color = element.properties.border.borderColor;
      this.style = element.properties.border.borderStyle;
      this.showFullWidth = element.properties.border.fullBorderWidth;
      this.borderWidth = element.properties.border.borderWidth;
      this.borderTopWidth = element.properties.border.borderTopWidth;
      this.borderBottomWidth = element.properties.border.borderBottomWidth;
      this.borderLeftWidth = element.properties.border.borderLeftWidth;
      this.borderRightWidth = element.properties.border.borderRightWidth;
    },
  },
};
</script>

<style scoped>
.border-row {
  display: flex;
  justify-content: space-between;
}
.border-col {
  width: 20%;
}

.ant-input-number {
  width: 100%;
}
.border-style-select {
  width: 100px;
}
.border-style {
  margin-bottom: 10px;
}
.border-radius-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
