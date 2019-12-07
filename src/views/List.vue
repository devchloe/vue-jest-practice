<template>
  <div class="list">
    <button class="btn btn-create" @click="onClickCreate('dev-pvc')">
      Create
    </button>
    <div class="list-item" v-for="item in pvcItems">
      <div class="title">
        <span>{{ item.name }}</span>
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-delete">Delete</button>
      </div>
      <div class="content">
        <div class="content__detail" v-if="item.phase !== ''">
          <pre>
              name:{{ item.name }}
              request: {{ item.request }}
              capacity: {{ item.capacity }}
              phase: {{ item.phase }}
          </pre>
        </div>
        <app-spinner v-else />
      </div>
    </div>
  </div>
</template>

<script>
import AppSpinner from "@/components/AppSpinner";
export default {
  name: "List",
  components: { AppSpinner },
  data() {
    return {
      pvcItems: []
    };
  },
  methods: {
    onClickCreate(name) {
      const newPvc = {
        name: name,
        request: "1Gi",
        capacity: "1Gi",
        phase: "Bound"
      };
      this.pvcItems.push(newPvc);
    }
  }
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
