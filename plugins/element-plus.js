import { ID_INJECTION_KEY } from 'element-plus';
// 在SSR中，您必须传递一个 ID_INJECTION_KEY。 该错误是由在一个页面中使用多个相同的组件引起的。 因此，SSR 无法区分组件
export default defineNuxtPlugin(nuxtapp => {
  nuxtapp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  })
})
