<template>
  <div class="desty-platform">
    <section class="tools">
      <div class="tools-head">
        <div class="tools-head-title">
          <span>{{ $t("tools.des") }}</span>
          <div class="hr"></div>
        </div>
        <div class="tools-head-des">
          {{ $t("tools.title1") }} <span class="text-color">Desty</span>
          {{ $t("tools.title2") }}
        </div>
      </div>
      <div class="tools-content card-deck-js">
        <div
          :class="['tools-content-platform', item.platform]"
          v-for="item in PLATFORM_LIST"
          :key="item.platform"
        >
          <div class="card-body">
            <img
              class="card-trademark"
              :src="`https://static.desty.app/desty-homepage/v2/${item.trademark}.svg`"
              :alt="item.name"
            />
            <p class="card-title">{{ $t(item.title) }}</p>
            <p class="card-des">{{ $t(item.des) }}</p>
            <div class="card-more" @click="handleClinkMore($t(item.link))">
              <img
                src="https://static.desty.app/desty-homepage/v2/plus.svg"
                :alt="item.name"
              />
              <span>{{ $t("tools.more") }}</span>
            </div>
            <div class="card-menu">
              <div class="card-menu-item">
                <img
                  src="https://static.desty.app/desty-homepage/v2/menu.svg"
                  :alt="item.name"
                />
                <p>{{ $t(item.menu1) }}</p>
              </div>
              <div class="card-menu-item">
                <img
                  src="https://static.desty.app/desty-homepage/v2/menu.svg"
                  :alt="item.name"
                />
                <p>{{ $t(item.menu2) }}</p>
              </div>
            </div>
            <div class="card-backimg">
              <img
                :src="`https://static.desty.app/desty-homepage/v2/${item.backimg}.png`"
                :alt="item.name"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="desty-platform-bg"></div>
    <div class="desty-platform-white">
      <div class="desty-white-1"></div>
      <div class="desty-white-2"></div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { PLATFORM_LIST } from "~/constant/index";

const { t } = useI18n();

const handleClinkMore = (link) => {
  window.location.href = link;
  amplitude
    .getInstance()
    .logEvent("general: click merchant tools - desty.app", {
      click_learn_more_swiper: false,
      is_logged_in: false,
    });
};

onBeforeMount(() => {
  var StackCards = function (element) {
    this.element = element;
    this.items = this.element.getElementsByClassName("tools-content-platform");
    this.scrollingListener = false;
    this.scrolling = false;
    initStackCardsEffect(this);
  };

  function initStackCardsEffect(element) {
    // use Intersection Observer to trigger animation
    var observer = new IntersectionObserver(stackCardsCallback.bind(element));
    observer.observe(element.element);
  }

  function stackCardsCallback(entries) {
    // Intersection Observer callback
    if (entries[0].isIntersecting) {
      // cards inside viewport - add scroll listener
      if (this.scrollingListener) return; // listener for scroll event already added
      stackCardsInitEvent(this);
    } else {
      // cards not inside viewport - remove scroll listener
      if (!this.scrollingListener) return; // listener for scroll event already removed
      window.removeEventListener("scroll", this.scrollingListener);
      this.scrollingListener = false;
    }
  }

  function stackCardsInitEvent(element) {
    element.scrollingListener = stackCardsScrolling.bind(element);
    window.addEventListener("scroll", element.scrollingListener);
  }

  function stackCardsScrolling() {
    if (this.scrolling) return;
    this.scrolling = true;
    window.requestAnimationFrame(animateStackCards.bind(this));
  }

  function animateStackCards() {
    var top = this.element.getBoundingClientRect().top;
    var offsetTop = 450,
      cardHeight = 600,
      marginY = 40;
    for (var i = 0; i < this.items.length; i++) {
      // cardTop/cardHeight/marginY are the css values for the card top position/height/Y offset
      var scrolling = offsetTop - top - i * (cardHeight + marginY);
      // debugger;
      if (scrolling > 0) {
        // card is fixed - we can scale it down
        this.items[i].setAttribute(
          "style",
          "transform: translateY(" +
            marginY * i +
            "px) scale(" +
            (cardHeight - scrolling * 0.02) / cardHeight +
            ");"
        );
      }
    }

    this.scrolling = false;
  }
  var stackCards = document.getElementsByClassName("card-deck-js");
  var intersectionObserverSupported =
    "IntersectionObserver" in window && "IntersectionObserverEntry" in window;

  if (stackCards.length > 0 && intersectionObserverSupported) {
    for (var i = 0; i < stackCards.length; i++) {
      new StackCards(stackCards[i]);
    }
  }
});
</script>

