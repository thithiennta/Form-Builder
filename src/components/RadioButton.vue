<template>
  <div
    class="clone-tool-row"
    :style="{
      'background-color': properties.rowBackgroundColor,
    }"
  >
    <div class="clone-tool-container">
      <div class="clone-tool-checkbox-wrapper">
        <label>
          <input
            type="radio"
            :name="properties.radioName"
            :value="properties.radioValue"
          />
          <span>{{ properties.radioText }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    properties: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.clone-tool-checkbox-wrapper label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: auto;
}
</style>
