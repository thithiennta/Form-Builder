<template>
  <div class="setting-element-wrapper">
    <div class="setting-element-header">
      <div class="form-customizer-title">Font Family</div>
    </div>
    <div class="setting-element-body">
      <a-select
        :default-value="fontFamily[0]"
        @change="handleChange"
        class="font-family-select"
      >
        <a-select-option
          v-for="(font, index) in fontFamily"
          :value="font"
          :key="index"
        >
          <p :style="{ 'font-family': font }">{{ font }}</p>
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fontFamily: [
        "'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif",
        "Georgia, serif",
        "'Times New Roman', Times, Serif",
        "'Arial Black', Gadget, sans-serif",
      ],
    };
  },
  methods: {
    handleChange() {},
  },
};
</script>

<style scoped>
.font-family-select {
  width: 100%;
}
</style>
