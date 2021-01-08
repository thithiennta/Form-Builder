<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Button Text</div>
    <div class="setting-element-body">
      <a-input :value="text" />
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
  methods: {},
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
