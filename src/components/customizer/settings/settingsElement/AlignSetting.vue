<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Align</div>
    <div class="setting-element-body">
      <a-radio-group v-model="value" @change="handleChange">
        <a-radio-button value="left">
          <a-icon type="align-left" />
        </a-radio-button>

        <a-radio-button value="center">
          <a-icon type="align-center" />
        </a-radio-button>

        <a-radio-button value="right">
          <a-icon type="align-right" />
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rowId"],
  data: function() {
    return {
      value: "center",
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
    handleChange() {
      this.$store.dispatch("formViewModule/adjustSetting", {
        rowId: this.$store.state.customizerModule.currentRow.rowId,
        setting: "align",
        value: this.value,
      });
    },
    setDefault() {
      const rowId = this.$store.state.customizerModule.currentRow.rowId;
      const element = this.$store.state.formViewModule.formViewElements.find(
        (e) => e.rowId === rowId
      );
      this.value = element.defaultProperties.align;
    },
  },
};
</script>

<style scoped>
.ant-radio-group {
  display: flex;
}
.ant-radio-button-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
</style>
