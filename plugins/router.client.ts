import { useMenuStore } from "~/store/menu";
import { TOKEN_KEY } from "~~/constants";

const { start, done } = useNProgress();

export default defineNuxtPlugin(() => {
  const menuStore = useMenuStore();
  const router = useRouter();
  const routes = router.getRoutes();

  menuStore.generateMenus(routes);

  router.afterEach(async (to) => {
    start();
    const cache = await useCache();
    const token = await cache.getItem(TOKEN_KEY);

    if (token) {
      if (to.path === "/login") {
        router.push({ path: "/" });
      }
    } else {
      if (to.path !== "/login") {
        router.push(`/login?redirect=${to.path}`);
      }
    }
  });
  router.afterEach(() => {
    done();
  });
});
