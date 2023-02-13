// store/filters.ts
import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filterStore", () => {
  const filtersList = ref(["youtube", "twitch"]);

  function addValueToFilterList(value: string) {
    filtersList.value.push(value);
  }
  return { addValueToFilterList, filtersList };
});
