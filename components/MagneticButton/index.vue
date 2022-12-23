<template>
  <div class="magnetic-button" ref="magneticButtonRef" @click="handleClickAction">
    <div class="magnetic-button-filler"></div>
    <span class="magnetic-button-text">
      <span class="magnetic-button-text-inner"><slot /></span>
    </span>
  </div>
</template>

<script setup>
  import { useNuxtApp } from '#app';

  const magneticButtonRef = ref(null);
  const emit = defineEmits(['handleClick']);
  const { ButtonCtrl } = useNuxtApp().vueApp;

  // 行为
  function handleClickAction() {
    emit('handleClick');
  }

  onMounted(async () => {
    if (process.client) {
      new ButtonCtrl(magneticButtonRef.value);
    }
  })
</script>

<style lang="less" scoped>
.magnetic-button {
  width: 206px;
  height: 56px;
  font-size: 16px;
  color: #fff;
  background-color: #0C1BB8;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &-text,
  &-text-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-right: 0;
    &::after {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 100%;
      content: '';
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  &-filler {
    background-color: #3545D6;
    position: absolute;
    width: 150%;
    height: 200%;
    border-radius: 50%;
    top: -50%;
    left: -25%;
    transform: translate3d(0, 75%, 0);
  }

}
</style>
