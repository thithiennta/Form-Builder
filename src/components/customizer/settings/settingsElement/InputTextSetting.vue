<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Text Color</div>
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
    <div class="form-customizer-title">Placeholder</div>
    <div class="setting-element-body">
      <a-input v-model="placeholder" @change="handleChangePlaceholder" />
    </div>
    <div class="form-customizer-title">Input Name</div>
    <div class="setting-element-body">
      <a-input v-model="name" @change="handleChangeName" />
    </div>
  </div>
</template>

<script>
import { Sketch } from "vue-color";

export default {
  components: {
    Sketch,
  },
  data: function() {
    return {
      placeholder: "Enter input",
      name: "input_name",
      color: "",
      showSketch: false,
    };
  },
  props: ["rowId"],
  created() {
    this.setDefault();
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
        setting: "text",
        subSetting: "color",
        value: color.hex ? color.hex : color,
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
    handleChangePlaceholder() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "text",
        subSetting: "placeholder",
        value: this.placeholder,
      });
    },
    handleChangeName() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "text",
        subSetting: "inputName",
        value: this.name,
      });
    },
    setDefault() {
      const element = this.$store.state.customizerModule.currentRow;
      this.placeholder = element.properties.text.placeholder;
      this.name = element.properties.text.inputName;
      this.color = element.properties.text.color;
    },
  },
};
</script>

<style scoped>
.padding-row {
  display: flex;
  justify-content: space-between;
}
.padding-col {
  width: 20%;
}
.padding-col label {
  margin-bottom: 5px;
  color: rgb(157, 156, 156);
  display: inline-block;
}
.ant-input-number {
  width: 100%;
}
</style>
