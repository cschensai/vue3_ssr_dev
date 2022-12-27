<template>
  <client-only>
    <el-dialog
      custom-class="video-dialog"
      v-model="visible"
      :before-close="handleClose"
      :close-on-click-modal="false"
      destroy-on-close
      :show-close="false"
      center
    >
      <iframe
        class="video-dialog-iframe"
        width="100%"
        :height="videoHeight"
        src="https://www.youtube.com/embed/MkANxeYAhMY?autoplay=true"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <nuxt-img
        lazy="loading"
        src="https://static.desty.app/desty-homepage/v2/homepage-close.svg"
        alt="Desty App, Desty Omni, Desty Page, Desty Store, Desty Menu"
        class="desty-close"
        @click="handleClose"
      />
    </el-dialog>
  </client-only>
</template>

<script setup>
import useHome from "~/stores/index";
import { ElDialog, ElIcon } from "element-plus";

const store = useHome();
const visible = ref(false);
// 打开
function show() {
  visible.value = true;
}

// 关闭
function handleClose() {
  visible.value = false;
}

// 视频高度
const videoHeight = computed(() => {
  return store.isPhone ? 280 : 600;
});

// expose methods
defineExpose({ show });
</script>

<style lang="less">
.el-overlay {
  .el-overlay-dialog {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.video-dialog {
  width: 940px;
  height: 600px;
  position: relative;
  border-radius: 20px;
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 0;
  }
  .desty-close {
    position: absolute;
    width: 40px;
    height: 38px;
    top: -66px;
    right: 0;
    cursor: pointer;
  }
  &-iframe {
    border-radius: 20px;
  }
}
@media screen and (max-width: 768px) {
  .video-dialog {
    width: calc(100% - 48px);
    height: 214px;
    margin-top: 150px;
    .desty-close {
      position: absolute;
      width: 24px;
      height: 22px;
      top: -39px;
      right: 0;
    }
  }
}
</style>
