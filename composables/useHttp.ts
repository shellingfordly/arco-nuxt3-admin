import { TOKEN_KEY } from "~/constants";
import { useCache } from "./useCache";
import { ErrorCode } from "~~/constants/errorCode";
import { Message } from "@arco-design/web-vue";
import { Result } from "~~/types";

const whiteList = ["login", "logon"];

export async function useHttp<T = any>(
  url: string,
  values?: any
): Promise<Result<T>> {
  const cache = await useCache();
  const token = (await cache.getItem(TOKEN_KEY)) as string;
  // 未登录
  if (!token && !whiteList.includes(url.toLowerCase())) {
    Message.error("用户未登录！");
    return {} as any;
  }

  const res = (await $fetch(`/api/${url}`, {
    params: values,
    headers: {
      Authorization: token,
    },
  })) as any as Result;

  if (res.code > ErrorCode.OK && res.msg) {
    Message.error(res.msg);
  }
  return res;
}
