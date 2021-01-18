<template>
  <div style="height: inherit">
    <SettingHeader />
    <vuescroll>
      <div class="elements-setting-section">
        <div class="form-customizer-container">
          <component
            v-for="(setting, index) in currentRow.validSettings"
            :is="setting"
            :key="index"
            :rowId="currentRow.rowId"
          ></component>
        </div>
      </div>
    </vuescroll>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SettingHeader from "./SettingHeader";
import WidthSetting from "./settingsElement/WidthSetting";
import HeightSetting from "./settingsElement/HeightSetting";
import FontSizeSetting from "./settingsElement/FontSizeSetting";
import AlignSetting from "./settingsElement/AlignSetting";
import PaddingRowSetting from "./settingsElement/PaddingRowSetting";
import BorderSetting from "./settingsElement/BorderSetting";
import ButtonTextSetting from "./settingsElement/ButtonTextSetting";
import FontFamilySetting from "./settingsElement/FontFamilySetting";
import WidthColumnSetting from "./settingsElement/WidthColumnSetting";
import WidthTwoColumnSetting from "./settingsElement/WidthColumnSetting";
import InputTextSetting from "./settingsElement/InputTextSetting";
import TextAreaTextSetting from "./settingsElement/TextAreaTextSetting";
import CheckboxTextSetting from "./settingsElement/CheckboxTextSetting";
import RadioTextSetting from "./settingsElement/RadioTextSetting";
export default {
  components: {
    SettingHeader,
    WidthSetting,
    HeightSetting,
    FontSizeSetting,
    AlignSetting,
    PaddingRowSetting,
    BorderSetting,
    ButtonTextSetting,
    FontFamilySetting,
    WidthColumnSetting,
    WidthTwoColumnSetting,
    InputTextSetting,
    TextAreaTextSetting,
    CheckboxTextSetting,
    RadioTextSetting,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState("customizerModule", ["currentRow"]),
  },
};
</script>

<style scoped>
.elements-setting-section {
  padding: 10px 0;
  width: 300px;
}
</style>
<style>
.property-label {
  margin-bottom: 5px;
  color: rgb(157, 156, 156);
  display: block;
  color: rgb(94, 93, 93);
}
.setting-element-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
