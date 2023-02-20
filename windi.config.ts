import { defineConfig } from "windicss/helpers";

export default defineConfig({
  preflight: false,
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  darkMode: "class",
  attributify: true,
  theme: {
    extend: {
      backgroundColor: {
        // 暗黑背景色
        "v-dark": "var(--dark-bg-color)",
      },
    },
  },
});
