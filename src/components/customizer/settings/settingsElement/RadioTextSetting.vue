<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Radio Name</div>
    <div class="setting-element-body">
      <a-input v-model="name" @change="handleChangeName" />
    </div>
    <div class="form-customizer-title">Radio Value</div>
    <div class="setting-element-body">
      <a-input v-model="value" @change="handleChangeValue" />
    </div>
    <div class="form-customizer-title">Radio Text</div>
    <div class="setting-element-body">
      <a-input v-model="text" @change="handleChangeText" />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      text: "Radio Value",
      name: "radio_name",
      value: "radio_value",
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
        subSetting: "radioName",
        value: this.name,
      });
    },
    handleChangeValue() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "text",
        subSetting: "radioValue",
        value: this.value,
      });
    },
    handleChangeText() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "text",
        subSetting: "radioText",
        value: this.text,
      });
    },

    setDefault() {
      const element = this.$store.state.customizerModule.currentRow;

      this.text = element.properties.text.radioText;
      this.name = element.properties.text.radioName;
      this.value = element.properties.text.radioValue;
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
