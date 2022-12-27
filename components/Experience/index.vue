<template>
  <section class="experience">
    <div class="experience-content">
      <p class="experience-title">{{ $t("experience.title") }}</p>
      <p class="experience-des">
        {{ $t("experience.des") }}
      </p>
      <MagneticButton class="experience-btn" @click="goExperience">
        <span> {{ $t("experience.btn") }}</span>
        <nuxt-img
          class="right-arrow"
          src="https://static.desty.app/desty-homepage/v2/right_arrow.svg"
          alt="Desty App, Desty Omni, Desty Page, Desty Store, Desty Menu"
          lazy="loading"
        />
      </MagneticButton>
      <nuxt-img
        lazy="loading"
        class="white-supers"
        src="https://static.desty.app/desty-homepage/v2/white-supers.png"
        alt="Desty App, Desty Omni, Desty Page, Desty Store, Desty Menu"
      />
      <nuxt-img
        lazy="loading"
        class="yellow-supers"
        src="https://static.desty.app/desty-homepage/v2/yellow-supers.png"
        alt="Desty App, Desty Omni, Desty Page, Desty Store, Desty Menu"
      />
    </div>
  </section>
  <!-- <div class="test">
  </div> -->
</template>
<script setup>
import MagneticButton from "~/components/MagneticButton/index.vue";
import useHome from "~/stores/index";

const store = useHome();

const goExperience = () => {
  window.location.href = "https://omni.desty.app/register";
  amplitude
    .getInstance()
    .logEvent("general: click free trial button - desty.app", {
      is_logged_in: !!store.currToken,
    });
};
</script>
<style lang="less" scoped>
.experience {
  width: 100%;
  height: 541px;
  // justify-content: center;
  background: #ffffff;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  position: relative;
  transform: translateY(25px);
  &-content {
    width: 100%;
    height: 100%;
    background: #eff2ff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-title {
    font-weight: 700;
    font-size: 56px;
    line-height: 71px;
    text-align: center;
    color: #000000;
    z-index: 1;
    margin: 107px 0 15px 0;
  }
  &-des {
    width: 374px;
    height: 80px;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    color: #000000;
    margin: 0;
  }
  &-btn {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 12px;
    min-width: 165px;
    height: 55px;
    background: #0c1bb8;
    // border: 2px solid #0c1bb8;
    border-radius: 12px;
    margin-top: 29px;
    cursor: pointer;
    span {
      font-family: "Public Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: -0.01em;
      color: #ffffff;
    }
    .right-arrow {
      margin-left: 10px;
    }
  }
  .white-supers {
    position: absolute;
    left: -38px;
    top: 0px;
  }
  .yellow-supers {
    position: absolute;
    right: 0;
    top: 214px;
  }
}
@media screen and (max-width: 768px) {
  .experience {
    height: 324px;
    transform: translateY(20px);
    overflow: hidden;
    &-title {
      width: 329px;
      height: 84px;
      font-weight: 700;
      font-size: 30px;
      line-height: 42px;
      margin: 40px 0 16px 0;
    }
    &-des {
      width: 274px;
      height: 60px;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      z-index: 1;
    }
    &-btn {
      min-width: 154px;
      height: 52px;
      margin-top: 12px;
      z-index: 1;
      padding: 16px 11px;
    }
    .white-supers {
      left: -160px;
      top: -100px;
    }
    .yellow-supers {
      right: -123px;
      top: 152px;
      width: 309.77px;
      height: 204.73px;
    }
  }
}
.test {
  :deep(.magnetic-button) {
    width: 200px;
  }
}
</style>
