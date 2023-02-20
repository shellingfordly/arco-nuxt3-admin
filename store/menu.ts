import type { MenuItem } from "~~/types";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("filterStore", () => {
  const leftMenus = ref<MenuItem[]>([]);

  function generateMenus(routes: any[]) {
    if (!leftMenus.value?.length) {
      leftMenus.value = createMenus(routes);
    }
  }
  return { leftMenus, generateMenus };
});

function createMenus(routes: any[], path?: string): MenuItem[] {
  const menuMap: Record<string, MenuItem> = {};

  routes = routes
    .filter((r) => !r.meta?.isHide)
    .sort((a, b) => a.meta?.sort - b.meta?.sort);

  const initMenu = (route: any): MenuItem => ({
    title: route.meta?.title,
    path: path ? `${path}/${route.path}` : route.path,
    name: route.name,
    icon: route.meta?.icon,
    children: [],
  });

  for (const route of routes) {
    const pageId = route.meta.pageId;
    if (pageId && !menuMap[pageId]) {
      menuMap[pageId] = initMenu(route);
    }
  }

  for (const route of routes) {
    const parentId = route.meta.parentId;
    if (parentId && menuMap[parentId]) {
      menuMap[parentId].children?.push(initMenu(route));
    }
  }
  return Object.values(menuMap);
}
