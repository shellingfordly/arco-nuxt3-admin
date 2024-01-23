import { useMenuStore } from "~/store/menu";

const { start, done } = useNProgress();

export default defineNuxtPlugin(() => {
  // const menuStore = useMenuStore();
  // const router = useRouter();
  // const routes = router.getRoutes();
  // menuStore.generateMenus(routes);
  // router.afterEach(async (to) => {
  //   start();
  //   const { getToken } = useLogin();
  //   const token = getToken();
  //   if (token) {
  //     if (to.path === "/login") {
  //       navigateTo({ path: "/" });
  //     }
  //   } else {
  //     if (to.path !== "/login") {
  //       navigateTo(`/login?redirect=${to.path}`);
  //     }
  //   }
  // });
  // router.afterEach(() => {
  //   done();
  // });
});
