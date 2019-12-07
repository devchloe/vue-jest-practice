<template>
  <div id="app">
    <!--    <div class="nav">-->
    <!--      <left-navbar />-->
    <!--    </div>-->
    <div class="page">
      <router-view />
    </div>
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
  display: flex;
  flex-direction: row;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  width: 15%;
  border: 1px solid yellowgreen;
}

.page {
  /*width: 85%;*/
  /*border: 1px solid aqua;*/
}
</style>
