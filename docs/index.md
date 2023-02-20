# nuxt3

## 引入第三方组件库

引入 arco-design，在**nuxt.config.ts**中配置
css 在一个地方引入即可

```ts
//nuxt.config.ts
export default defineNuxtConfig({
  // 引入arco-design样式
  css: ["@arco-design/web-vue/dist/arco.css"],
  // 插件方式引入arco-design组件
  plugins: ["@/plugins/arco-design"],
});
```

配置**plugins/arco-design.ts**

```ts
import ArcoVue from "@arco-design/web-vue";
// 此处引入css则不需要在nuxt.config.ts配置
import "@arco-design/web-vue/dist/arco.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ArcoVue);
});
```

## 引入第三方库

解决引入第三方库时报错"window is undefined"
判断是否在客户端，使用到时再加载

```
let library;
if (process.client) {
  const pack = await import("library");
  library = pack.default || pack;
}
```

## 引入 windicss

安装 nuxt-windicss，在**nuxt.config.ts**中配置

没有 windicss 参数不生效，官方配置说明没有写，但我不写不生效，在官方 [Nuxt v3 + WindiCSS](https://stackblitz.com/edit/nuxt-3-windicss?file=app.vue) demo 里看到配置了

在 css 中引入**windi.css**无法生效，不知道为什么，可能还需要配置其他，直接配置 windicss 就可以生效，不需要在引入 windi.css

```ts
export default defineNuxtConfig({
  windicss: {
    config: {
      attributify: true,
    },
  },
  // 只引入windi.css不能生效
  // css: ["virtual:windi.css"],
  modules: ["nuxt-windicss"],
});
```
