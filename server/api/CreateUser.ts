import { ErrorCode } from "~/utils/errorCode";
import { UserInfo } from "~~/types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (!query.username || !query.password) {
    return { code: ErrorCode.UserOrPwdError, msg: "请输入正确的用户名密码" };
  }

  let data = (await useStorage().getItem("db:user.json")) as UserInfo[];
  // 验证用户名是否存在
  const hasUser = data && data.find((u: any) => u.username === query.username);
  if (hasUser) {
    return { code: ErrorCode.ExistedUser, msg: "用户名已存在！" };
  }

  // 创建用户
  const user: UserInfo = {
    username: query.username as string,
    password: query.password as string,
    auth: [],
  };
  if (query.auth) {
    user.auth = (query.auth as string).split(",").filter((v) => v);
  }
  // 添加用户
  if (data) {
    data.push(user);
  } else {
    data = [user];
  }
  await useStorage().setItem("db:user.json", data);

  return {
    code: ErrorCode.OK,
    msg: "创建用户成功！",
    data: {
      username: user.username,
      auth: user.auth,
    },
  };
});
