<template>
  <div class="manage-business">
    <div class="left">
      <div class="shadow-bg"></div>
      <h1 class="main-title">
        <div>
          {{ $t('manageBusiness.preMainTitle') }}
          <span class="strong">{{ $t('manageBusiness.middleMainTitle') }}</span>
        </div>
        <div>
          {{ $t('manageBusiness.centerMainTitle') }}
          <span class="strong">{{ $t('manageBusiness.nextMainTitle') }}</span>
        </div>
      </h1>
      <div class="sub-title">Used by 1 million+ users in Indonesia</div>
      <div class="action-box">
        <div class="start-now">Start now</div>
        <div class="watch-video">
          <img class="video-play" src="https://static.desty.app/desty-homepage/v2/video-play.svg" alt="desty home page" />
          Watch video
        </div>
      </div>
    </div>
    <div class="right">
      <div class="shadow-bg"></div>
      asdad
    </div>
  </div>
</template>

<script setup>
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
      z-index: -1;
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
      margin-top: 30px;
      display: flex;
      align-items: center;
      .start-now {
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
      z-index: -1;
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
        width: 432px;
        height: 446px;
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
        margin-top: 24px;
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
  }
  
}
</style>