<style lang="less" scoped>
.desty-platform {
  width: 100%;
  position: relative;
  &-bg {
    width: 100%;
    height: 985px;
    position: absolute;
    top: -438px;
    z-index: -1;
    background-image: url(https://static.desty.app/desty-homepage/v2/tools-bg-pc.png);
    background-size: cover;
  }
  &-white {
    width: 912px;
    height: 787.59px;
    position: absolute;
    left: 0;
    top: 700px;
    z-index: -1;
    .desty-white-1 {
      position: absolute;
      width: 668.93px;
      height: 579.4px;
      background: rgba(255, 255, 255, 0.52);
      border-radius: 48px;
      transform: matrix(0.87, -0.38, 0.54, 0.91, 0, 0);
      left: -377px;
      top: 590.11px;
    }
    .desty-white-2 {
      position: absolute;
      left: -368.26px;
      top: 574.02px;
      width: 682.55px;
      height: 564.78px;
      background: #ffffff;
      border-radius: 48px;
      transform: matrix(0.96, -0.22, 0.31, 0.97, 0, 0);
    }
  }
}
.tools {
  box-sizing: border-box;
  width: 1280px;
  margin: 0 auto;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  margin-top: 120px;
  .text-color {
    color: #000986;
  }
  &-head {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 60px;
    &-title {
      display: flex;
      align-items: center;
      gap: 18px;
      span {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
      }
      .hr {
        width: 160px;
        border-bottom: 1px solid #000000;
      }
    }
    &-des {
      width: 522px;
      font-weight: 800;
      font-size: 48px;
      line-height: 60px;
      color: #000000;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 120px;
    &-platform {
      width: 100%;
      height: 576px;
      border-radius: 24px;
      position: sticky;
      top: 120px;
      transform-origin: center top;
      &:nth-child(1) {
        transform: translateY(0px);
      }
      &:nth-child(2) {
        transform: translateY(80px);
      }
      &:nth-child(3) {
        transform: translateY(120px);
      }
      &:nth-child(4) {
        transform: translateY(160px);
      }
    }
    .card-body {
      font-family: "Plus Jakarta Sans";
      font-style: normal;
      padding: 40px 40px 60px 40px;
      box-sizing: border-box;
      height: 100%;
      position: relative;
      .card-trademark {
        height: 60px;
        margin-bottom: 60px;
      }
      .card-title {
        width: 551px;
        font-weight: 700;
        font-size: 40px;
        line-height: 54px;
        color: #000000;
        margin: 0;
      }
      .card-des {
        width: 478px;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #000000;
        margin: 0;
        margin-top: 24px;
        margin-bottom: 28px;
      }
      .card-more {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        gap: 12px;
        width: 156px;
        height: 56px;
        border-radius: 12px;
        cursor: pointer;
      }
      .card-menu {
        margin-top: 45px;
        display: flex;
        align-items: center;
        gap: 48px;
        &-item {
          display: flex;
          gap: 12px;
          height: 40px;
          img {
            width: 40px;
            height: 40px;
          }
          p {
            font-weight: 500;
            font-size: 18px;
            line-height: 40px;
            color: #000000;
            margin: 0;
          }
        }
      }
      .card-backimg {
        position: absolute;
        right: 0;
        bottom: -5px;
        z-index: -1;
        img {
          border-radius: 24px;
        }
      }
    }
    .tools-page {
      background: #fff599;
      .card-more {
        background: #ffdd00;
        border: 2px solid #b79a00;
        box-shadow: 4px 4px 0px #b79a00;
        &:hover {
          background: #f4bb2c;
          border: 2px solid #ffdd00;
          box-shadow: 4px 4px 0px #ffdd00;
        }
      }
    }
    .tools-store {
      background: #99dfff;
      .card-more {
        background: #0088ff;
        border: 2px solid #004eb7;
        box-shadow: 4px 4px 0px #004eb7;
        &:hover {
          background: #004eb7;
          border: 2px solid #0088ff;
          box-shadow: 4px 4px 0px #0088ff;
        }
      }
    }
    .tools-menu {
      background: #ffad99;
      .card-des {
        width: 542px;
      }
      .card-more {
        background: #ff0011;
        border: 2px solid #b7002d;
        box-shadow: 4px 4px 0px #b7002d;
        &:hover {
          background: #b7002d;
          border: 2px solid #ff0011;
          box-shadow: 4px 4px 0px #ff0011;
        }
      }
    }
    .tools-chat {
      background: #bcffe1;
      .card-title {
        width: 611px;
      }
      .card-more {
        background: #13d27d;
        border: 2px solid #13d27d;
        box-shadow: 4px 4px 0px #08aa62;
        &:hover {
          background: #08aa62;
          border: 2px solid #13d27d;
          box-shadow: 4px 4px 0px #13d27d;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .desty-platform {
    &-bg {
      height: 743px;
      top: -285px;
      background-image: url(https://static.desty.app/desty-homepage/v2/tools-bg-moble.png);
    }
    &-white {
      display: none;
    }
  }
  .tools {
    box-sizing: border-box;
    width: 100%;
    padding: 0 16px;
    &-head {
      gap: 16px;
      margin-bottom: 40px;
      &-title {
        gap: 16px;
        span {
          font-size: 20px;
          line-height: 28px;
          white-space: nowrap;
        }
        .hr {
          width: 228px;
        }
      }
      &-des {
        width: 100%;
        font-size: 30px;
        line-height: 38px;
      }
    }
    &-content {
      &-platform {
        height: 706px;
        top: 80px;
      }
      .card-body {
        padding: 20px 16px 0 16px;
        overflow: hidden;
        .card-trademark {
          height: 40px;
          margin-bottom: 20.4px;
        }
        .card-title {
          width: 266px;
          font-weight: 700;
          font-size: 28px;
          line-height: 42px;
        }
        .card-des {
          width: 100%;
          font-size: 16px;
          line-height: 26px;
          margin: 20px 0 24px 0;
        }
        .card-more {
          width: 140px;
          height: 52px;
        }
        .card-menu {
          display: none;
        }
        .card-backimg {
          // width: 100%;
          height: 300px;
          bottom: 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .tools-chat {
        .card-backimg {
          bottom: -32px;
        }
      }
    }
  }
}
</style>
