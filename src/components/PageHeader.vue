<template>
    <div class="page-header">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'PageHeader'
  }
</script>

<style scoped>
.page-header {
    padding: 0 10px 10px 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border: 1px solid orangered;
}
</style>