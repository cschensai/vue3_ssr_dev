<template>
  <div class="dashboard-list">
   <header class="feature-title">
      <div class="featured-on-title">
        {{ $t('dashboardList.featureTitle') }}
        <div class="hr"></div>
      </div>
      <h3 class="main-title">{{ $t('dashboardList.mainTitle') }} <span class="color-text">{{ $t('dashboardList.colorTitle') }}</span></h3>
    </header>
    <div class="dashboard-box">
      <div v-for="(item, index) in DASHBOARD_LIST" class="dashboard-item" :key="index">
        <div class="text-box">
          <h3 class="title">{{ $t(item.title) }}</h3>
          <div class="desc">{{ $t(item.desc) }}</div>
        </div>
        <nuxt-img lazy="loading" class="card-img" :src="`https://static.desty.app/desty-homepage/v2/${item.src}.png`" alt="Desty App, Desty Omni, Desty Page, Desty Store, Desty Menu" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { DASHBOARD_LIST } from '~/constant/index';

</script>

<style lang="less" scoped>
.dashboard-list {
  max-width: 1282px;
  margin: 0 auto;
  .feature-title {
    .featured-on-title {
      font-size: 24px;
      color: #000;
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      .hr {
        width: 160px;
        height: 1px;
        background-color: #000;
        margin-left: 18px;
      }
    }
    .main-title {
      width: 539px;
      font-weight: 800;
      font-size: 48px;
      line-height: 68px;
      color: #000;
      margin: 0;
      .color-text {
        color: #0012B2;
      }
    }
  }
  .dashboard-box {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    .dashboard-item {
      position: relative;
      flex: 1;
      height: 416px;
      background-color: #CDFDEC;
      border-radius: 16px;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &:first-of-type {
        margin-left: 0;
      }
      .text-box {
        padding: 20px;
        box-sizing: border-box;
        .title {
          max-width: 136px;
          font-weight: 800;
          font-size: 28px;
          line-height: 35px;
          color: #000;
          margin: 0;
        }
        .desc {
          margin-top: 20px;
          font-size: 16px;
          line-height: 26px;
          color: #000;
        }
      }
      .card-img {
        bottom: 0;
        left: -1px;
        position: absolute;
        width: 300px;
        height: 260px;
        border-end-start-radius: 16px;
      }
      // &:nth-child(2n+1) {
      //   .card-img {
      //     width: 259px;
      //   }
      // }
    }
  }
}
@media screen and (max-width: 768px) {
  .dashboard-list {
    max-width: 100%;
    margin: -40px auto 0;
    .feature-title {
      padding: 0 16px 16px;
      box-sizing: border-box;
      .featured-on-title {
        font-size: 20px;
        color: #000;
        margin-bottom: 16px;
        .hr {
          flex: 1;
        }
      }
      .main-title {
        width: 327px;
        font-size: 30px;
        line-height: 38px;
        .color-text {
          color: #0012B2;
        }
      }
    }
    .dashboard-box {
      margin-top: 24px;
      overflow-x: auto;
      padding: 0 16px;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none;
      }
      .dashboard-item {
        flex: unset;
        flex-shrink: 0;
        width: 242px;
        height: 376px;
        margin-left: 16px;
        border-radius: 13.9178px;
        &:first-of-type {
          margin-left: 0;
        }
        .text-box {
          padding: 16px;
          .title {
            width: 100%;
            font-weight: 800;
            font-size: 24px;
            line-height: 30px;
          }
          .desc {
            margin-top: 16px;
            font-size: 14px;
            line-height: 24px;
          }
        }
        .card-img {
          width: 264px;
          height: 232px;
          border-end-start-radius: 6px;
          border-radius: 13.9178px;
        }
        // &:nth-child(2n+1) {
        //   .card-img {
        //     width: 216px;
        //   }
        // }
      }
    }
  }
  }
</style>