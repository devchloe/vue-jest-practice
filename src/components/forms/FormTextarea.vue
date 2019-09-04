<template>
    <textarea @input="onInput" :id="id" :placeholder="placeholder" :rows="rows" :max-rows="maxRows"
              :required="required" :class="['form-textarea', classes]" :style="styles"/>
</template>

<script>
  export default {
    name: "FormTextarea",
    model: {
      prop: "textareaValue",
      event: "input"
    },
    props: {
      textareaValue: {
        type: String,
        default: ""
      },
      id: {
        type: String,
        default: "",
        required: true
      },
      placeholder: {
        type: String,
        default: ""
      },
      rows: {
        type: String,
        default: '1'
      },
      maxRows: {
        type: String,
        default: '3'
      },
      required: {
        type: Boolean,
        default: false
      },
      classes: {
        type: [Array, Object],
        default: () => []
      },
      styles: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      onInput({target: {value}}) {
        this.$emit("input", value);
      }
    }
  };
</script>

<style lang="scss" scoped>
    .form-textarea {
        &:focus {
            outline: none;
        }
    }
</style>
