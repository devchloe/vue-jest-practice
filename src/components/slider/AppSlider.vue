<template>
  <div></div>
</template>

<script>
export default {
  name: "AppSlider",
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 10
    },
    ticks: {
      type: Boolean,
      default: true
    },
    tooltipType: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dragging: false,
      isRange: false,
      _isSlider: true
    };
  },
  computed: {
    tickValues() {
      if (!this.ticks || this.min > this.max || this.step === 0) return [];
      const result = [];
      for (let i = this.min + this.step; i < this.max; i += this.step) {
        result.push(i);
      }
      return result;
    },
  }
};
</script>

<style scoped></style>
