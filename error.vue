<template>
  <div class="error">
    <div id="error-lottie">
    </div>
  </div>
</template>

<script setup>
import lottie from 'lottie-web';
onBeforeMount(() => {
  const params = {
    container: document.getElementById('error-lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/private_files/lf30_tonsVH.json',
  };
  lottie.loadAnimation(params);
})
</script>

<style lang="less" scoped>
.error {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  #error-lottie {
    height: 60%;
  }
}
</style>