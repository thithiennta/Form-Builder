<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Width</div>
    <div class="setting-element-body">
      <label class="property-label">First column</label>
      <a-slider
        v-model="inputValue1"
        :min="0"
        :max="100"
        :tip-formatter="tipFormat"
        @change="handleChange"
      />
      <label class="property-label">Second column</label>
      <a-slider
        v-model="inputValue2"
        :min="0"
        :max="100"
        :tip-formatter="tipFormat"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      inputValue1: 0,
      inputValue2: 0,
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
    inputValue1() {
      this.inputValue2 = 100 - this.inputValue1;
    },
    inputValue2() {
      this.inputValue1 = 100 - this.inputValue2;
    },
  },
  computed: {},
  methods: {
    tipFormat(value) {
      return value + "%";
    },
    handleChange() {
      const inputValue = [this.inputValue1, this.inputValue2];
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "columnsWidth",
        value: inputValue,
      });
    },
    setDefault() {
      const element = this.$store.state.customizerModule.currentRow;
      const columnsWidth = element.properties.columnsWidth;
      this.inputValue1 = columnsWidth[0];
      this.inputValue2 = columnsWidth[1];
    },
  },
};
</script>

<style>
.ant-slider-rail {
  background-color: #393b3d;
}
.ant-slider:hover .ant-slider-rail {
  background-color: #393b3d;
}
</style>
