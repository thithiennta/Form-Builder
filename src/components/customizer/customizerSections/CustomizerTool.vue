<template>
  <div class="customizer-tool-wrap">
    <a-icon class="customizer-tool-icon" :type="customizerTool.icon" />
    <p class="customizer-tool-name">{{ customizerTool.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    customizerTool: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.customizer-tool-icon {
  font-size: 20px;
}
.customizer-tool-wrap {
  cursor: pointer;
  text-align: center;
  padding: 20px 0;
  margin: 5px;
  background-color: #47494b;
  color: rgb(210, 209, 209);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}
.customizer-tool-wrap:hover {
  color: white;
  background-color: rgb(130, 129, 129);
}
.customizer-tool-name {
  font-size: 11px;
}
</style>
