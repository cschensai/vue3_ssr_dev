<template>
  <section class="experience">
    <p class="experience-title">Experience Desty free for 14 days</p>
    <p class="experience-des">
      Start managing your business in Desty ecosystem now!
    </p>
    <div class="experience-btn" @click="goExperience">
      <span>Start Free Trial</span>
      <img
        src="https://static.desty.app/desty-homepage/v2/right_arrow.svg"
        alt=""
      />
    </div>
    <img
      class="white-supers"
      src="https://static.desty.app/desty-homepage/v2/white-supers.png"
      alt=""
    />
    <img
      class="yellow-supers"
      src="https://static.desty.app/desty-homepage/v2/yellow-supers.png"
      alt=""
    />
  </section>
</template>
<script setup>
const goExperience = () => {
  window.location.href = "https://omni.desty.app/register";
};
</script>
<style lang="less" scoped>
.experience {
  width: 100%;
  height: 541px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  background: #eff2ff;
  border-radius: 20px;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  position: relative;
  transform: translateY(25px);
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
    // padding: 16px 20px;
    gap: 12px;
    width: 193px;
    height: 53px;
    background: #0c1bb8;
    border: 2px solid #0c1bb8;
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
  }
  .white-supers {
    position: absolute;
    left: -38px;
    top: -60px;
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
      margin-top: 12px;
      z-index: 1;
    }
    .white-supers {
      left: -160px;
      top: -100px;
    }
    .yellow-supers {
      right: -231px;
      top: 176px;
    }
  }
}
</style>
