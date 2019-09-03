<template>
    <label>
        <input type="radio" :checked="shouldBeChecked" :name="name" :value="value" @change="onChange"/>
        {{ label }}
    </label>
</template>

<script>
  export default {
    name: 'FormRadio',
    model: {
      prop: 'modelValue',
      event : 'change'
    },
    props: {
      name: {
        type: String,
        default: ""
      },
      value: String,
      modelValue: {
        default: ""
      },
      checked: Boolean,
      label: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      selected: '',
    }),
    computed: {
      shouldBeChecked() {
        return this.modelValue == this.value
      }
    },
    methods: {
      onChange() {
        this.$emit('changexxx', this.value);
      }
    }
  }
</script>

<style scoped>

</style>