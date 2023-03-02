import { ErrorCode } from "~~/constants/errorCode";
import { UserInfo } from "~~/types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  let data = (await useStorage().getItem("db:user.json")) as UserInfo[];

  const user = data && data.find((u: any) => u.username === query.username);

  if (!user) {
    return { code: ErrorCode.NotUser, msg: "没有此用户！" };
  }

  const rightPwd = user.password === query.password;

  if (rightPwd) {
    return {
      code: ErrorCode.OK,
      data: { username: user.username, auth: user.auth },
      msg: "登录成功！",
    };
  } else {
    return { code: ErrorCode.PasswordError, msg: "密码错误！" };
  }
});
