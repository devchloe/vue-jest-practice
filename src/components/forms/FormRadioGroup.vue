<template>
    <div class="form-radio-group">
        <!--        <form-radio v-for="(option, index) in options" @click="onClick" :key="index" :text="option.text"-->
        <!--                    :value="option.value" :selectedValue="selectedOption"/>-->

        <form-radio v-model="selectedOption"
                    @click="onClick"
                    v-for="(option, index) in options"
                    :text="option.text"
                    :value="option.value"
                    :key="index" />
    </div>
</template>

<script>
  import FormRadio from "@/components/forms/FormRadio";

  export default {
    name: 'FormRadioGroup',
    model: {
      prop: 'selectedValue',
      event: 'select'
    },
    components: {
      FormRadio
    },
    props: {
      options: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        selectedOption: '',
      };
    },
    methods: {
      onClick(value) {
        this.selectedOption = value;
        this.$emit('select', value);
      }
    }
  }

</script>

<style scoped>

</style>