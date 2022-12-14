<template>
  <div class="indexPage">
    <ManageBusiness />
    <DashBoardList />
    <tools />
    <relation />
    <experience />
  </div>
</template>

<script setup>
// import { ElButton } from 'element-plus';
import useUser from '~~/stores';
import ManageBusiness from '~/pages/home/components/ManageBusiness/index.vue';
import DashBoardList from '~/pages/home/components/DashBoardList/index.vue';
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

// const currentCount = useCount();

// const store = useUser();
// const currentNumber = computed(() => {
//   return store.number;
// });
// // composable
// function handleCount() {
//   currentCount.value++;
// }
// // store
// function handleNumber() {
//   store.addNumber();
// }
</script>

<style lang="less" scoped>
.indexPage {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // height: 300px;
}
</style>
