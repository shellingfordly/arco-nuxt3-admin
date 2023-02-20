<script lang="ts" setup>

const menus = ref<any[]>([]);
const defaultSelectedKeys = reactive<string[]>([]);
</script>

<template>
  <a-menu
    v-if="menus.length"
    :default-selected-keys="defaultSelectedKeys"
    mode="horizontal"
  >
    <a-menu-item :key="menu.key" v-for="menu in menus">
      {{ menu.name }}
    </a-menu-item>
  </a-menu>
</template>

<style scoped lang="less"></style>
