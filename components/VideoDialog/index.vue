<template>
  <el-dialog
    class="video-dialog"
    v-model="visible"
    :before-close="handleClose"
    :close-on-click-modal="false"
  >
    <video-player
      src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      controls
      loop
      ref="video"
    />
  </el-dialog>
</template>

<script setup>
import { ElDialog } from 'element-plus';
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css';


const video = ref(null);
const visible = ref(false);
// 打开
function show() {
  visible.value = true;
}

// 关闭
function handleClose() {
  visible.value = false;
  const videoEle = document.querySelector('#vjs_video_3_html5_api');
  if (videoEle) videoEle.pause();
}

// expose methods
defineExpose({ show });

</script>

<style lang="less">
  .video-dialog .video-js {
    margin: 0 auto;
  }
  .video-dialog .video-js .vjs-big-play-button {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border-radius: 100%;
    text-align: center;
    line-height: 80px;
  }
  @media screen and (max-width: 768px) {
    .video-dialog {
      width: 90% !important;
      .video-js.v-video-player {
        width: 100%;
      }
    }
  }
</style>