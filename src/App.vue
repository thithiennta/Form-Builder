<template>
  <div id="app">
    <a-row type="flex">
      <a-col flex="300px">
        <FormCustomizer />
      </a-col>
      <a-col flex="1">
        <FormView />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import FormCustomizer from "./components/customizer/FormCustomizer";
import FormView from "./components/view/FormView";
export default {
  name: "App",
  components: {
    FormCustomizer,
    FormView,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app p {
  margin: unset !important;
}
</style>
