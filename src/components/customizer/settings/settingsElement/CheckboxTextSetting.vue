<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Checkbox Name</div>
    <div class="setting-element-body">
      <a-input v-model="name" @change="handleChangeName" />
    </div>
    <div class="form-customizer-title">Checkbox Value</div>
    <div class="setting-element-body">
      <a-input v-model="value" @change="handleChangeValue" />
    </div>
    <div class="form-customizer-title">Checkbox Text</div>
    <div class="setting-element-body">
      <a-input v-model="text" @change="handleChangeText" />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      text: "Checkbox Value",
      name: "checkbox_name",
      value: "checkbox_value",
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
    handleChangeName() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "text",
        subSetting: "checkboxName",
        value: this.name,
      });
    },
    handleChangeValue() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "text",
        subSetting: "checkboxValue",
        value: this.value,
      });
    },
    handleChangeText() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "text",
        subSetting: "checkboxText",
        value: this.text,
      });
    },

    setDefault() {
      const element = this.$store.state.customizerModule.currentRow;

      this.text = element.properties.text.checkboxText;
      this.name = element.properties.text.checkboxName;
      this.value = element.properties.text.checkboxValue;
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
