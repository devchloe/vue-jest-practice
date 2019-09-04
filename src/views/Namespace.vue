<template>
  <div>
    <div>
      커스텀 Radio Button Group 테스트
<!--      <form-radio-group :options="options" @select="e => (selectedValue = e)" />-->
      <form-radio-group v-model="selectedValue" :options="options" />
      선택 옵션 : {{ selectedValue }}
    </div>


    <div>
      커스텀 textarea 컴포넌트 테시트
      <form-textarea
        v-model="sample"
        id="textarea1"
        placeholder="입력해주세요."
        rows="4"
        max-rows="5"
        :styles="styleObject"
      />
      {{ sample }}
    </div>
  </div>
</template>

<script>
import FormTextarea from "@/components/forms/FormTextarea";
import FormRadioGroup from "@/components/forms/FormRadioGroup";

export default {
  name: "Namespace",
  components: {
    FormTextarea,
    FormRadioGroup
  },
  data: () => ({
    sample: "",
    styleObject: {
      resize: "none",
      width: "500px"
    },
    options: [
      {
        text: "textA",
        value: "A"
      },
      {
        text: "textB",
        value: "B"
      },
      {
        text: "textC",
        value: "C"
      }
    ],
    selectedValue: ""
  }),
};
</script>

<style scoped></style>
