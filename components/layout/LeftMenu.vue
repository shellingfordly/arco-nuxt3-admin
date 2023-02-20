<script lang="ts" setup>
import { useMenuStore } from "~/store/menu";
import { reactive } from "vue";
import { MenuItem } from "~~/types";

const menuStore = useMenuStore();
const menus = ref<MenuItem[]>([]);
const route = useRoute();
const defaultOpenKeys = reactive<string[]>([]);
const defaultSelectedKeys = reactive<string[]>([route.path]);

const openKey = route.path.split("/")[1];
if (openKey) defaultOpenKeys.push("/" + openKey);

onMounted(async () => {
  const iconModels = await import("@arco-design/web-vue/es/icon");

  menus.value = menuStore.leftMenus?.map((m) => {
    return { ...m, icon: h(iconModels[m.icon]) };
  }) as any[];
});
</script>

<template>
  <a-menu
    :defaultOpenKeys="defaultOpenKeys"
    :defaultSelectedKeys="defaultSelectedKeys"
    @menuItemClick="(key) => $router.push(key)"
  >
    <template v-for="menu in menus">
      <template v-if="menu.children?.length">
        <a-sub-menu :key="menu.path">
          <template #title>
            <span>
              <template v-if="menu.icon">
                <component :is="menu.icon" />
              </template>
              {{ menu.title }}
            </span>
          </template>
          <a-menu-item :key="item.path" v-for="item in menu.children">
            {{ item.title }}
          </a-menu-item>
        </a-sub-menu>
      </template>
      <template v-else>
        <a-menu-item :key="menu.path">
          <component v-if="menu.icon" :is="menu.icon" />
          {{ menu.title }}
        </a-menu-item>
      </template>
    </template>
  </a-menu>
</template>

<style scoped></style>
