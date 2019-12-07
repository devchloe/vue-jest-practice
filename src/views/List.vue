<template>
  <div class="list">
    <div class="list-item">
      <div class="title">
        <span>PVC-NAME</span>
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-delete">Delete</button>
      </div>
      <div class="content">
        <app-spinner v-if="true" />
      </div>
    </div>
  </div>
</template>

<script>
import AppSpinner from "@/components/AppSpinner";
export default {
  name: "List",
  components: { AppSpinner }
};
</script>

<style lang="scss" scoped>
.list {
  width: 500px;
}
.list-item {
  display: flex;
  flex-direction: column;
  border: 1px solid dimgrey;
  height: 150px;
  & .title {
    display: inline-flex;
    height: 50px;
  }
  & .content {
    height: 100px;
    position: relative;
    background-color: lightgray;
  }
}
</style>
