<template>
  <div class="error">
    <img src="https://static.desty.app/desty-app/img/error.svg" alt="Desty App, Desty Omni, Desty Page, Desty Store, Desty Menu" />
    <span>{{ $t(text) }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>

<style lang="less" scoped>
.error {
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #a63217;
  font-size: 11px;
  line-height: 16px;
  img {
    width: 14px;
    height: 14px;
  }
  span {
    margin-left: 8px;
  }
}
</style>
