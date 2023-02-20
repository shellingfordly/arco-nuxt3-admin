<script lang="ts" setup>
const route = useRoute();
const routeList = computed(() => {
  return createBreadcrumb([]);
});

function createBreadcrumb(routes: any[]) {
  const list: string[] = [];
  const item = routes.find((r) => route.path.includes(r.path));
  if (item?.meta?.title) list.push(item?.meta?.title as string);
  if (item?.children)
    createBreadcrumb(item?.children).forEach((s) => list.push(s));
  return list;
}
</script>

<template>
  <a-breadcrumb :style="{ margin: '16px 0' }">
    <a-breadcrumb-item v-for="item in routeList" :key="item">
      {{ item }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<style scoped lang="less"></style>
