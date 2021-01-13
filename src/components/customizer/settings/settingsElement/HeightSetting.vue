<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Height</div>
    <div class="setting-element-body">
      <a-slider
        v-model="inputValue"
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
      return value + "px";
    },
    handleChange() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "height",
        value: this.inputValue,
      });
    },
    setDefault() {
      const element = this.$store.state.customizerModule.currentRow;

      this.inputValue = element.properties.height;
    },
  },
};
</script>

<style scoped></style>
