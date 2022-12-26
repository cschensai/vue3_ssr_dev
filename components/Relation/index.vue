<template>
  <section class="relations">
    <section class="section featured-on">
      <header class="title">
        <div class="featured-on-title">
          <span>{{ $t("relation.title") }}</span>
          <div class="hr"></div>
        </div>
        <h3 data-aos="fade-up">
          <span class="first-row">
            {{ $t("relation.brandsTitle1") }}
          </span>
          {{ $t("relation.brandsTitle2") }}<span class="text-color">Desty</span>
        </h3>
      </header>
      <section class="featured-on-scroll">
        <div class="featured-on-content">
          <div class="list">
            <div class="featured-on-scroll-middle">
              <div class="cc rowup" v-for="item in MERCHANT_LIST" :key="item">
                <img
                  :src="item.img"
                  alt="Desty App, Desty Omni, Desty Page, Desty Store, Desty Menu"
                  :class="item.class"
                />
              </div>
            </div>
            <div class="featured-on-scroll-middle">
              <div class="cc rowup" v-for="item in MERCHANT_LIST" :key="item">
                <img
                  :src="item.img"
                  alt="Desty App, Desty Omni, Desty Page, Desty Store, Desty Menu"
                  :class="item.class"
                />
              </div>
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
          v-for="backed in BACKED_LIST"
          :key="backed.alt"
          :class="backed.class"
          :alt="backed.alt"
          loading="lazy"
          :src="backed.img"
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
              <img :src="item.img" alt="Desty App, Desty Omni, Desty Page, Desty Store, Desty Menu" :class="item.class" />
            </div>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
import { MERCHANT_LIST, FEATURED_LIST, BACKED_LIST } from "~/constant/index";
</script>

<style lang="less" scoped>
@keyframes slide-data {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-2234px, 0, 0);
    transform: translate3d(-2234px, 0, 0);
  }
}
@keyframes slide-mobile {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-1288px, 0, 0);
    transform: translate3d(-1288px, 0, 0);
  }
}

.relations {
  width: 100%;
  --line-img-height: 38px;
  --box-img-height: 70px;
  --box-img-width: 197px;
  position: relative;
  transform: translateY(25px);
  .first-row {
    display: block;
  }
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
      width: 100%;
      height: 98px;
      margin: auto;
      position: relative;
      &::before,
      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        height: 98px;
        width: 408px;
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
        width: 2174px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0px;
        gap: 60px;
        overflow: hidden;
        -webkit-animation: 25s slide-data linear infinite normal;
        animation: 25s slide-data linear infinite normal;
      }
    }
    &-content {
      width: 1124px;
      overflow: hidden;
      margin: 0 auto;
    }
    .list {
      width: 4408px;
      height: 98px;
      margin: auto;
      position: relative;
      overflow: hidden;
      display: flex;
      gap: 60px;
      .rowup {
        position: relative;
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
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      gap: 78px 80px;
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
            .featured-techinasia {
              width: 142.82px;
              height: 35.7px;
            }
            .featured-dailysocial {
              width: 133.89px;
              height: 38.08px;
            }
            .featured-liputan6 {
              width: 124.37px;
              height: 24.65px;
            }
            .featured-e27 {
              width: 45.23px;
              height: 24.46px;
            }
            .featured-indotelk {
              width: 106.52px;
              height: 25.73px;
            }
            .featured-dealstreetasia {
              width: 37.62px;
              height: 35.7px;
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
          margin-bottom: 20px;
        }
      }
      &-scroll {
        width: 100%;
        height: 67px;
        &::before,
        &:after {
          height: 67px;
          width: 140px;
          background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
        }
        .list {
          width: 2540px;
          height: 67px;
          gap: 28px;
        }
        &-middle {
          width: 1256px;
          height: 67px;
          justify-content: flex-start;
          gap: 28px;
          -webkit-animation: 25s slide-mobile linear infinite normal;
          animation: 25s slide-mobile linear infinite normal;
          .rowup {
            display: flex;
            align-items: center;
            .backed-electronic {
              width: 51.96px;
              height: 36.23px;
            }
            .backed-biotalk {
              width: 30.77px;
              height: 43.46px;
            }
            .backed-mirael {
              width: 47.17px;
              height: 47.17px;
            }
            .backed-fine {
              width: 36.92px;
              height: 36.92px;
            }
            .backed-little {
              width: 50.1px;
              height: 29.01px;
            }
            .backed-haluu {
              width: 41.02px;
              height: 41.02px;
            }
            .backed-chubby {
              width: 35.55px;
              height: 28.71px;
            }
            .backed-nepia {
              width: 64.95px;
              height: 25.98px;
            }
            .backed-dobujack {
              width: 41.02px;
              height: 41.02px;
            }
            .backed-moxie {
              width: 41.02px;
              height: 41.02px;
            }
            .backed-astoria {
              width: 50.59px;
              height: 41.02px;
            }
            .backed-kopi {
              width: 56.06px;
              height: 34.87px;
            }
            .backed-belle {
              width: 41.02px;
              height: 41.02px;
            }
            .backed-eastern {
              width: 51.96px;
              height: 40.34px;
            }
            .backed-bakmi {
              width: 37.17px;
              height: 27.35px;
            }
            .backed-villo {
              width: 41.02px;
              height: 41.02px;
            }
            .backed-nako {
              width: 25.3px;
              height: 67px;
            }
            .backed-filosofi {
              width: 35.55px;
              height: 32.13px;
            }
          }
        }
      }
    }
    .backed-by {
      .title {
        margin: 33px 0 24px 0;
      }
      .box {
        width: 100%;
        height: 118px;
        gap: 24px 20px;
        padding: 0 16px;
        box-sizing: border-box;
        justify-content: space-around;
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
      padding-top: 40px;
      .title {
        margin-bottom: 24px;
      }
      .marquee {
        padding: 0;
        .wrapper {
          .content {
            width: 100%;
            height: 102px;
            gap: 16.82px 0;
            .marquee-img {
              width: 33% !important;
              height: 42.5px !important;
              z-index: 1;
              .featured-techinasia {
                width: 86.86px;
                height: 21.72px;
              }
              .featured-dailysocial {
                width: 81.43px;
                height: 23.16px;
              }
              .featured-liputan6 {
                width: 75.64px;
                height: 14.99px;
              }
              .featured-e27 {
                width: 27.51px;
                height: 14.88px;
              }
              .featured-indotelk {
                width: 64.78px;
                height: 15.65px;
              }
              .featured-dealstreetasia {
                width: 22.88px;
                height: 21.72px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
