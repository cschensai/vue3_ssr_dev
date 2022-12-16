<template>
  <section class="relations">
    <section class="section featured-on">
      <header class="title">
        <div class="featured-on-title">
          <span>{{ $t("relation.title") }}</span>
          <div class="hr"></div>
        </div>
        <h3 data-aos="fade-up">
          {{ $t("relation.brandsTitle") }} <span class="text-color">Desty</span>
        </h3>
      </header>
      <section class="featured-on-scroll">
        <div class="list">
          <div class="featured-on-scroll-middle">
            <div class="cc rowup" v-for="item in MERCHANT_LIST" :key="item">
              <img :src="item" alt="desty home page" />
            </div>
          </div>
          <div class="featured-on-scroll-middle">
            <div class="cc rowup" v-for="item in MERCHANT_LIST" :key="item">
              <img :src="item" />
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="backed-by">
      <header class="title">
        <h3 data-aos="fade-up">{{ $t("relation.backedTitle") }}</h3>
      </header>
      <section class="wrapper box">
        <nuxt-img
          class="box-5y"
          alt="5y"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/v2/backed-5y.png"
          data-aos="fade-up"
        />
        <nuxt-img
          class="box-cast"
          alt="cast"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/v2/backed-eactenturea.png"
          data-aos="fade-up"
        />
        <nuxt-img
          class="box-squarepeg"
          alt="squarepeg"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/v2/backed-squarepeg.png"
          data-aos="fade-up"
        />
        <nuxt-img
          class="box-fosun"
          alt="fosun"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/v2/backed-fosunrzcapital.png"
          data-aos="fade-up"
        />
        <nuxt-img
          class="box-bace"
          alt="bace"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/v2/backed-bacecapital.png"
          data-aos="fade-up"
        />
        <nuxt-img
          class="box-incapital"
          alt="incapital"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/v2/backed-incapital.png"
          data-aos="fade-up"
        />
        <nuxt-img
          class="box-january"
          alt="january"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/v2/backed-januarycapital.png"
          data-aos="fade-up"
        />
      </section>
    </section>
    <section class="our-partners">
      <header class="title">
        <h3 data-aos="fade-up">{{ $t("relation.featured") }}</h3>
      </header>
      <section class="marquee" data-aos="zoom-in">
        <section class="wrapper">
          <div class="content">
            <div class="marquee-img" v-for="item in FEATURED_LIST" :key="item">
              <img :src="item.img" alt="desty home page" />
            </div>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
import { MERCHANT_LIST, FEATURED_LIST } from "~/constant/index";
</script>

<style lang="less" scoped>
@keyframes slide-data {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-1124px, 0, 0);
    transform: translate3d(-1124px, 0, 0);
  }
}
@keyframes slide-mobile {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-380px, 0, 0);
    transform: translate3d(-380px, 0, 0);
  }
}

