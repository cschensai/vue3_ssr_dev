<template>
  <!-- seo -->
  <Head>
    <Title>{{ $t('seo.titlePrev') }} | {{ $t('seo.titleNext') }}</Title>
    <Link rel="alternate" href="https://desty.app" :hreflang="$t('seo.linkHrefLang')" />
    <Meta name="Page title" :content="`desty app | ${$t('seo.metaTitleContentNext')}`" />
    <Meta name="description" :content="$t('seo.metaDescContent')" />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" content="https://desty.app" />
    <Meta property="og:site_name" content="Desty App" />
    <Meta property="og:locale" :content="$t('seo.ogLocaleContent')" />
    <Meta property="og:title" :content="`desty app | ${$t('seo.metaTitleContentNext')}`" />
    <Meta property="og:description" :content="$t('seo.metaDescContent')" />
    <Meta property="og:image" content="https://static.desty.app/desty-design/desty-logo.svg" />
    <Meta property="og:image:secure_url" content="https://static.desty.app/desty-design/desty-logo.svg" />
    <Meta property="og:image:height" content="600" />
    <Meta property="og:image:width" content="600" />
    <Meta property="og:image:type" content="image/jpg" />
    <Meta property="twitter:card" content="summary_large_image" />
    <Meta property="twitter:url" content="https://omni.desty.app" />
    <Meta property="twitter:title" :content="`desty app | ${$t('seo.metaTitleContentNext')}`" />
    <Meta property="twitter:description" :content="$t('seo.ogLocaleContent')" />
    <Meta property="twitter:image" content="https://static.desty.app/desty-design/desty-logo.svg" />
    <Meta name="twitter:domain" content="Desty App" />
  </Head>
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
// import useHome from '~~/stores';
import ManageBusiness from '~/pages/home/components/ManageBusiness/index.vue';
import DashBoardList from '~/pages/home/components/DashBoardList/index.vue';
import Relation from "~~/components/Relation";
import experience from "~~/components/Experience";
import tools from "~~/components/Tools";


// useHead({
//   title: "index page",
//   meta: [
//     {
//       name: "description",
//       content: "description content",
//     },
//   ],
// });

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
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // height: 300px;
}
</style>
