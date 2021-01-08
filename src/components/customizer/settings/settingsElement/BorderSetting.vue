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
          <div class="color-picker-show-color"></div>
          <label>Select Color</label>
          <Sketch v-model="color" v-if="showSketch" id="colorSketch" />
        </div>
      </div>
      <div class="border-style">
        <label class="property-label">Style</label>
        <a-select
          label-in-value
          :default-value="{ key: 'dotted' }"
          class="border-style-select"
        >
          <a-select-option
            v-for="(style, index) in listBorderStyle"
            :key="index"
            :value="style"
          >
            {{ style.charAt(0).toUpperCase() + style.slice(1) }}
          </a-select-option>
        </a-select>
      </div>
      <div class="border-radius-header">
        <label class="property-label">Border Width</label>
        <div class="setting-element-switch">
          <a-switch default-checked @change="onSwitchChange" />
        </div>
      </div>

      <div class="border-row border-radius" v-if="showFullWidth">
        <div class="border-col">
          <label class="property-label">Top</label>
          <a-input-number :min="1" :max="100" :default-value="10" />
        </div>
        <div class="border-col">
          <label class="property-label">Right</label>
          <a-input-number :min="1" :max="100" :default-value="10" />
        </div>
        <div class="border-col">
          <label class="property-label">Bottom</label>
          <a-input-number :min="1" :max="100" :default-value="10" />
        </div>
        <div class="border-col">
          <label class="property-label">Left</label>
          <a-input-number :min="1" :max="100" :default-value="10" />
        </div>
      </div>
      <div class="border-row border-radius" v-if="!showFullWidth">
        <div class="border-col">
          <a-input-number :min="1" :max="100" :default-value="10" />
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
  data: function() {
    return {
      value: "center",
      color: "",
      showSketch: false,
      listBorderStyle: ["solid", "dotted", "dashed", "double"],
      showFullWidth: true,
    };
  },
  watch: {
    showSketch: function(showSketch) {
      if (showSketch === true) {
        this.addEventClickOutSide();
      } else {
        this.removeEventClickOutSide();
      }
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
.border-color-picker {
  display: flex;
  align-items: center;
  background-color: gray;
  width: fit-content;
  padding-right: 20px;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  margin-bottom: 10px;
}
.border-color-picker label {
  color: white;
  font-size: 12px;
  cursor: pointer;
}
.color-picker-show-color {
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: white;
  margin-right: 10px;
}
.vc-sketch {
  position: absolute;
  top: calc(100% + 5px);
  z-index: 999;
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
