// store/filters.ts
import { defineStore } from "pinia";

export const useMenuStore = defineStore("filterStore", () => {
  const menus = ref<any[]>([]);

  function addValueToMenu(value: string) {
    menus.value.push(value);
  }
  return { addValueToMenu, menus };
});
