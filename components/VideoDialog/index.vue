<template>
  <el-dialog
    custom-class="video-dialog"
    v-model="visible"
    :before-close="handleClose"
    :close-on-click-modal="false"
    destroy-on-close
  >
    <iframe width="100%" :height="videoHeight" src="https://www.youtube.com/embed/MkANxeYAhMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </el-dialog>
</template>

<script setup>
import useHome from '~/stores/index';
import { ElDialog } from 'element-plus';

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
  return store.isPhone ? 280 : 315;
});

// expose methods
defineExpose({ show });

</script>

<style lang="less">
  .video-dialog {
    
  }
  @media screen and (max-width: 768px) {
    .video-dialog {
      width: 90%;
    }
  }
</style>