.relations {
  width: 100%;
  --line-img-height: 38px;
  --box-img-height: 70px;
  --box-img-width: 197px;
  position: relative;
  transform: translateY(25px);
  .text-color {
    color: #0012b2;
  }
  .wrapper {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    text-align: center;
    h3 {
      display: inline-block;
      position: relative;
      font-weight: 800;
      font-size: 48px;
      line-height: 60px;
      text-align: center;
      font-family: "Plus Jakarta Sans";
      color: #000000;
      margin: 0;
    }
  }
  .featured-on {
    padding-top: 95px;
    background: linear-gradient(
      179.65deg,
      rgba(255, 255, 255, 0) 0.3%,
      #ffffff 84.91%
    );
    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        width: 508px;
        height: 120px;
        font-style: normal;
        text-align: center;
        color: #000000;
        margin: 24px 0 76px 0;
      }
    }
    &-title {
      width: 299px;
      height: 28px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 18px;
      span {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
      }
      .hr {
        width: 160px;
        border-bottom: 1px solid #000000;
      }
    }
    &-scroll {
      width: 1124px;
      height: 98px;
      margin: auto;
      overflow: hidden;
      position: relative;
      &::before,
      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        height: 98px;
        width: 210px;
      }
      &::before {
        left: 0;
        background: linear-gradient(
          90deg,
          #ffffff 36.77%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      &::after {
        left: auto;
        right: 0;
        background: linear-gradient(
          90deg,
          #ffffff 36.77%,
          rgba(255, 255, 255, 0) 100%
        );
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }
      &-middle {
        width: 1124px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0px;
        gap: 80px;
        overflow: hidden;
      }
    }
    .list {
      width: 2248px;
      height: 98px;
      margin: auto;
      position: relative;
      overflow: hidden;
      display: flex;
      .rowup {
        -webkit-animation: 10s slide-data linear infinite normal;
        animation: 10s slide-data linear infinite normal;
        position: relative;
        img {
          height: 32px;
        }
      }
    }
  }
  .backed-by {
    overflow: hidden;
    background: #ffffff;
    .title {
      margin: 71px 0 40px 0;
    }
    .box {
      width: 750px;
      height: 290px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 40px 80px;

      & > img {
        display: inline-block;
        max-height: var(--box-img-height);
        max-width: var(--box-img-width);
        flex: 1;
      }
    }
  }
  .our-partners {
    background: #ffffff;
    padding-top: 60px;
    .title {
      margin-bottom: 40px;
    }
    .marquee {
      width: 100%;
      padding: 0 60px;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      flex-direction: row-reverse;
      padding-bottom: 60px;

      .wrapper {
        width: 100vw;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
          width: 750px;
          height: 180px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px 80px;
          .marquee-img {
            width: 196px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              height: 50%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .relations {
    transform: translateY(20px);
    overflow-x: hidden;
    .title {
      h3 {
        font-size: 30px;
        line-height: 44px;
      }
    }
    .featured-on {
      padding-top: 70px;
      &-title {
        gap: 16px;
        span {
          font-size: 20px;
          line-height: 28px;
        }
        .hr {
          width: 211px;
        }
      }
      .title {
        h3 {
          width: 329px;
          height: 84px;
          margin: 24px auto;
        }
      }
      &-scroll {
        width: 380px;
        height: 67px;
        &::before,
        &:after {
          height: 67px;
          width: 140px;
        }
        .list {
          height: 67px;
          .rowup {
            -webkit-animation: 10s slide-data linear infinite normal;
            animation: 10s slide-data linear infinite normal;
          }
        }
        img {
          height: 35px !important;
        }
        &-middle {
          height: 67px;
          justify-content: flex-start;
        }
      }
    }
    .backed-by {
      .title {
        margin: 33px 0 24px 0;
      }
      .box {
        width: 100%;
        height: 138px;
        gap: 28px 20px;
        padding: 0 16px;
        box-sizing: border-box;
        &-5y {
          width: 92.13px;
          // height: 31.58px;
        }
        &-cast {
          width: 97.55px;
          // height: 17.15px;
        }
        &-squarepeg {
          width: 97.55px;
          // height: 21.48px;
        }
        &-fosun {
          width: 86.71px;
          // height: 17.3px;
        }
        &-bace {
          width: 86.71px;
          // height: 18.74px;
        }
        &-incapital {
          width: 81.29px;
          // height: 21.96px;
        }
        &-january {
          width: 97.55px;
          // height: 8.17px;
        }
      }
    }
    .our-partners {
      z-index: 1;
      padding-bottom: 60px;
      .title {
        margin: 40px 0 24px 0;
      }
      .marquee {
        padding: 0;
        .wrapper {
          .content {
            width: 100%;
            height: 102px;
            gap: 16.82px 0;
          }
        }
        &-img {
          width: 33% !important;
          height: 42.5px !important;
          z-index: 1;
        }
      }
    }
  }
}
</style>
