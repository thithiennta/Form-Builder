<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">FontSize</div>
    <div class="setting-element-body">
      <a-slider
        v-model="inputValue"
        :min="1"
        :max="100"
        :tip-formatter="tipFormat"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["rowId"],

  data: function() {
    return {
      inputValue: 14,
    };
  },
  created() {
    this.setDefault();
  },
  watch: {
    rowId() {
      this.setDefault();
    },
  },
  methods: {
    tipFormat(value) {
      return value + "px";
    },
    handleChange() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "text",
        subSetting: "fontSize",
        value: this.inputValue,
      });
    },
    setDefault() {
      const element = this.$store.state.customizerModule.currentRow;

      this.inputValue = element.properties.text.fontSize;
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
