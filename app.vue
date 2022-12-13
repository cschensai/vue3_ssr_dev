<template>
  <div>
    <ElConfigProvider :locale="elementPlusEn">
      <DestyHeader />
      <!-- 路由组件 -->
      <NuxtPage />
      <DestyFooter />
    </ElConfigProvider>
  </div>
</template>

<script setup>
import { DestyHeader, DestyFooter } from 'desty-design/lib/index.cjs.js';
import { ElConfigProvider } from 'element-plus';
import elementPlusEn from 'element-plus/es/locale/lang/en';
// import elementPlusId from 'element-plus/es/locale/lang/id';
import flexible from './utils/flexible';


// import { ref } from 'vue';
// const time = ref(getLocaleTime()); 
onMounted(() => {
  flexible(window, document);
})
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>

