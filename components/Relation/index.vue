<template>
  <section class="relations">
    <section class="section featured-on">
      <header class="title">
        <div class="featured-on-title">
          <span>Merchants</span>
          <div class="hr"></div>
        </div>
        <h3 data-aos="fade-up">
          Some of the brands who chose <span class="text-color">Desty</span>
        </h3>
      </header>
      <section class="featured-on-scroll">
        <div class="list">
          <div class="featured-on-scroll-middle">
            <div class="cc rowup" v-for="item in merchant" :key="item">
              <img :src="item" />
            </div>
          </div>
          <div class="featured-on-scroll-middle">
            <div class="cc rowup" v-for="item in merchant" :key="item">
              <img :src="item" />
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="backed-by">
      <header class="title">
        <h3 data-aos="fade-up">Backed by</h3>
      </header>
      <section class="wrapper box">
        <nuxt-img
          alt="5y"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/5y.png?x-oss-process=style/img-webp"
          data-aos="fade-up"
        />
        <nuxt-img
          alt="cast"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/cast.png?x-oss-process=style/img-webp"
          data-aos="fade-up"
        />
        <nuxt-img
          alt="squarepeg"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/squarepeg.png?x-oss-process=style/img-webp"
          data-aos="fade-up"
        />
        <nuxt-img
          alt="fosun"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/fosun.png?x-oss-process=style/img-webp"
          data-aos="fade-up"
        />
        <nuxt-img
          alt="bace"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/bace.png?x-oss-process=style/img-webp"
          data-aos="fade-up"
        />
        <nuxt-img
          alt="incapital"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/incapital.png?x-oss-process=style/img-webp"
          data-aos="fade-up"
        />
        <nuxt-img
          alt="january"
          loading="lazy"
          src="https://static.desty.app/desty-homepage/january.png?x-oss-process=style/img-webp"
          data-aos="fade-up"
        />
      </section>
    </section>
    <section class="our-partners">
      <header class="title">
        <h3 data-aos="fade-up">As Featured On</h3>
      </header>
      <section class="marquee" data-aos="zoom-in">
        <section class="wrapper">
          <div class="content">
            <div class="marquee-img" v-for="item in featured" :key="item">
              <img :src="item" />
            </div>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const merchant = ref([
  "https://static.desty.app/desty-homepage/techinasia.png?x-oss-process=style/img-webp",
  "https://static.desty.app/desty-homepage/dailysocial.png?x-oss-process=style/img-webp",
  "https://static.desty.app/desty-homepage/e27.png?x-oss-process=style/img-webp",
  "https://static.desty.app/desty-homepage/liputan6.png?x-oss-process=style/img-webp",
  "https://static.desty.app/desty-homepage/dealstreetasia.png?x-oss-process=style/img-webp",
  "https://static.desty.app/desty-homepage/indotelk.png?x-oss-process=style/img-webp",
]);
const partners = ref([
  "https://static.desty.app/desty-homepage/ovo.png",
  "https://static.desty.app/desty-homepage/gopay.png",
  "https://static.desty.app/desty-homepage/shopee.png",
  "https://static.desty.app/desty-homepage/bca.png",
  "https://static.desty.app/desty-homepage/bankbri.png",
  "https://static.desty.app/desty-homepage/bni.png",
  "https://static.desty.app/desty-homepage/mandri.png",
  "https://static.desty.app/desty-homepage/permatabank.png",
  "https://static.desty.app/desty-homepage/gosend.png",
  "https://static.desty.app/desty-homepage/grab.png",
  "https://static.desty.app/desty-homepage/anteraja.png",
  "https://static.desty.app/desty-homepage/sicepa.png",
  "https://static.desty.app/desty-homepage/jt.png",
  "https://static.desty.app/desty-homepage/lionparcel.png",
  "https://static.desty.app/desty-homepage/ninja.png",
  "https://static.desty.app/desty-homepage/mahana.png",
  "https://static.desty.app/desty-homepage/jne.png",
]);

const featured = ref([
  "https://static.desty.app/desty-homepage/v2/techinasia.png",
  "https://static.desty.app/desty-homepage/v2/dailysocial.png",
  "https://static.desty.app/desty-homepage/v2/liputan.png",
  "https://static.desty.app/desty-homepage/v2/e27.png",
  "https://static.desty.app/desty-homepage/v2/indotelk.png",
  "https://static.desty.app/desty-homepage/v2/dealstreetasia.png",
]);
</script>

<style lang="less" scoped>
0% {
  transform: translateY(0%);
}
100% {
  transform: translateY(-51%); //这里不是-100%！
}
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
  padding-top: 120px;
  --line-img-height: 38px;
  --box-img-height: 70px;
  --box-img-width: 197px;
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
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 80px;
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
    background-color: #fff;
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
      }
    }
  }
  .our-partners {
    .title {
      margin: 60px 0 40px 0;
    }
    .marquee {
      width: 100%;
      padding: 0 60px;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      flex-direction: row-reverse;
      padding-bottom: 35px;

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
            height: 70px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .relations {
    padding-top: 90px;
    .title {
      h3 {
        font-size: 30px;
        line-height: 44px;
      }
    }
    .featured-on {
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
        height: 118px;
        gap: 28px 20px;
        img {
          width: 100px;
          height: 22px;
        }
      }
    }
    .our-partners {
      z-index: 1;
      padding-bottom: 35px;
      .title {
        margin: 40px 0 24px 0;
      }
      .marquee {
        padding: 0;
        .wrapper {
          .content {
            width: 100%;
            height: 102px;
            gap: 0;
          }
        }
        &-img {
          height: 42.5px !important;
          z-index: 1;
        }
      }
    }
  }
}
</style>
