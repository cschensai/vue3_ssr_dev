import { DestyHeaderV2, DestyFooter, DestyExchangeToken } from 'desty-design';
export default defineNuxtPlugin(nuxtapp => {
  nuxtapp.vueApp.use(DestyHeaderV2).use(DestyFooter).use(DestyExchangeToken);
});
