<template>
  <div class="form-customizer-container form-customizer-tools-wrapper">
    <div class="form-customizer-container">
      <div class="form-customizer-header">
        <p class="form-customizer-title">Tools</p>
        <a-icon type="up" />
      </div>
      <Draggable
        class="customizer-tools-wrapper"
        ghost-class="customizer-tool-ghost"
        :list="customizerTools"
        :group="{ name: 'group1', pull: 'clone', put: false }"
        @change="handleChange"
        :sort="false"
        :clone="handleCloneTool"
      >
        <div
          class="customizer-tool-wrapper"
          :span="12"
          v-for="(customizerTool, index) in customizerTools"
          :key="index"
        >
          <CustomizerTool :customizerTool="customizerTool" />
        </div>
      </Draggable>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import { mapState } from "vuex";
import Draggable from "vuedraggable";
import CustomizerTool from "./CustomizerTool";

export default {
  components: {
    Draggable,
    CustomizerTool,
  },
  computed: {
    ...mapState("customizerModule", ["customizerTools"]),
  },
  methods: {
    handleChange() {},
    handleCloneTool(item) {
      const { padding, border, text } = item.properties;
      return {
        ...item,
        properties: {
          ...item.properties,
          border: { ...border },
          padding: { ...padding },
          text: { ...text },
        },
        rowId: uuid(),
      };
    },
  },
};
</script>

<style scoped>
.customizer-tools-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  border-top: 1px solid #343638;
}
.customizer-tool-wrapper {
  width: 50%;
  display: inline-block;
}
</style>
