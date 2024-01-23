export default defineNuxtConfig({
  // ssr: false,
  imports: {
    dirs: ["composables/**", "constants/**", "utils/**"],
  },
  plugins: ["@/plugins/arco-design"],
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@unocss/nuxt"],
  nitro: {
    storage: {
      db: {
        driver: "fs",
        base: "/db",
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
