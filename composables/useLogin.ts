import type { UserInfo } from "~/types";

const userInfo = useLocalStorage(USER_INFO, "");
const token = useLocalStorage(TOKEN_KEY, "");

export function useLogin() {
  function setUserInfo(user: UserInfo) {
    userInfo.value = encryptByBase64(JSON.stringify(user));
  }

  function getUserInfo(): UserInfo | null {
    if (!userInfo.value) return null;
    const userStr = decodeByBase64(userInfo.value);
    // return (JSON.parse(userStr) as UserInfo) || null;
    return null
  }

  function setToken(token: string) {
    userInfo.value = encryptByBase64(token);
  }

  function getToken(): string | null {
    return decodeByBase64(token.value) || null;
  }

  function removeAll() {
    userInfo.value = "";
    token.value = "";
  }

  return { setUserInfo, getUserInfo, setToken, getToken, removeAll };
}
