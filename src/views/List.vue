<template>
  <div class="list">
    <div style="display: inline-flex;">
      <span class="bg-green" style="width: 30px; height: 20px;"></span>
      프로비저닝 실패인 경우
    </div>
    <div style="display: inline-flex; ">
      <span class="bg-blue" style="width: 30px; height: 20px;"></span>볼륨 크기
      조정 실패인 경우
    </div>
    <button class="btn btn-create" @click="onClickCreateSuccess('pvc-success')">
      PVC 추가: 프로비저닝 성공
    </button>
    <button
      class="btn btn-create"
      @click="onClickCreateProvisioningFailed('pvc-provisioning-failed')"
    >
      PVC 추가: 프로비저닝 실패
    </button>
    <div class="list-item" v-for="(item, index) in pvcItems" :key="index">
      <div class="title">
        <span>{{ item.name }}</span>
        <button
          class="btn btn-edit"
          @click="onClickUpdateSuccess(item.name, '100')"
        >
          PVC 수정: 볼륨 크기 조정 성공
        </button>
        <button
          class="btn btn-edit"
          @click="onClickUpdateResizeFailed(item.name, '100')"
        >
          PVC 수정: 볼륨 크기 조정 실패
        </button>
      </div>
      <div
        class="content"
        :class="[
          {
            'bg-green':
              item.capacity === null &&
              item.phase === 'Pending' &&
              !item.provisioningState
          },
          {
            'bg-blue':
              item.request !== item.capacity &&
              item.phase === 'Bound' &&
              !item.volumeResizeState
          }
        ]"
      >
        <div v-if="item.loading">
          <div>name:{{ item.name }}</div>
          <div>request: {{ item.request }}</div>
          <div>capacity: {{ item.capacity }}</div>
          <div class="bold red">phase: {{ item.phase }}</div>
          <div
            class="bold green"
            style="margin-top: 8px; padding-top: 8px; border-top: 1px solid dimgrey;"
          >
            provisioningState: {{ item.provisioningState }}
          </div>
          <div class="bold blue">
            volumeResizeState: {{ item.volumeResizeState }}
          </div>
          <div class="bold">loading: {{ item.loading }}</div>
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
      abc: {},
      pvcItems: [
        {
          name: "pvc1",
          request: "1Gi",
          capacity: "1Gi",
          phase: "Bound",
          provisioningState: true,
          volumeResizeState: null,
          loading: true
        },
        {
          name: "pvc2",
          request: "100Gi",
          capacity: null,
          phase: "Pending",
          provisioningState: false,
          volumeResizeState: null,
          loading: true
        },
        {
          name: "pvc3",
          request: "5Gi",
          capacity: "5Gi",
          phase: "Bound",
          provisioningState: true,
          volumeResizeState: true,
          loading: true
        },
        {
          name: "pvc4",
          request: "5Gi",
          capacity: "1Gi",
          phase: "Bound",
          provisioningState: true,
          volumeResizeState: false,
          loading: true
        },
        {
          name: "pvc5",
          request: "1Gi",
          capacity: "1Gi",
          phase: "Bound",
          provisioningState: true,
          volumeResizeState: false,
          loading: true
        },
        {
          name: "pvc6",
          request: "2Gi",
          capacity: "2Gi",
          phase: "Bound",
          provisioningState: true,
          volumeResizeState: false,
          loading: true
        }
      ]
    };
  },
  methods: {
    onClickCreateSuccess(name) {
      this.onClickCreate(name, "success");
    },
    onClickCreateProvisioningFailed(name) {
      this.onClickCreate(name, "failure");
    },
    onClickUpdateSuccess(pvcName, request) {
      const pvc = this.pvcItems.find(({ name }) => name === pvcName);
      pvc.loading = false;

      this.onClickUpdate(pvcName, request, "success");
    },
    onClickUpdateResizeFailed(pvcName, request) {
      const pvc = this.pvcItems.find(({ name }) => name === pvcName);
      pvc.loading = false;

      this.onClickUpdate(pvcName, request, "failure");
    },
    async onClickCreate(pvcName, type) {
      this.pvcItems.unshift({
        name: pvcName,
        request: "1GB",
        provisioningState: false,
        volumeResizeState: null,
        loading: false
      });
      let response;
      if (type === "success") {
        response = await this.createItem(pvcName);
      } else if (type === "failure") {
        response = await this.createItemFailed(pvcName);
      }

      let createdPvc;
      const provisioningState = response.phase === "Bound";

      if (provisioningState) {
        createdPvc = {
          ...response,
          provisioningState,
          volumeResizeState: null,
          loading: true
        };
        const index = this.pvcItems.findIndex(({ name }) => name === pvcName);
        this.pvcItems.splice(index, 1, createdPvc);
      } else {
        const response2 = await this.getItem(pvcName, type);
        const provisioningState = response2.phase === "Bound";
        const index = this.pvcItems.findIndex(({ name }) => name === pvcName);
        const updatedPvc = {
          ...response2,
          provisioningState,
          volumeResizeState: null,
          loading: true
        };

        this.pvcItems.splice(index, 1, updatedPvc);
      }
    },
    async onClickUpdate(pvcName, request, type) {
      let updatePromise;

      if (type === "success") {
        updatePromise = this.updateItem(pvcName, request);
      } else if (type === "failure") {
        updatePromise = this.updateItemFailed(pvcName, request);
      }

      const response = await updatePromise;
      const provisioningState = response.phase === "Bound";
      const volumeResizeState = response.request === response.capacity;
      const updatedPvc = {
        ...response,
        provisioningState,
        volumeResizeState,
        loading: true
      };

      const index = this.pvcItems.findIndex(({ name }) => name === pvcName);
      this.pvcItems.splice(index, 1, updatedPvc);
    },
    createItem(name) {
      return new Promise(resolve =>
        setTimeout(function() {
          resolve({
            name: name,
            request: "1Gi",
            capacity: null,
            phase: "Pending"
          });
        }, 2 * 1000)
      );
    },
    createItemFailed(name) {
      return new Promise(resolve =>
        setTimeout(function() {
          resolve({
            name: name,
            request: "1Gi",
            capacity: null,
            phase: "Pending"
          });
        }, 4 * 1000)
      );
    },
    getItem(name, type) {
      if (type === "success") {
        return new Promise(resolve =>
          setTimeout(function() {
            resolve({
              name: name,
              request: "1Gi",
              capacity: "1Gi",
              phase: "Bound"
            });
          }, 1000)
        );
      } else if (type === "failure") {
        return new Promise(resolve =>
          setTimeout(function() {
            resolve({
              name: name,
              request: "1Gi",
              capacity: null,
              phase: "Pending"
            });
          }, 1000)
        );
      }
    },
    updateItem(name, request) {
      return new Promise(resolve =>
        setTimeout(function() {
          resolve({
            name: name,
            request: request,
            capacity: request,
            phase: "Bound"
          });
        }, 2 * 1000)
      );
    },
    updateItemFailed(name, request) {
      return new Promise(resolve =>
        setTimeout(function() {
          resolve({
            name: name,
            request: request,
            capacity: "1Gi",
            phase: "Bound"
          });
        }, 2 * 1000)
      );
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
  width: 100%;
  height: 200px;

  & .title {
    display: flex;
    align-items: center;
    height: 40px;
    button {
      height: 20px;
    }
  }

  & .content {
    position: relative;
    width: 100%;
    & div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      /*height: 100px;*/
    }
  }
}

.bold {
  font-weight: 500;
}

.red {
  color: darkred;
}

.blue {
  color: darkblue;
}
.bg-blue {
  background-color: rgba(0, 0, 139, 0.4);
}

.green {
  color: forestgreen;
}
.bg-green {
  background-color: rgba(34, 139, 34, 0.4);
}
</style>