<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Button Text</div>
    <div class="setting-element-body">
      <a-input v-model="text" @change="handleChange" />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      text: "Click here",
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
    handleChange() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        rowId: this.$store.state.customizerModule.currentRow.rowId,
        setting: "textValue",
        value: this.text,
      });
    },
    setDefault() {
      const rowId = this.$store.state.customizerModule.currentRow.rowId;
      const element = this.$store.state.formViewModule.formViewElements.find(
        (e) => e.rowId === rowId
      );
      this.text = element.defaultProperties.textValue;
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
