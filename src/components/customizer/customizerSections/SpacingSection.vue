<template>
  <div class="form-customizer-container form-customizer-tools-wrapper">
    <div class="form-customizer-container">
      <div class="form-customizer-header">
        <p class="form-customizer-title">Spacing</p>
        <a-icon type="down" />
      </div>
      <!-- <Draggable
          class="customizer-tools-wrapper"
          ghost-class="customizer-tool-ghost"
          :list="list"
          :group="{ name: 'group1', pull: 'clone', put: false }"
          @change="handleChange"
          :sort="false"
          :clone="handleCloneTool"
        >
          <div
            class="customizer-tool-wrapper"
            :span="12"
            v-for="(item, index) in list"
            :key="index"
          >
            <CustomizerTool :item="item" />
          </div>
        </Draggable> -->
    </div>
  </div>
</template>

<script>
// import Draggable from "vuedraggable";
export default {
  components: {
    // Draggable,
  },
};
</script>

<style></style>
