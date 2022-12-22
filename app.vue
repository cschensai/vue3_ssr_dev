<template>
  <div>
    <ElConfigProvider :locale="elementPlusEn">
      <Header />
      <!-- 路由组件 -->
      <NuxtPage />
      <Footer />
      <!-- chat section -->
      <Chat />
    </ElConfigProvider>
    <client-only>
      <DestyExchangeToken ref="destyExchangeTokenRef" :isProduction="isProduction" />
    </client-only>
  </div>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus';
import Header from '~/components/Header/index.vue';
import Footer from '~/components/Footer/index.vue';
import Chat from '~/components/Chat/index.vue';
import elementPlusEn from 'element-plus/es/locale/lang/en';
// import elementPlusId from 'element-plus/es/locale/lang/id';
import useHome from './stores/index';
import flexible from './utils/flexible';

const homeStore = useHome();
const config = useRuntimeConfig();
const destyExchangeTokenRef = ref(null);

const isProduction = computed(() => {
  return config.VITE_NODE_ENV === 'production';
})

onBeforeMount(() => {
  // 设置当前设备变量
  const WIDTH = 768;
  if (document.body.clientWidth < WIDTH) {
    homeStore.setPhone(true);
  }else{
    homeStore.setPhone(false);
  }
  window.onresize = () => {
    if (document.body.clientWidth < WIDTH) {
      homeStore.setPhone(true);
    } else {
      homeStore.setPhone(false);
    }
  };
});

onMounted(() => {
  flexible(window, document);
  if (process.client) {
    nextTick(async () => {
      const token = await destyExchangeTokenRef.value?.getToken?.();
      homeStore.setCurrToken(token);
    })
  }
})

</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans';
  // position: relative;
  overflow-x: hidden;
  background-color: #F3F3F5;
}
</style>

