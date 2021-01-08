<template>
  <div class="setting-element-wrapper">
    <div class="setting-element-header">
      <div class="form-customizer-title">Padding</div>
      <div class="setting-element-switch">
        <a-switch default-checked @change="onSwitchChange" />
      </div>
    </div>
    <div class="setting-element-body" v-if="showFullPadding">
      <div class="padding-row">
        <div class="padding-col">
          <label>Top</label>
          <a-input-number :min="1" :max="100" :default-value="10" />
        </div>
        <div class="padding-col">
          <label>Right</label>
          <a-input-number :min="1" :max="100" :default-value="10" />
        </div>
        <div class="padding-col">
          <label>Bottom</label>
          <a-input-number :min="1" :max="100" :default-value="10" />
        </div>
        <div class="padding-col">
          <label>Left</label>
          <a-input-number :min="1" :max="100" :default-value="10" />
        </div>
      </div>
    </div>
    <div class="setting-element-body" v-if="!showFullPadding">
      <div class="padding-row">
        <div class="padding-col">
          <a-input-number :min="1" :max="100" :default-value="10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      value: "center",
      showFullPadding: true,
    };
  },
  methods: {
    onSwitchChange() {
      this.showFullPadding = !this.showFullPadding;
    },
  },
};
</script>

<style scoped>
.padding-row {
  display: flex;
  justify-content: space-between;
}
.padding-col {
  width: 20%;
}
.padding-col label {
  margin-bottom: 5px;
  color: rgb(157, 156, 156);
  display: inline-block;
}
.ant-input-number {
  width: 100%;
}
</style>
