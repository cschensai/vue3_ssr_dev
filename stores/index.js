import { defineStore } from 'pinia';

const useHome = defineStore('home', {
  state: () => {
    return {
      isPhone: false,
      currToken: '',
    };
  },
  actions: {
    setPhone(isPhone) {
      this.isPhone = isPhone;
    },
    setCurrToken(tokenVal) {
      this.currToken = tokenVal;
    },
  },
})

export default useHome;