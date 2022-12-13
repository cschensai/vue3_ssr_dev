<template>
  <div>
    <ElConfigProvider :locale="elementPlusEn">
      <client-only>
        <DestyHeaderV2 />
      </client-only>
      <!-- 路由组件 -->
      <NuxtPage />
      <client-only>
        <DestyFooter />
      </client-only>
    </ElConfigProvider>
  </div>
</template>

<script setup>
// import { DestyHeaderV2 } from 'desty-design';
import { ElConfigProvider } from 'element-plus';
import elementPlusEn from 'element-plus/es/locale/lang/en';
// import elementPlusId from 'element-plus/es/locale/lang/id';
import useHome from './stores/index';

const homeStore = useHome();

// import { ref } from 'vue';
// const time = ref(getLocaleTime()); 
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
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>

