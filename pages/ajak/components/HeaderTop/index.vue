<template>
  <div class="header-top">
    <span>🎉</span>
    <span @click="goLink('https://desty.page/company/ExtendedPreARound')">{{
      $t('newHomepage.headerLink.text1')
    }}</span>
    <i class="el-icon-close" @click="handleHeaderTop()"></i>
  </div>
</template>

<script setup>
  const emit = defineEmits(['handleHeaderTop'])
  function goLink(url) {
    window.open(url)
  }
  function handleHeaderTop() {
    emit('handleHeaderTop');
  }
</script>

<style lang="less" scoped>
.header-top {
  box-sizing: border-box;
  width: 100%;
  height: 72px;
  background: #3d5cb8;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
  padding: 14px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  span {
    &:nth-child(2) {
      margin-left: 10px;
      width: 220px;
    }
  }
  i {
    cursor: pointer;
    font-size: 26px;
    position: absolute;
    right: 12px;
    top: 23px;
  }
  @media screen and (max-width: 320px) {
    padding: 12px;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    height: 48px;
    text-align: center;
    display: inline-block;
    span {
      &:nth-child(2) {
        display: inline-block;
        cursor: pointer;
        width: unset;
      }
    }
    i {
      font-size: 16px;
      right: 35px;
      top: 17px;
    }
  }
}
</style>
