import { defineStore } from 'pinia';

const useMenuHome = defineStore('home', {
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

export default useMenuHome;