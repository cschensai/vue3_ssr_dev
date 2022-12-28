import { defineStore } from 'pinia';

const useHome = defineStore('home', {
  state: () => {
    return {
      isPhone: false,
      currToken: '',
      currLang: 'id',
    };
  },
  actions: {
    setPhone(isPhone) {
      this.isPhone = isPhone;
    },
    setCurrToken(tokenVal) {
      this.currToken = tokenVal;
    },
    setCurrLang(lang) {
      this.currLang = lang;
    },
  },
})

export default useHome;