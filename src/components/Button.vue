<template>
  <div
    class="clone-tool-row"
    :style="{
      'background-color': properties.rowBackgroundColor,
    }"
  >
    <div class="clone-tool-container">
      <a
        href="#"
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
          color: properties.color,
          'background-color': properties.backgroundColor,
          'border-radius': properties.borderRadius + 'px',
        }"
        style="display:inline-block"
      >
        <span>{{ properties.textValue }}</span>
      </a>
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
