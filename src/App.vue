<template>
  <div id="app">
    <left-navbar />
    <router-view />
  </div>
</template>

<script>
import LeftNavbar from "@/components/LeftNavbar";

export default {
  name: "App",
  components: {
    LeftNavbar
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
