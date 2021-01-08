<template>
  <div class="form-customizer-select-options-wrapper">
    <div class="form-customizer-container">
      <div class="form-customizer-select-options">
        <div
          class="form-customizer-select-item"
          :class="{ active: isElementTabActive }"
        >
          ELEMENTS
        </div>
        <div
          class="form-customizer-select-item"
          :class="{ active: !isElementTabActive }"
        >
          SETTINGS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isElementTabActive: true,
    };
  },
};
</script>

<style scoped>
.form-customizer-select-options-wrapper {
  padding: 10px 0;
  border-bottom: 1px solid #292c2e;
}

.form-customizer-select-options {
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: #292c2e;
  padding: 5px;
  border-radius: 7px;
}
.form-customizer-select-item {
  width: calc(50% - 5px);
  padding: 10px 0;
  text-align: center;
  color: white;
  cursor: pointer;
  border-radius: 7px;
}
.form-customizer-select-item.active {
  background-color: rgb(237, 237, 237);
  color: rgb(151, 151, 255);
}
</style>
