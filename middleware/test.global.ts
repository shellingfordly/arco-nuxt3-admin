import { useMenuStore } from "~/store/menu";
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware((to, from) => {
  const router = useRouter();
  const routes = router.getRoutes();
  console.log("routes mid====", routes);

  const menuStore = useMenuStore();
  const { addValueToMenu } = menuStore;
  const { menus } = storeToRefs(menuStore);
  console.log("menus====", menus);
});
