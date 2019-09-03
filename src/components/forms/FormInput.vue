<template>
    <div>
        <input :value="modelValue" @input="onChange" />
    </div>
</template>

<script>
  export default {
    name: 'FormInput',
    model: {
      prop: 'modelValue',
      event: 'change'
    },
    props: {
      modelValue: {
        default: ''
      },
      value: String,
    },
    methods: {
      onChange(event) {
        this.$emit('change', event.target.value)
      }
    }
  }
</script>

<style scoped>

</style>