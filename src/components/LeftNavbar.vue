<template>
  <div class="navbar-nav">
    <router-link
      :to="navItem.path"
      v-for="(navItem, index) in navItems"
      :key="index"
      class="nav-item"
      >{{ navItem.name }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "LeftNavbar",
  data: () => ({
    navItems: [
      {
        name: "클러스터",
        path: "/"
      },
      {
        name: "네임스페이스",
        path: "/namespace"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
