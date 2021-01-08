<template>
  <div class="form-customizer">
    <transition name="slide-fade">
      <ElementSetting v-if="settingActive" />
    </transition>

    <HeaderSection v-if="customizerActive" />
    <ToolsSection v-if="customizerActive" />
    <SpacingSection v-if="customizerActive" />
  </div>
</template>

<script>
// import Draggable from "vuedraggable";
import { mapState } from "vuex";
import HeaderSection from "./customizerSections/HeaderSection";
import SpacingSection from "./customizerSections/SpacingSection";
import ToolsSection from "./customizerSections/ToolsSection";
import ElementSetting from "./settings/ElementSetting";

export default {
  components: {
    // Draggable,
    HeaderSection,
    SpacingSection,
    ToolsSection,
    ElementSetting,
  },
  data: function() {
    return {};
  },
  created() {},
  computed: {
    ...mapState("customizerModule", ["activeTab"]),
    customizerActive() {
      return this.activeTab === "customizer";
    },
    settingActive() {
      return this.activeTab === "setting";
    },
  },
  methods: {},
};
</script>

<style scoped>
.form-customizer {
  background-color: #222527;
  height: 100vh;
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
</style>

<style>
.form-customizer-container {
  width: 90%;
  margin: auto;
}
.form-customizer-tools-wrapper {
  background-color: #2d3032;
  margin-top: 10px;
  border-radius: 7px;
  padding: 10px 0;
}
.form-customizer-header {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.form-customizer-title {
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
}
.form-customizer-header > i {
  color: rgb(188, 187, 187);
  font-size: 11px;
}
.setting-element-wrapper {
  margin: 20px 0;
}
</style>
