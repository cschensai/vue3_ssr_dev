<template>
  <client-only>
    <div class="chat-box">
      <div
        :class="['float-icon zendesk-box', { hidefloat: zenShow }]"
        @click="handleCustomerService"
      >
        <div class="zendesk">
          <div :class="['gHHEeh', { hideHHEeh: zenShow }]">
            <svg
              position="right"
              class="sc-1k07fow-1 cbnSms"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z"
                id="🎨icon-fill"
                transform="translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000) "
              ></path>
            </svg>
          </div>
          <div
            :class="['fxifZC', { hideFxifZC: !zenShow }]"
            @click.stop="closeWidget"
            v-loading="zenShow"
          >
            <svg
              class="sc-1k07fow-0 iHCBIr"
              width="88px"
              height="88px"
              viewBox="0 0 88 88"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <filter
                  x="-47.9%"
                  y="-47.9%"
                  width="195.8%"
                  height="195.8%"
                  filterUnits="objectBoundingBox"
                  id="filter-1"
                >
                  <feOffset
                    dx="-4"
                    dy="0"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feGaussianBlur
                    stdDeviation="10"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  ></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0.141176471   0 0 0 0 0.141176471   0 0 0 0 0.141176471  0 0 0 0.2 0"
                    type="matrix"
                    in="shadowBlurOuter1"
                    result="shadowMatrixOuter1"
                  ></feColorMatrix>
                  <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <g
                id="🦴Anatomy"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="btn/chat-button"
                  filter="url(#filter-1)"
                  transform="translate(-4.000000, -4.000000)"
                  fill="#FFFFFF"
                >
                  <g id="⚡️icon" transform="translate(38.000000, 38.000000)">
                    <polygon
                      id="Shape"
                      points="17.2338475 0.833333333 19.1666667 2.76615247 11.9325273 10 19.1666667 17.2338475 17.2338475 19.1666667 10 11.9325273 2.76615247 19.1666667 0.833333333 17.2338475 8.06610603 10 0.833333333 2.76615247 2.76615247 0.833333333 10 8.06610603"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=628995533789&text=Nama%3A%0APosisi%3A%20%0ACompany%20name%3A%0AInstagram%20company%3A%20%0ATotal%20transaksi%20(pilih%20salah%20satu)%3A%0AA)%20%3C50%20orders%2Fday%20%0AB)%2051-299%20orders%2Fday%0AC)%20%3E300%20orders%2Fday"
        target="_blank"
        class="float-icon"
      >
        <nuxt-img
          src="https://static.desty.app/desty-landing-page/whats-app.png"
          class="whatsappIcon"
          lazy="loading"
        />
      </a>
    </div>
  </client-only>
</template>

<script setup>
const zenShow = ref(false);  // zen弹框是否是打开状态
const loadingZen = ref(false); //  加载zendeskapi

// 加载js脚本
function importScript() {
  function loadError(oError) {
    throw new URIError(`The script ${oError.target.src} is not accessible.`);
  }
  return function (sSrc, id, fOnload) {
    const oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.onerror = loadError;
    if (id) {
      oScript.id = id;
    }
    if (fOnload) {
      oScript.onload = fOnload;
    }
    const oHead = document.head || document.getElementsByTagName("head")[0];
    oHead.appendChild(oScript);
    oScript.src = sSrc;
  };
};


function handleCustomerService() {
  const hasZen = document.querySelector("#ze-snippet");
  if (hasZen) {
    window.zE("messenger", "open");
    loadingZen.value = true;
  } else {
    loadingZen.value = true;
    importScript()(
      "https://static.zdassets.com/ekr/snippet.js?key=2bc9ab27-5f00-43ac-a5ab-355609e8c420",
      "ze-snippet",
      () => {
        // window.zE("webWidget", "hide");
        window.zE("messenger", "open");
        zenShow.value = true;

        setTimeout(() => {
          loadingZen.value = false;
        }, 800);
      }
    );
  }
}
function closeWidget() {
  zenShow.value = false;
  console.log("---into closeWidget");
  window.zE("messenger", "close");
}

</script>

<style lang="less" scoped>
.chat-box {
  z-index: 6;
  position: fixed;
  .whatsappIcon {
    cursor: pointer;
    width: 84px;
    height: 84px;
    position: relative;
    top: -4px;
  }
  .float-icon {
    position: fixed;
    &.zendesk-box {
      cursor: pointer;
      height: 66px;
      width: 66px;
      background: #ffffff;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      bottom: 15px;
      right: 15px;
      border: 0px;
      margin-top: 0px;
      box-shadow: rgb(36 36 36 / 10%) 0px 8px 24px 0px,
        rgb(71 69 123 / 4%) 0px 1px 4px 0px;
      animation: 0.2s ease-in 0s 1 normal none running webSDKOnLoad,
        0s ease 0s 1 normal none running undefined;
      z-index: 1000000;
      border-radius: 50%;

      .zendesk {
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 99, 219);
        .gHHEeh {
          position: absolute;
          left: 0px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          transition: top 0.5s cubic-bezier(0.66, 0, 0.12, 1) 0s;
          top: 0px;
          color: #ffffff;
          svg {
            fill: currentColor;
            width: 60% !important;
            height: 60% !important;
          }
        }
        .hideHHEeh {
          top: -100%;
          @media screen and (max-width: 960px) {
            top: 0;
          }
        }
        .fxifZC {
          position: absolute;
          left: 0px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          transition: top 0.5s cubic-bezier(0.66, 0, 0.12, 1) 0s;
          top: 0;
          @media screen and (max-width: 960px) {
            display: none;
          }
        }
        .hideFxifZC {
          top: 100%;
        }
      }
    }
    &.hidefloat {
      animation: 0.2s ease-in 0s 1 normal none running webSDKOnLoad,
        0.7s cubic-bezier(0.66, 0, 0.12, 1) 0s 1 normal none running
          launcherOnOpen;
      @media screen and (max-width: 960px) {
        opacity: 0;
      }
    }
  }
  @media screen and (min-width: 960px){
    .float-icon{
       top: 658px;
       right: 86px;
    }
  }
  .scroll-top {
    top: 0;
    position: fixed;
    z-index: 12;
    margin-top: 0;
    width: 100%;
    background: rgba(239, 250, 255, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    -moz-backdrop-filter: blur(10px);
    -o-backdrop-filter: blur(10px);
  }
  @media screen and (max-width: 960px) {
    .float-icon {
      right: 0px;
      bottom: 13px;
    }
    .whatsappIcon {
      top: -65px;
    }
    .scroll-top {
      width: 100%;
    }
  }
}
</style>