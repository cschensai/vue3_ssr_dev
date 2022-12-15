<template>
  <client-only>
    <DestyHeaderV2
      class="home-page-header-v2"
      :lang="langRef"
      @handleLang="handleLang"
      @handleNavAction="handleNavAction"
    >
      <template v-slot:sub-menu-products-content>
        <div class="content-box">
          <div class="menu-title">{{ $t('headerv2.title') }}</div>
          <div class="sub-menu-box">
            <div class="sub-menu-box-item" v-for="item in SUB_MENU_LIST" :key="item.key" @click="handleNavAction(item.key)">
              <img class="icon-img-logo" :src="`https://static.desty.app/desty-homepage/v2/${item.icon}.svg`" alt="desty home page" />
              {{ item.text }}
            </div>
          </div>
        </div>
      </template>
      <template v-slot:mobile-sub-menu-products-content>
        <div class="mobile-sub-menu-box-item" v-for="item in SUB_MENU_LIST" :key="item.key" @click="handleNavAction(item.key)">
          <img class="icon-img-logo" :src="`https://static.desty.app/desty-homepage/v2/${item.icon}.svg`" alt="desty home page" />
          {{ item.text }}
        </div>
      </template>
      <template v-slot:extra-content>
        <div class="action-btn" @click="handleNavAction('login')">
          {{ $t('manageBusiness.startNow') }}
        </div>
      </template>
    </DestyHeaderV2>
  </client-only>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { SUB_MENU_LIST } from '~/constant/index';
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
.home-page-header-v2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 9;
  .menu-title {
    font-weight: 800;
    font-size: 18px;
    color: #A6A6A6;
  }
  .sub-menu-box {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    .sub-menu-box-item {
      display: flex;
      align-items: center;
      width: 50%;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 26px;
      .icon-img-logo {
        margin-right: 13px;
        width: 24px;
        height: 24px;
      }
      &:nth-child(2n) {
        justify-content: flex-end;
      }
      
    }
  }
  .action-btn {
    padding: 14px 46px;
    font-size: 16px;
    color: #fff;
    background-color: #0C1BB8;
    border-radius: 12px;
    cursor: pointer;
  }
  .mobile-sub-menu-box-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 18px;
    .icon-img-logo {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>