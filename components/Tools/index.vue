<template>
  <section class="tools">
    <div class="tools-head">
      <div class="tools-head-title">
        <span>Merchant Tools</span>
        <div class="hr"></div>
      </div>
      <div class="tools-head-des">Built by Desty to connect seamlessly</div>
    </div>
    <div class="tools-content card-deck-js">
      <div
        :class="['tools-content-platform', item.platform]"
        v-for="item in platformList"
        :key="item.platform"
      >
        <div class="card-body">
          <img
            class="card-trademark"
            :src="`https://static.desty.app/desty-homepage/v2/${item.trademark}.svg`"
            alt=""
          />
          <p class="card-title">{{ item.title }}</p>
          <p class="card-des">{{ item.des }}</p>
          <div class="card-more">
            <img
              src="https://static.desty.app/desty-homepage/v2/plus.svg"
              alt=""
            />
            <span>Learn more</span>
          </div>
          <div class="card-menu">
            <div class="card-menu-item">
              <img
                src="https://static.desty.app/desty-homepage/v2/menu.svg"
                alt=""
              />
              <p>{{ item.menu1 }}</p>
            </div>
            <div class="card-menu-item">
              <img
                src="https://static.desty.app/desty-homepage/v2/menu.svg"
                alt=""
              />
              <p>{{ item.menu2 }}</p>
            </div>
          </div>
          <div class="card-backimg">
            <img
              :src="`https://static.desty.app/desty-homepage/v2/${item.backimg}.png`"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const platformList = ref([
  {
    platform: "tools-page",
    trademark: "desty-page-icon",
    title: "One link to consolidate your traffic & sales channels",
    des: "Link-in-bio & Landing Page for Merchants, Creators, Influencers, and everyone!",
    menu1: "Link-in-bio landing page",
    menu2: "Free features for all",
    backimg: "page-assets",
  },
  {
    platform: "tools-store",
    trademark: "desty-store-icon",
    title: "One store to elevate your brand",
    des: "Elevate your brand using our Webstore builder to create your own official website & store",
    menu1: "Online store builder",
    menu2: "No subscription fee",
    backimg: "store-assets",
  },
  {
    platform: "tools-menu",
    trademark: "desty-menu-icon",
    title: "One system to grow your F&B business",
    des: "Ordering food & drinks made easy using our digital ordering solution. Scan, Order, and Pay!",
    menu1: "QR scan ordering system",
    menu2: "No subscription fee",
    backimg: "menu-assets",
  },
  {
    platform: "tools-chat",
    trademark: "desty-chat-icon",
    title: "One system to consolidate all your eCommerce chats",
    des: "Reply all your chats comfortably on one dashboard",
    menu1: "QR scan ordering system",
    menu2: "Design website as you like",
    backimg: "chat-assets",
  },
]);

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
    var offsetTop = 100,
      cardHeight = 300,
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
            (cardHeight - scrolling * 0.03) / cardHeight +
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
.tools {
  box-sizing: border-box;
  width: 1298px;
  margin: 0 auto;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
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
      height: 120px;
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
      top: 80px;
      transform-origin: center top;
      &:nth-child(0) {
        transform: translateY(0px);
      }
      &:nth-child(1) {
        transform: translateY(40px);
      }
      &:nth-child(2) {
        transform: translateY(80px);
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
        height: 108px;
        font-weight: 700;
        font-size: 40px;
        line-height: 54px;
        color: #000000;
        margin: 0;
      }
      .card-des {
        width: 478px;
        height: 60px;
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
      }
      .card-menu {
        margin-top: 45px;
        display: flex;
        align-items: center;
        gap: 94px;
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
        bottom: 0;
        z-index: -1;
      }
    }
    .tools-page {
      background: #fff599;
      .card-more {
        background: #ffdd00;
        border: 2px solid #b79a00;
        box-shadow: 4px 4px 0px #b79a00;
      }
    }
    .tools-store {
      background: #99dfff;
      .card-more {
        background: #0088ff;
        border: 2px solid #004eb7;
        box-shadow: 4px 4px 0px #004eb7;
      }
    }
    .tools-menu {
      background: #ffad99;
      .card-more {
        background: #ff0011;
        border: 2px solid #b7002d;
        box-shadow: 4px 4px 0px #b7002d;
      }
    }
    .tools-chat {
      background: #bcffe1;
      .card-more {
        background: #13d27d;
        border: 2px solid #13d27d;
        box-shadow: 4px 4px 0px #08aa62;
      }
    }
  }
}
</style>
