import { TOKEN_KEY } from "~~/constants";
import { UserInfo } from "./../types/index";
import { defineStore } from "pinia";
import { USER_INFO } from "~/constants";
import { ErrorCode } from "~~/constants/errorCode";
import { Message } from "@arco-design/web-vue";

interface LoginRes {
  user: UserInfo;
  token: string;
}

export const useUserStore = defineStore("user", () => {
  async function login(values: any) {
    const cache = await useCache();
    const res = await useHttp<LoginRes>("Login", values);
    if (res.code > ErrorCode.OK) return;

    cache.setItem(USER_INFO, res.data.user);
    cache.setItem(TOKEN_KEY, res.data.token);
    useRouter().push("/");
    Message.success(res.msg);
  }

  async function logout() {
    const cache = await useCache();
    cache.removeItem(USER_INFO);
    cache.removeItem(TOKEN_KEY);
    useRouter().push("/login");
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
