import { defineStore } from 'pinia';

const useHome = defineStore('home', {
  state: () => {
    return {
      isPhone: false,
    };
  },
  actions: {
    setPhone(isPhone) {
      this.isPhone = isPhone;
    },
  },
})

export default useHome;