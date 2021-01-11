<template>
  <div
    class="clone-tool-row"
    :style="{
      'background-color': properties.rowBackgroundColor,
    }"
  >
    <div
      class="clone-tool-container"
      :style="{ 'text-align': properties.align }"
    >
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
          ...border,
          width: properties.width + '%',
          color: properties.color,
          'background-color': properties.backgroundColor,
          'border-radius': properties.borderRadius + 'px',
          'text-align': 'center',
          'font-size': properties.fontSize + 'px',
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
  computed: {
    border() {
      if (this.properties.fullBorderWidth) {
        return {
          "border-top":
            this.properties.borderTopWidth +
            "px " +
            this.properties.borderStyle +
            " " +
            this.properties.borderColor,
          "border-bottom":
            this.properties.borderBottomWidth +
            "px " +
            this.properties.borderStyle +
            " " +
            this.properties.borderColor,
          "border-left":
            this.properties.borderLeftWidth +
            "px " +
            this.properties.borderStyle +
            " " +
            this.properties.borderColor,
          "border-right":
            this.properties.borderRightWidth +
            "px " +
            this.properties.borderStyle +
            " " +
            this.properties.borderColor,
        };
      } else {
        return {
          border:
            this.properties.borderWidth +
            "px " +
            this.properties.borderStyle +
            " " +
            this.properties.borderColor,
        };
      }
    },
  },
};
</script>

<style scoped>
a {
  min-width: fit-content;
}
</style>
