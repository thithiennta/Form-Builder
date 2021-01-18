<template>
  <div
    class="clone-tool-row"
    :style="{
      'background-color': properties.rowBackgroundColor,
    }"
  >
    <div class="clone-tool-container">
      <div class="clone-tool-checkbox-wrapper">
        <label :style="{ ['margin-' + properties.align]: 0 }">
          <input
            type="checkbox"
            :name="properties.text.checkboxName"
            :value="properties.text.checkboxValue"
            :style="{
              width: properties.text.fontSize + 'px',
              height: properties.text.fontSize + 'px',
            }"
          />
          <span
            :style="{
              'font-size': properties.text.fontSize + 'px',
            }"
          >
            {{ properties.text.checkboxText }}</span
          >
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
