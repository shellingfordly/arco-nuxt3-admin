import { ErrorCode } from "~~/constants/errorCode";
import { Message } from "@arco-design/web-vue";
import type { Result } from "~~/types";

const whiteList = ["login", "logon"];

export async function useHttp<T = any>(
  url: string,
  values?: any
): Promise<Result<T>> {
  const { getToken } = useLogin();
  const token = getToken();
  // 未登录
  if (!token && !whiteList.includes(url.toLowerCase())) {
    Message.error("用户未登录！");
    return {} as any;
  }

  const { data } = await useFetch<Result>(`/api/${url}`, {
    params: values,
    headers: {
      Authorization: token!,
    },
  });

  if (data.value == null) {
    return {} as Result;
  }

  if (data.value.code > ErrorCode.OK) {
    Message.error(data.value.msg || "请求出错！");
  }

  return data.value;
}
