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
      <input
        type="text"
        :placeholder="properties.text.placeholder"
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
          'background-color': properties.backgroundColor,
          'border-radius': properties.border.borderRadius + 'px',
          color: properties.text.color,
          'font-size': properties.text.fontSize + 'px',
          ...border,
        }"
        :name="properties.text.inputName"
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
  computed: {
    border() {
      if (this.properties.border.fullBorderWidth) {
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

<style></style>
