import { defineNuxtConfig } from 'nuxt';
import { loadEnv } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const lifycycle = process.env.npm_lifecycle_event;

const envName = process.env.APP_ENV;
const envData = loadEnv(envName, 'env');

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/less/uilib.less', '~/assets/less/index.less'],
  meta: {
    title: 'Desty',
    meta: [
      // 防止点击输入框ios页面进行缩放
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: 'https://www.desty.app/favicon.ico?v=2',
    }]
  },
  build: {
    transpile: lifycycle === 'build' ? ['element-plus'] : [],
    // 分离css
    extractCSS: true,
    // bundle analyze
    analyze: true,
    // postcss
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  // build modules
  buildModules: ["@pinia/nuxt"],
  modules: [
    // 请求代理配置，解决跨域
	  '@nuxtjs/proxy',
    '@nuxt/image-edge',
  ],
  // 跨域代理配置
  proxy: {
    '/api': {
      target: 'https://staging.desty.app', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '', // 把 /api 替换成 ''
      }
    }
  },
  // 注册运行时环境配置变量
  publicRuntimeConfig: envData,
  vite: {
    envDir: '~/env',
    plugins: [
      // element-plus按需加载
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        dts: true,
        resolvers: [ElementPlusResolver()]
      }),
    ],
  },
})
