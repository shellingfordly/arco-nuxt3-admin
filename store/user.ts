import type { UserInfo } from "~~/types/";
import { defineStore } from "pinia";
import { Message } from "@arco-design/web-vue";

interface LoginRes {
  user: UserInfo;
  token: string;
}

export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const { setUserInfo, setToken, removeAll } = useLogin();

  async function login(values: any) {
    const res = await useHttp<LoginRes>("Login", values);
    if (res.code > ErrorCode.OK) return;
    console.log(res)

    setUserInfo(res.data.user);
    setToken(res.data.token);
    router.push("/");
    Message.success(res.msg);
  }

  async function logout() {
    removeAll();
    router.push("/login");
  }

  async function logon(values: any) {
    const res = await useHttp<LoginRes>("Logon", values);
    Message.success(res.msg);
  }

  return {
    login,
    logout,
    logon,
  };
});
