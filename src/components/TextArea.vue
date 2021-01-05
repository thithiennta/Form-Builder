<template>
  <div
    class="clone-tool-row"
    :style="{
      'background-color': properties.rowBackgroundColor,
    }"
  >
    <div class="clone-tool-container">
      <textarea
        type="text"
        :placeholder="properties.placeholder"
        :style="{
          padding:
            properties.paddingTop +
            'px ' +
            properties.paddingRight +
            'px ' +
            properties.paddingBottom +
            'px ' +
            properties.paddingLeft +
            'px ',
          border:
            properties.borderWidth +
            'px ' +
            properties.borderType +
            ' ' +
            properties.borderColor,
          width: properties.width + '%',
          'border-radius': properties.borderRadius + 'px',
          color: properties.color,
        }"
        style="outline:none"
      />
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

<style></style>
