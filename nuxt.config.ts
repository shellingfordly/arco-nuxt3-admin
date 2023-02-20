export default defineNuxtConfig({
  // ssr: false,
  windicss: {
    config: {
      attributify: true,
    },
  },
  // 插件方式引入arco-design组件
  plugins: ["@/plugins/arco-design"],
  modules: ["@pinia/nuxt", "nuxt-windicss"],
  nitro: {
    storage: {
      db: {
        driver: "fs",
        base: "./db",
      },
    },
    devStorage: {
      db: {
        driver: "fs",
        base: "./db",
      },
    },
  },
  devServer: {
    port: 3001,
  },
});
