<script setup>
import { useFiltersStore } from "~/store/filters";
import { storeToRefs } from "pinia";

definePageMeta({
  title: "A page",
});

const inputVal = ref("");

const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);
</script>

<template>
  <div>
    <div>a page</div>
    {{ filtersList }}
    <input v-model="inputVal" />
    <button @click="addValueToFilterList(inputVal)">+</button>
  </div>
</template>
