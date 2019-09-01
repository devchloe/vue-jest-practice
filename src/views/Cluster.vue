<template>
  <div class="cluster-page">
    <page-header>
     <div class="header-cluster">
        Kubernetes 클러스터
      </div>
      <div class="commands-cluster">
        <button-plus target="클러스터"></button-plus>
        <button-plus target="네임스페이스"></button-plus>
        <button>삭제</button>
        <button>새로고침</button>
      </div>
    </page-header>
<!--    </div>-->
    <div class="search-clusters">
      <label for="clusterId">클러스터ID</label>
      <input type="text" id="clusterId" />
      <label for="clusterName">클러스터명</label>
      <input type="text" id="clusterName" />
    </div>
    <div class="list-clusters">
      클러스터 목록
    </div>
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader'
  import ButtonPlus from "@/components/ButtonPlus";
export default {
  name: "Cluster",
  components: {
    ButtonPlus,
    PageHeader,
  }
};
</script>

<style lang="scss" scoped>
.cluster-page {
  padding: 30px;
  display: flex;
  flex-direction: column;
}
  /*.header {*/
  /*  display: flex;*/
  /*  flex-flow: row nowrap;*/
  /*}*/
.search-clusters {
  display: flex;
  flex-flow: row nowrap;
}
  .list-clusters {
    display: flex;
  }
</style>
