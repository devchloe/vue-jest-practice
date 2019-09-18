<template>
  <div>
    <c-button-props-cond primary>등록</c-button-props-cond>
    <c-button-props-cond radius>취소</c-button-props-cond>
    <themed-button color="blue">삭제</themed-button>
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
import CButton from '@/components/styled/Button'
import CButtonProps from '@/components/styled/ButtonProps'
import CButtonPropsCond from '@/components/styled/ButtonPropsCond'
import ThemedButton from '@/components/styled/ThemedButton'

export default {
  name: "Modal",
  components: {
    ModalDialog,
    CButton,
    CButtonProps,
    CButtonPropsCond,
    ThemedButton
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
