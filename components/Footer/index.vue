<template>
  <client-only>
    <DestyFooter
      :lang="langRef"
      @handleLang="handleLang"
      @handleNav="handleNavAction"
    />
  </client-only>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { handleNav } from '~/utils/utils';


const langRef = ref('id');
const { locale } = useI18n();
const config = useRuntimeConfig();
const { push } = useRouter();

// 更改语言
function handleLang(key) {
  langRef.value = key;
  locale.value = key;
}

// 导航
function handleNavAction(key) {
  handleNav(key, config, push);
}

</script>

<style lang="less" scoped>

</style>