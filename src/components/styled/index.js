import Vue from 'vue';

import ThemedButton from './ThemedButton';

export const themedButton = Vue.component('themed-button', {
  compoenents: { ThemedButton },
  template: `<ThemedButton :color="$store.getters['themeColor']"><slot></slot></ThemedButton>`,
});