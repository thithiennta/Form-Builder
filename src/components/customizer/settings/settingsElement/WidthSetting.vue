<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Width</div>
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
  data: function() {
    return {
      inputValue: 30,
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
  },
  methods: {
    tipFormat(value) {
      return value + "%";
    },
    handleChange() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "width",
        value: this.inputValue,
      });
    },
    setDefault() {
      const element = this.$store.state.customizerModule.currentRow;

      this.inputValue = element.properties.width;
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
