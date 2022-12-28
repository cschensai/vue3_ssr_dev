<template>
  <client-only>
    <DestyFooter
      class="desty-footer"
      :lang="homeStore.currLang"
      @handleLang="handleLang"
      @handleNav="handleNavAction"
    />
  </client-only>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { handleNav } from '~/utils/utils';
import useHome from '~/stores/index';

const { locale } = useI18n();
const config = useRuntimeConfig();
const { push } = useRouter();
const homeStore = useHome();

// 更改语言
function handleLang(key) {
  homeStore.setCurrLang(key);
  locale.value = key;
}

// 导航
function handleNavAction(key) {
  handleNav(key, config, push);
}

</script>

<style lang="less" scoped>
.desty-footer{
  width: 100%;
  position:absolute;
  z-index: 2;
}
</style>