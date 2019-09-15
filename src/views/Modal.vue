<template>
  <div>
    <modal-dialog
      type="confirmation"
      title="멤버 추가"
      :buttons="['cancel', 'ok']"
      @cancel="handleCancel"
      @ok="handleOk"
      size="large"
      >멤버 추가 목록</modal-dialog
    >

    <modal-dialog
      type="alert"
      title="클러스터 삭제"
      :buttons="['cancel', 'delete']"
      @cancel="handleCancel"
      @delete="handleDelete"
      size="small"
      >삭제하시겠습니까?</modal-dialog
    >

    <modal-dialog
      type="full-screen"
      title="클러스터 추가"
      :buttons="['cancel', 'save']"
      @cancel="handleCancel"
      @save="handleSave"
      size="xlarge"
      >클러스터 추가 폼</modal-dialog
    >
  </div>
</template>

<script>
import ModalDialog from "@/components/modals/ModalDialog";
export default {
  name: "Modal",
  components: {
    ModalDialog
  },
  methods: {
    handleCancel() {
      alert("cancel");
    },
    handleOk() {
      alert("ok");
    },
    handleDelete() {
      alert("delete");
    },
    handleSave() {
      alert("save");
    }
  }
};
</script>

<style scoped></style>
