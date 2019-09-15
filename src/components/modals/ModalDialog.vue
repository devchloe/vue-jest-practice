<template functional>
  <div :class="props.type">
    <h1>{{ props.title }}</h1>
    <div v-if="slots().default">
      <slot></slot>
    </div>
    <div class="buttons" v-if="props.buttons && props.type != 'simple'">
      <button v-for="(btnId, index) in props.buttons" :key="index">
        {{ btnId }}
      </button>
      <!--      <button-->
      <!--        v-for="(btn, index) in props.buttons"-->
      <!--        @click="'listeners.' + actions[btn].event"-->
      <!--        :key="index"-->
      <!--      >-->
      <!--        {{ actions[btn].text }}-->
      <!--      </button>-->
        {{ nomalizedButtons }}

    </div>
  </div>
</template>
<script>
export default {
  name: "modal-dialog",
  props: {
    type: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    buttons: {
      type: Array
    }
  },
  data() {
    return {
      buttonObj: {
        cancel: "취소",
        save: "저장"
      },
      buttonNames: this.buttons
    };
  },
  computed: {
    nomalizedButtons: function() {
      return this.buttonNames.find(function(value) {
        if (value === "cancel") return value;
      });
    }
  }
};
</script>
