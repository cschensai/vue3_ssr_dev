<template>
  <div class="indexPage">
    <!-- <ElButton type="danger" @click="handleCount">add count, {{ currentCount }}</ElButton> -->
    <!-- <ElButton type="danger" @click="handleNumber">add number, {{ currentNumber }}</ElButton> -->
    <!-- <nuxt-img preload src="https://static.desty.app/desty-store/philippines-img.png" loading="lazy" width="200px" height="200px" /> -->
    <tools />
    <relation />
    <experience />
  </div>
</template>

<script setup>
// import { ElButton } from 'element-plus';
import useUser from "~~/stores";
import Relation from "~~/components/Relation";
import experience from "~~/components/Experience";
import tools from "~~/components/Tools";

useHead({
  title: "index page",
  meta: [
    {
      name: "description",
      content: "description content",
    },
  ],
});

const currentCount = useCount();

const store = useUser();
const currentNumber = computed(() => {
  return store.number;
});
// composable
function handleCount() {
  currentCount.value++;
}
// store
function handleNumber() {
  store.addNumber();
}
</script>

<style lang="less" scoped>
.indexPage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // height: 300px;
}
</style>
