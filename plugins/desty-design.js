import { DestyHeaderV2, DestyFooter } from 'desty-design';
export default defineNuxtPlugin(nuxtapp => {
  nuxtapp.vueApp.use(DestyHeaderV2).use(DestyFooter);
});
