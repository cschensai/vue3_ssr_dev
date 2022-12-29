<template>
  <client-only>
  <div class="header">
    <HeaderTop v-if="showTop" @handleHeaderTop="handleHeaderTopFn" />
    <div class="headerBox">
      <img class="logo" :src="headerType.logoSrc" @click="handleGoHome" />
      <el-menu default-active="/" :ellipsis="false" class="menu-nav" mode="horizontal">
        <el-menu-item index="/">
          <span @click="handleGoHome">home</span>
        </el-menu-item>
        <el-menu-item index="/page">
          <div @click="jumpPage">desty page</div>
        </el-menu-item>
        <el-menu-item index="/store">
          <div @click="jumpStore">desty store</div>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="https://desty.page/blog" target="_blank">blog</a>
        </el-menu-item>
        <el-menu-item index="4">
          <a href="https://desty.freshteam.com/jobs" target="_blank">
            {{ $t('ajak.career') }}
          </a>
        </el-menu-item>
        <el-menu-item index="5">
          <a href="https://desty.tawk.help/" target="_blank">
            {{ $t('ajak.help') }}
          </a>
        </el-menu-item>
      </el-menu>
      <div>
        <img
          :src="headerType.logoLeftSrc"
          class="menu-hambuger"
          @click="openMenu"
        />
      </div>
    </div>
    <el-dialog
      v-model="menuDialog"
      :before-close="handleClose"
      custom-class="menu-dialog"
      :modal="false"
    >
      <div slot="title" class="menu-title">
        <img class="menu-logo" :src="headerType.logoSrc" />
      </div>
      <el-menu default-active="/" :ellipsis="false" class="menu" mode="horizontal">
        <el-menu-item index="/">
          <router-link to="/">home</router-link>
        </el-menu-item>
        <el-menu-item index="/page">
          <div @click="jumpPageMobile">desty page</div>
        </el-menu-item>
        <el-menu-item index="/store">
          <div @click="jumpStore">desty store</div>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="https://desty.page/blog" target="_blank">blog</a>
        </el-menu-item>
        <el-menu-item index="4">
          <a href="https://desty.freshteam.com/jobs" target="_blank">
            {{ $t('ajak.career') }}
          </a>
        </el-menu-item>
        <el-menu-item index="5">
          <a href="https://desty.tawk.help/" target="_blank">
            {{ $t('ajak.help') }}
          </a>
        </el-menu-item>
      </el-menu>
    </el-dialog>
  </div>
  </client-only>
</template>
<script setup>
import { ElMenu, ElMenuItem, ElDialog } from 'element-plus';
import HeaderTop from '../HeaderTop/index.vue'

const props = defineProps(['showLogin', 'showTop']);
const emit = defineEmits(['closeSubHeader', 'handleHeaderTop']);
const menuDialog = ref(false);
const { push, resolve } = useRouter();
const config = useRuntimeConfig();

const headerType = {
  logoLeftSrc:
    'https://static.desty.app/desty-app/img/homepage/hamburger-blue.png',
  logoSrc:
    'https://desty-upload-indonesia.oss-ap-southeast-5.aliyuncs.com/desty-app/img/homepage/new-desty-logo.svg',
};

function getDeviceId() {
  const { query = {} } = resolve(location.href);
  const { amp_device_id } = query;
  if (amp_device_id) {
    amplitude.getInstance().setDeviceId(amp_device_id)
  }
  return amplitude.getInstance().getDeviceId(); // existing device id
};
function jumpPage() {
  window.open(
    `${config.VITE_PAGE_URL}?amp_device_id=${getDeviceId()}`,
    '_self'
  )
}
function jumpStore() {
  window.open(
    `${config.VITE_STORE_URL}?amp_device_id=${getDeviceId()}`,
    '_self'
  )
}
function jumpPageMobile() {
  window.open(
    `${config.VITE_PAGE_URL}?amp_device_id=${getDeviceId()}`,
    '_self'
  )
};
function openMenu() {
  menuDialog.value = true
}
function handleClose() {
  menuDialog.value = false
}
function handleHeaderTopFn() {
  emit('handleHeaderTop')
};
function handleGoHome() {
  push('/');
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  .headerBox {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(6px);
  }
  .logo {
    width: 72px;
    height: 30px;
    vertical-align: middle;
    margin-left: 80px;
    cursor: pointer;
  }
  .menu-hambuger {
    width: 18px;
    height: 12px;
    display: none;
  }
  :deep(.menu-nav) {
    border-bottom: none;
    margin-left: 216px;
    .el-menu-item {
      color: #1b2666;
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.02em;
      border-bottom: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      a {
        text-decoration: none;
      }
    }
    .el-menu-item.is-active {
      text-decoration-line: underline;
    }
    .el-menu-item:hover {
      text-decoration-line: underline;
      color: #1b2666;
    }
  }
  @media screen and (max-width: 960px) {
    .headerBox {
      height: 48px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .logo {
      margin-left: 20px;
    }
    .menu-nav {
      display: none;
    }
    .menu-hambuger {
      display: block;
      margin-right: 16px;
    }
  }
}
:deep(.menu-dialog) {
  width: 100%;
  height: 100%;
  margin-top: 0 !important;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  .el-dialog__header {
    padding: 12px 20px;
    display: flex;
  }
  .el-dialog__body {
    padding: 22px 20px;
    .el-menu {
      background: transparent;
    }
    .menu {
      margin-top: 22px;
      display: flex;
      flex-direction: column;
      border-bottom: none;
      align-items: flex-start;
      .el-menu-item {
        border-bottom: none;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        height: 20px;
        padding: 0px;
        margin-bottom: 32px;
        letter-spacing: -0.02em;
        color: #1b2666;
        a {
          text-decoration: none;
        }
      }
      .el-menu-item.is-active {
        text-decoration-line: underline;
      }
      .el-menu-item:hover {
        text-decoration-line: underline;
        color: #1b2666;
      }
    }
  }
  .menu-title {
    .menu-logo {
      width: 64px;
    }
  }
  .el-dialog__headerbtn {
    top: 12px;
    .el-dialog__close {
      color: #1b2666;
      font-size: 24px;
    }
  }
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
