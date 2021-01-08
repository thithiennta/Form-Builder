<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Height</div>
    <div class="setting-element-body">
      <a-slider
        v-model="inputValue"
        :min="0"
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
      return value + "px";
    },
    // handleChange(value){

    // }
  },
};
</script>

<style scoped></style>
