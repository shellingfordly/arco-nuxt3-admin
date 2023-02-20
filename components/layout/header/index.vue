<script lang="ts" setup>
import { IconSun, IconMoon } from "@arco-design/web-vue/es/icon";
import { useAppStore } from "~/store/app";

const appStore = useAppStore();

function onSetDark() {
  appStore.setIsDark(!appStore.isDark);
}
</script>

<template>
  <div class="right_header">
    <a-space align="center" size="medium">
      <IconSun
        v-if="!appStore.isDark"
        class="cursor-pointer"
        size="20px"
        @click="onSetDark"
      />
      <IconMoon v-else size="20px" class="cursor-pointer" @click="onSetDark" />
      <LayoutHeaderUser />
    </a-space>
  </div>
</template>

<style scoped>
.right_header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 14px 20px;
}
</style>
