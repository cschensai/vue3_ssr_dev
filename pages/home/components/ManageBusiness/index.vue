<template>
  <div class="manage-business">
    <div class="left">
      <div class="shadow-bg"></div>
      <h1 class="main-title">
        <template v-if="locale === 'en'">
          <div>
            {{ $t('manageBusiness.preMainTitle') }}
            <span class="strong">{{ $t('manageBusiness.middleMainTitle') }}</span>
          </div>
          <div>
            {{ $t('manageBusiness.centerMainTitle') }}
            <span class="strong">{{ $t('manageBusiness.nextMainTitle') }}</span>
          </div>
        </template>
        <template v-else>
          <div>
            <span class="strong">{{ $t('manageBusiness.preMainTitle') }}</span>
            {{ $t('manageBusiness.middleMainTitle') }}
          </div>
          <div>
            <span class="strong">{{ $t('manageBusiness.centerMainTitle') }}</span>
          </div>
        </template>
      </h1>
      <div class="sub-title">{{ $t('manageBusiness.subTitle') }}</div>
      <div class="action-box">
        <div class="start-now" @click="handleStartNow">{{ $t('manageBusiness.startNow') }}</div>
        <div class="watch-video" @click="handleWatchVideo">
          <img class="video-play" src="https://static.desty.app/desty-homepage/v2/video-play.svg" alt="desty home page" />
          {{ $t('manageBusiness.watchVideo') }}
        </div>
      </div>
      <ScrollBar v-if="!store.isPhone" />
    </div>
    <div class="right">
      <div class="shadow-bg"></div>
      <client-only>
        <lottie-animation
          autoplay
          loop
          :animationData="manageBusinessJson"
        />
      </client-only>
    </div>
  </div>
  <client-only>
  <VideoDialog ref="videoDialog" />
  </client-only>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import useHome from '~/stores/index';
import ScrollBar from '~/components/ScrollBar/index.vue';
import VideoDialog from '~/components/VideoDialog/index.vue';
import manageBusinessJson from '~/assets/animations/manageBusiness.json';


const store = useHome();
const { locale } = useI18n();
const videoDialog = ref(null);
const config = useRuntimeConfig();

function handleWatchVideo() {
  videoDialog.value.show();
}

// start now action
function handleStartNow() {
  location.href = `${config.VITE_OMNI_URL}/register`;
}

</script>

<style lang="less" scoped>
.manage-business {
  max-width: 1282px;
  margin: 109px auto 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #000;
  padding-top: 70px;
  .left {
    .shadow-bg {
      position: absolute;
      width: 826px;
      height: 854px;
      left: -594px;
      top: 384px;
      background: linear-gradient(151.45deg, rgba(12, 27, 184, 0.23) -4.34%, rgba(12, 27, 184, 0.2) 106.2%);
      filter: blur(200px);
      transform: rotate(10.49deg);
    }
    .main-title {
      font-weight: 400;
      line-height: 84px;
      color: #333;
      max-width: 559px;
      font-size: 64px;
      margin: 0;
      .strong {
        font-weight: 700;
      }
    }
    .sub-title {
      margin-top: 24px;
      font-size: 24px;
      line-height: 36px;
      color: #000;
      max-width: 289px;
    }
    .action-box {
      margin: 30px 0 80px;
      display: flex;
      align-items: center;
      .start-now {
        cursor: pointer;
        width: 207px;
        height: 56px;
        background-color: #0C1BB8;
        border: 2px solid #0C1BB8;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        margin-right: 60px;
      }
      .watch-video {
        cursor: pointer;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: -0.01em;
        color: #051189;
        display: flex;
        align-items: center;
        .video-play {
          margin-right: 12px;
          width: 36px;
          height: 36px;
        }
      }
    }
  }
  .right {
    .shadow-bg {
      position: absolute;
      width: 826px;
      height: 854px;
      right: -594px;
      top: -653px;
      background: linear-gradient(151.45deg, rgba(12, 27, 184, 0.23) -4.34%, rgba(12, 27, 184, 0.2) 106.2%);
      filter: blur(200px);
      transform: rotate(10.49deg);
    }
  }
}
@media screen and (max-width: 768px) {
  .manage-business {
    border-top: none;
    padding-top: 0;
    margin-top: 58px;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    .left {
      padding: 16px;
      box-sizing: border-box;
      .shadow-bg {
        width: 448px;
        height: 464px;
        left: -300px;
        top: 538px;
      }
      .main-title {
        font-size: 40px;
        line-height: 56px;
        color: #333;
        max-width: 100%;
      }
      .sub-title {
        margin-top: 20px;
        font-size: 18px;
        line-height: 32px;
        color: #000;
        max-width: 100%;
      }
      .action-box {
        margin: 24px 0 0;
        .start-now {
          width: 140px;
          height: 52px;
          font-size: 16px;
        }
        .watch-video {
        font-size: 16px;
        .video-play {
          margin-right: 10px;
          width: 28px;
          height: 28px;
        }
      }
      }
    }
    .right {
      .shadow-bg {
       width: 432px;
        height: 446px;
        right: -360px;
        top: -192px;
      }
    }
  }
  
}
</style>