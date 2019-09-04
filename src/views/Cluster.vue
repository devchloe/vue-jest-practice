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
            <input type="text" id="clusterId"/>
            <label for="clusterName">클러스터명</label>
            <input type="text" id="clusterName"/>
        </div>
        <div class="list-clusters">
            클러스터 목록

            <div>
                커스텀 InputText 컴포넌트 테스트
                <form-input v-model="clusterName" @change="hello"></form-input>
            </div>
            <div>
                커스텀 라디오 버튼 컴포넌트 테스트
                <form-radio text="Dedicated" value="dedicated" v-model="helmTillerType"></form-radio>
                <form-radio text="Shared" value="shared" v-model="helmTillerType">

                </form-radio>
                <form-radio text="chloe" value="chloed" v-model="helmTillerType"></form-radio>
                {{helmTillerType}}
            </div>
            <div>
                Radio
                <input type="radio" value="One" :checked="picked=='One'" @change="e => picked = e.target.value">One
                <input type="radio" value="Two" :checked="picked=='Two'" @change="e => picked = e.target.value">Two
                <input type="radio" value="One" v-model="picked">One
                <input type="radio" value="Two" v-model="picked">Two
                <span>Picked: {{ picked }}</span>
            </div>
            <div>
                Checkbox
                <input type="checkbox" value="foo" v-model="isChecked">foo
                <input type="checkbox" value="foo" :checked="!!isChecked" @change="e=>isChecked = e.target.checked">foo
                <input type="checkbox" value="foo" v-model="isChecked" true-value="a" false-value="b">foo
                <input type="checkbox" value="foo" :checked="isChecked=='a'"
                       @change="e=>isChecked = e.target.checked ? 'a' : 'b'">foo
                {{isChecked }}
            </div>
            <div>
                Multiple Checkbox
                <input type="checkbox" value="foo" v-model="checkedVals">foo
                <input type="checkbox" value="bar" v-model="checkedVals">bar
                <input type="checkbox" value="baz" v-model="checkedVals">baz
            </div>
        </div>
    </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader'
  import ButtonPlus from "@/components/ButtonPlus";
  import FormRadio from "@/components/forms/FormRadio";
  import FormInput from '@/components/forms/FormInput'

  export default {
    name: "Cluster",
    components: {
      FormRadio,
      ButtonPlus,
      PageHeader,
      FormInput,
    },
    data: () => ({
      picked: '',
      isChecked: true,
      checkedVals: ['bar'],
      helmTillerType: '',
      clusterName: '',
    }),
    methods: {
      hello() {
        console.log(this.clusterName);
      }
    }
  }
  ;
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
