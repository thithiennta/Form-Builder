<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Width</div>
    <div class="setting-element-body">
      <a-slider
        v-model="inputValue"
        :min="1"
        :max="100"
        :tip-formatter="tipFormat"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      inputValue: 30,
    };
  },
  methods: {
    tipFormat(value) {
      return value + "%";
    },
  },
};
</script>

<style>
.ant-slider-rail {
  background-color: #393b3d;
}
.ant-slider:hover .ant-slider-rail {
  background-color: #393b3d;
}
</style>
