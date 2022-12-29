<template>
  <div>
    <ElConfigProvider :locale="elementPlusEn">
      <!-- 路由组件 -->
      <NuxtPage />
    </ElConfigProvider>
    <client-only>
      <DestyExchangeToken ref="destyExchangeTokenRef" :isProduction="isProduction" />
    </client-only>
  </div>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus';
import elementPlusEn from 'element-plus/es/locale/lang/en';
// import elementPlusId from 'element-plus/es/locale/lang/id';
import { useNuxtApp } from '#app';
import useHome from './stores/index';
import flexible from './utils/flexible';

const homeStore = useHome();
const config = useRuntimeConfig();
const destyExchangeTokenRef = ref(null);
const { amplitude } = useNuxtApp().vueApp;

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

// 设置amplitude
function setAmplitude() {
  amplitude.getInstance().init(config.VITE_AMPLITUDE_API_KEY, {
    includeUtm: true,
    includeReferrer: true,
  });
  amplitude.getInstance().logEvent('general: visit homepage - desty.app', {
    source: document.referrer,
    is_logged_in: !!homeStore.currToken
  });
}

onMounted(() => {
  if (process.client) {
    nextTick(async () => {
      const token = await destyExchangeTokenRef.value?.getToken?.();
      homeStore.setCurrToken(token);
      setAmplitude();
    });
  }
  flexible(window, document);
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

