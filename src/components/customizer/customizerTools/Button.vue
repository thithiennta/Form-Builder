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
            properties.padding.paddingTop +
            'px ' +
            properties.padding.paddingRight +
            'px ' +
            properties.padding.paddingBottom +
            'px ' +
            properties.padding.paddingLeft +
            'px ',
          width: properties.width + '%',
          height: properties.height + 'px',
          'background-color': properties.backgroundColor,
          'border-radius': properties.border.borderRadius + 'px',
          'text-align': 'center',
          color: properties.text.color,
          'font-size': properties.text.fontSize + 'px',
          ...border,
        }"
        style="display:inline-block"
      >
        <span>{{ properties.text.textValue }}</span>
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
  data() {
    return {};
  },
  computed: {
    border() {
      if (this.properties.fullBorderWidth) {
        return {
          "border-top":
            this.properties.border.borderTopWidth +
            "px " +
            this.properties.border.borderStyle +
            " " +
            this.properties.border.borderColor,
          "border-bottom":
            this.properties.border.borderBottomWidth +
            "px " +
            this.properties.border.borderStyle +
            " " +
            this.properties.border.borderColor,
          "border-left":
            this.properties.border.borderLeftWidth +
            "px " +
            this.properties.border.borderStyle +
            " " +
            this.properties.border.borderColor,
          "border-right":
            this.properties.border.borderRightWidth +
            "px " +
            this.properties.border.borderStyle +
            " " +
            this.properties.border.borderColor,
        };
      } else {
        return {
          border:
            this.properties.border.borderWidth +
            "px " +
            this.properties.border.borderStyle +
            " " +
            this.properties.border.borderColor,
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
