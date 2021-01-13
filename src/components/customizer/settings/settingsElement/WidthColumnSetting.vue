<template>
  <div class="setting-element-wrapper">
    <div class="form-customizer-title">Width</div>
    <div class="setting-element-body">
      <div v-for="(column, index) in columnsWidth" :key="index">
        <label class="property-label">Column {{ index + 1 }}</label>
        <a-input-number
          v-model="columnsWidth[index]"
          :min="0"
          :max="100"
          @change="handleChange($event, index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      totalCol: 0,
      columnsWidth: [],
    };
  },
  props: ["rowId"],
  created() {
    this.setDefault();
  },
  watch: {
    rowId() {
      this.setDefault();
    },
  },
  computed: {},
  methods: {
    handleChange(value, index) {
      for (let i = 0; i < this.totalCol; i++) {
        this.columnsWidth[i] = (100 - value) / (this.totalCol - 1);
      }
      this.columnsWidth[index] = value;
      this.$store.dispatch("formViewModule/adjustSetting", {
        element: this.$store.state.customizerModule.currentRow,
        setting: "columnsWidth",
        value: this.columnsWidth,
      });
    },
    setDefault() {
      const element = this.$store.state.customizerModule.currentRow;
      const columnsWidth = element.properties.columnsWidth;
      this.totalCol = columnsWidth.length;
      columnsWidth.forEach((item) => this.columnsWidth.push(item));
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
