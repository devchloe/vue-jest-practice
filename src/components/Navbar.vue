<template>
    <div class="navbar-nav">
        <router-link v-for="(menuItem, index) in menuItems" :key="index" class="nav-item" :to="menuItem.path">{{menuItem.name}}</router-link>
    </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data: () => ({
      menuItems: [
        {
          name: '클러스터',
          path: '/cluster'
        },
        {
          name: '네임스페이스',
          path: '/namespace'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
.navbar-nav {
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