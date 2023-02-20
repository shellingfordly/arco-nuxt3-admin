import { defineStore } from "pinia";
import { IS_DARK } from "~~/constants";

export const useAppStore = defineStore("app", () => {
  const isDark = ref(false);

  (async () => {
    const cache = await useCache();
    const _is_dark = await cache.getItem(IS_DARK);
    if (_is_dark != null) {
      isDark.value = Boolean(_is_dark);
    }
  })();

  function setIsDark(bool: boolean) {
    var str = bool ? "dark" : "";
    isDark.value = bool;
    document.body.setAttribute("arco-theme", str);
  }

  return {
    isDark,
    setIsDark,
  };
});
