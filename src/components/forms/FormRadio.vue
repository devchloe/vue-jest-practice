<template>
    <div class="form-radio">
        <div :class="{'active':shouldBeChecked}" :value="value" @click="onClick">
            {{ text }}
        </div>
    </div>
</template>

<script>
  export default {
    name: 'FormRadio',
    model: {
      prop: 'selectedValue',
      event: 'click'
    },
    props: {
      selectedValue: {
        type: String,
        default: ""
      },
      value: String,
      text: {
        type: String,
        required: true,
      },
      checked: Boolean,
    },
    computed: {
      shouldBeChecked() {
        return this.selectedValue == this.value
      }
    },
    methods: {
      onClick() {
        this.$emit('click', this.value);
      }
    }
  }
</script>

<style lang="scss" scoped>
    .active {
        border: 3px solid orange;
    }

</style>