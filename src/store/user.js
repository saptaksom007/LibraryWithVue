import { defineStore } from 'pinia';

export default defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    value: '',
  }),
  getters: {
    getValue() {
      return this.value;
    },
  },
  actions: {
    setValue(newValue) {
      this.value = newValue;
    },
  },
});